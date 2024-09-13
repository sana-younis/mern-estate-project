import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Footer() {
  // const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <footer
      className="bg-slate-100 p-14 border-t border-t-1"
      style={{ color: "#646464" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left flex-1">
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: "#00A573" }}
            >
              MernEstate
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
              porro? A sequi enim.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <h2
              className="font-semibold text-md text-center md:text-left mb-3"
              style={{ color: "#181A20" }}
            >
              Quick Links
            </h2>
            <div className="flex flex-row md:flex-col gap-4 text-center md:text-left">
              <div className="flex justify-start items-center self-start">
                <FaCheckCircle style={{ color: "#00A573" }} />
                <a href="#" className="hover:text-gray-400 ml-2">
                  Home
                </a>
              </div>
              <div className="flex justify-start items-center self-start">
                <FaCheckCircle style={{ color: "#00A573" }} />
                <a href="#" className="hover:text-gray-400 ml-2">
                  About Us
                </a>
              </div>
              <div className="flex justify-start items-center self-start">
                <FaCheckCircle style={{ color: "#00A573" }} />
                <a href="#" className="hover:text-gray-400 ml-2">
                  Services
                </a>
              </div>
              <div className="flex justify-start items-center self-start">
                <FaCheckCircle style={{ color: "#00A573" }} />
                <a href="#" className="hover:text-gray-400 ml-2">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h2
              className="font-semibold text-md text-center md:text-left mb-3"
              style={{ color: "#181A20" }}
            >
              Contact Details
            </h2>
            <div className="text-center md:text-left">
              <div className="flex justify-start items-center self-start">
                <FaMapMarkedAlt style={{ color: "#00A573" }} />
                <p className="mb-4 ml-2">123 Suite, USA</p>
              </div>
              <div className="flex justify-start items-center self-start">
                <FaPhone style={{ color: "#00A573" }} />

                <p className="mb-4 ml-2">(123) 456-7890</p>
              </div>
              <div className="flex justify-start items-center self-start">
                <FaEnvelope style={{ color: "#00A573" }} />
                <p className="ml-2">info@realestateco.com</p>
              </div>
            </div>
          </div>

          {/* Search Listing */}
          <div className="flex-1">
            <h2
              className="font-semibold text-md text-center md:text-left mb-3"
              style={{ color: "#181A20" }}
            >
              Search Listing
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              soluta odit.
            </p>
            <div className="text-center md:text-left">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-200 p-3 rounded-sm flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search...."
                  className="bg-transparent focus:outline-none w-full sm:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <FaSearch className="text-slate-600" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
