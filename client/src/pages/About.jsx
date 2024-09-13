import { FaCalendarAlt, FaMedal } from "react-icons/fa";
// import { Link } from "react-router-dom";

function About() {
  return (
    // <div className="py-20 px-4 max-w-6xl mx-auto">
    //   <h1 className="text-3xl font-bold mb-4 text-slate-800">
    //     About Real Estate
    //   </h1>
    //   <p className="mb-4 text-slate-700">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis
    //     accusantium quos dolore qui eligendi, odio molestias ducimus eum
    //     repellendus praesentium, dolores molestiae nam id beatae veritatis
    //     aperiam. Laboriosam, accusantium! Lorem ipsum dolor sit amet consectetur
    //     adipisicing elit. Porro quis accusantium quos dolore qui eligendi, odio
    //     molestias ducimus eum repellendus praesentium, dolores molestiae nam id
    //     beatae veritatis aperiam. Laboriosam, accusantium!
    //   </p>
    //   <p className="mb-4 text-slate-700">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis
    //     accusantium quos dolore qui eligendi, odio molestias ducimus eum
    //     repellendus praesentium, dolores molestiae nam id beatae veritatis
    //     aperiam. Laboriosam, accusantium! Lorem ipsum dolor sit amet consectetur
    //     adipisicing elit. Porro quis accusantium quos dolore qui eligendi, odio
    //     molestias ducimus eum repellendus praesentium, dolores molestiae nam id
    //     beatae veritatis aperiam. Laboriosam, accusantium!
    //   </p>
    //   <p className="mb-4 text-slate-700">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis
    //     accusantium quos dolore qui eligendi, odio molestias ducimus eum
    //     repellendus praesentium, dolores molestiae nam id beatae veritatis
    //     aperiam. Laboriosam, accusantium! Lorem ipsum dolor sit amet consectetur
    //     adipisicing elit. Porro quis accusantium quos dolore qui eligendi, odio
    //     molestias ducimus eum repellendus praesentium, dolores molestiae nam id
    //     beatae veritatis aperiam. Laboriosam, accusantium!
    //   </p>
    // </div>
    <>
      <div className="bg-gray-800 bg-opacity-70 w-full h-[370px]">
        <div className="relative">
          <h3 className="absolute font-bold text-5xl top-40 left-[40%] text-white">
            About Us
          </h3>
          <img
            className="w-full h-[370px] object-cover"
            src="/aaron-huber-G7sE2S4Lab4-unsplash (1).jpg"
            alt="home"
          />
        </div>
      </div>
      {/* Who we are */}
      <div className="bg-gray-100 py-20 px-10">
        <div
          className="font-semibold text-3xl pb-20"
          style={{ color: "#181A20" }}
        >
          <h1>About Us</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-y-8 lg:gap-x-16">
          <div className="">
            <div className="flex justify-start items-end gap-4">
              <div>
                <img
                  src="../ab_01.png"
                  alt="house"
                  className="w-[280px] h-[400px] object-cover"
                />
              </div>
              <div>
                <img
                  src="../ab_02.png"
                  alt="house"
                  className="w-[233px] h-[288px] object-cover"
                />
              </div>
            </div>
            <div className="bg-white px-3 py-6 shadow-md rounded-lg flex flex-col justify-center items-center self-center w-[280px] -mt-12 relative z-99 ml-24">
              <p
                className="pb-4 text-sm font-semibold text-center"
                style={{ color: "#181A20" }}
              >
                10k+ Exclusive Agents
              </p>
              <img src="../list-img.png" alt="" className="w-32" />
            </div>
          </div>
          <div className="max-w-full lg:max-w-[600px]">
            <div>
              <h4
                className="text-lg lg:text-xl font-semibold"
                style={{ color: "#00A573" }}
              >
                Who we are?
              </h4>
              <h2
                className="text-3xl lg:text-4xl font-semibold mb-4"
                style={{ color: "#181A20" }}
              >
                The experts in property
              </h2>
              <p
                className="text-base lg:text-lg pt-2 leading-normal"
                style={{ color: "#646464" }}
              >
                We are a leading company in the real estate sector, specializing
                in providing a wide range of services and solutions to meet the
                needs of buying, renting, and managing real estate assets. With
                experience and dedication, we are committed to accompanying you
                in all aspects related to real estate, ensuring customer
                satisfaction and success. Let us help you create investment
                opportunities and enjoy life in an ideal space!
              </p>
            </div>
            {/* code for container */}
            <div className="container mx-auto py-10">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {/* First Container */}
                <div className="max-w-xs bg-white shadow-md rounded-lg py-3 px-5 flex justify-start items-center gap-4 relative">
                  <div className="text-3xl" style={{ color: "#00A573" }}>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center">
                      <FaCalendarAlt className="text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h2
                      className="font-bold text-2xl"
                      style={{ color: "#181A20" }}
                    >
                      8+
                    </h2>
                    <p
                      className="text-xs md:text-sm lg:text-sm leading-normal"
                      style={{ color: "#646464" }}
                    >
                      Years of Experience
                    </p>
                  </div>
                </div>

                {/* Second Container */}
                <div className="max-w-xs bg-white shadow-md rounded-lg py-3 px-5 flex justify-start items-center gap-4 relative">
                  <div className="text-3xl" style={{ color: "#00A573" }}>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center">
                      <FaMedal className="text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h2
                      className="font-bold text-2xl"
                      style={{ color: "#181A20" }}
                    >
                      1.2K+
                    </h2>
                    <p
                      className="text-xs md:text-sm lg:text-sm leading-normal"
                      style={{ color: "#646464" }}
                    >
                      Expert Researchers
                    </p>
                  </div>
                </div>

                {/* Third Container */}
                <div className="max-w-xs bg-white shadow-md rounded-lg py-3 px-5 flex justify-start items-center gap-4 relative">
                  <div className="text-3xl" style={{ color: "#00A573" }}>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center">
                      <FaCalendarAlt className="text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h2
                      className="font-bold text-2xl"
                      style={{ color: "#181A20" }}
                    >
                      800+
                    </h2>
                    <p
                      className="text-xs md:text-sm lg:text-sm"
                      style={{ color: "#646464" }}
                    >
                      Properties Sold
                    </p>
                  </div>
                </div>

                {/* Fourth Container */}
                <div className="max-w-xs bg-white shadow-md rounded-lg py-3 px-5 flex justify-start items-center gap-4 relative">
                  <div className="text-3xl" style={{ color: "#00A573" }}>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center">
                      <FaCalendarAlt className="text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h2
                      className="font-bold text-2xl"
                      style={{ color: "#181A20" }}
                    >
                      500+
                    </h2>
                    <p
                      className="text-xs md:text-sm lg:text-sm"
                      style={{ color: "#646464" }}
                    >
                      Ongoing Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h4
            className="text-lg lg:text-xl font-semibold mb-2"
            style={{ color: "#00A573" }}
          >
            Our Clients
          </h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <p
            className="max-w-xl text-md leading-normal mx-auto"
            style={{ color: "#646464" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ad
            consequuntur doloribus quia quasi? Obcaecati libero ea rem ipsum
            dicta aliquam. Quidem esse numquam aspernatur sunt mollitia ullam,
            quas atque.
          </p>
          {/* Testimonials */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 m-3 mt-8">
            {/* First Testimonial */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Second Testimonial */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Third Testimonial */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Fourth  */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Fifth */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Sixth */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="/ab_02.png"
                  alt="John Doe"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">Los Angeles, CA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                John helped me find the perfect home! His knowledge of the
                market and professionalism made the process so easy.
              </p>
              <div className="flex items-center">
                {/* Star Rating */}
                <div className="text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.162c.969 0 1.371 1.24.588 1.81l-3.372 2.452a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.372 2.451c-.785.57-1.841-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.49 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.691l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="p-10 bg-slate-100">
        <h1
          className="font-bold text-3xl text-center"
          style={{ color: "#181A20" }}
        >
          Our Partners & Investors
        </h1>
        <div className="grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 gap-8 mt-10 justify-center items-center max-w-6xl mx-auto p-2">
          <img
            src="/logo-about-01.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="/logo-about-02.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="/logo-about-03.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="/logo-about-04.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="/logo-about-05.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src="/logo-about-02.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default About;
