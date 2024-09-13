/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import Contact from "../components/Contact";

function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchListing() {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);
  return (
    <main className="bg-white">
      {/* <div>
        <img
          className="w-full h-[350px] object-cover "
          src="https://clarity.pk/wp-content/uploads/2021/03/realestate-pakistan-scaled.jpg"
          alt="house"
        />
      </div> */}
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong</p>
      )}
      {listing && !loading && !error && (
        <>
          {/* <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-white cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
            {copied && (
              <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-white p-2">
                Link copied!
              </p>
            )}
          </div>
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold" style={{ color: "#181A20" }}>
              {listing.name} - ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <p
              className="flex items-center gap-2  text-sm"
              style={{ color: "#646464" }}
            >
              <FaMapMarkerAlt style={{ color: "#00A573" }} />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p
                  className=" w-full max-w-[200px] text-white text-center p-1 rounded-md"
                  style={{ backgroundColor: "#00A573" }}
                >
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>
            <p>
              <span className="font-semibold" style={{ color: "#181A2" }}>
                Description -{" "}
              </span>
              {listing.description}
            </p>
            <ul className="font-semibold text-sm flex items-center gap-4 sm:gap-6 flex-wrap">
              <li
                className="flex items-center gap-1 whitespace-nowrap font-semibold text-sm"
                style={{ color: "#00A573" }}
              >
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </li>
              <li
                className="flex items-center gap-1 whitespace-nowrap font-semibold text-sm"
                style={{ color: "#00A573" }}
              >
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </li>
              <li
                className="flex items-center gap-1 whitespace-nowrap font-semibold text-sm"
                style={{ color: "#00A573" }}
              >
                <FaParking className="text-lg" />
                {listing.parking ? "Parking Spot" : "No Parking"}
              </li>
              <li
                className="flex items-center gap-1 whitespace-nowrap font-semibold text-sm"
                style={{ color: "#00A573" }}
              >
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className=" text-white rounded-lg uppercase hover:opacity-95 p-3"
                style={{ color: "#00A573" }}
              >
                Contact Landlord
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </>
      )}
    </main>
  );
}

export default Listing;
