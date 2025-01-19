import React from "react";

const Hero = () => {
  return (
    <div className="bg-custom-gradient">
      <div className="navbar bg-base-100 lg:w-[1400px] mx-auto bg-transparent text-white lg:-mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl">
            <img className="w-[75px] lg:w-[110px]" src="/logo.svg" />
          </a>
        </div>
        <div className="navbar hidden lg:flex lg:-ms-52">
          <ul className="menu menu-horizontal px-1">
            <li className="lg:m-5">
              <a className="leading-6 text-base opacity-75">
                For Companies <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="lg:m-5">
              <a className="leading-6 text-base opacity-75">
                For Talent <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="lg:m-5">
              <a className="leading-6 text-base opacity-75">
                Our Products <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  ">
          <a className="btn bg-transparent text-white px-6 text-base border border-gray-400 opacity-75 lg:mr-10 hidden lg:flex">
            Find Jobs <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a className="lg:btn bg-purple-600 lg:bg-purple-600 sm:lg:text-white px-6 rounded-lg py-2 lg:py-0 font-bold lg:px-6 text-sm lg:text-base  lg:mr-6 border-0 me-5">
            Hire Developers <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a className="text-lg hidden lg:flex">Login</a>
        </div>
      </div>
      <div className="hero bg-transparent pb-20">
        <div className="hero-content text-center lg:mt-20">
          <div className="text-white">
            <h1 className="text-3xl lg:text-5xl text-left lg:text-center font-bold lg:mb-5 lg:mx-40">
              Hire .NET Developers: Affordable, Dedicated .NET Experts in 72
              hours
            </h1>
            <p className="lg:mx-40 mt-5 text-base lg:text-lg text-left lg:text-center lg:opacity-75">
              Hire .NET developers to enhance your project's efficiency and
              productivity. Build dynamic web applications using ASP.NET, C#,
              Entity Framework, and MVC.
            </p>
            <p className="lg:mx-60 mt-5 text-base lg:text-lg text-left lg:text-center opacity-75">
              Access 100+ expert NET developers, engineers and architects from
              Flexiple, handpicked through a 5-hour evaluation process.
            </p>
            <div className="text-left lg:text-center mt-10">
              <button className="btn bg-white text-black text-base font-bold lg:mb-7 px-10">
                Hire dream developers{" "}
                <i className="fa-solid fa-arrow-right ms-1"></i>
              </button>
            </div>
            <div className="text-left lg:text-center mt-12 lg:mt-0">
              <i className="fa-solid fa-star text-2xl"></i>
              <i className="fa-solid fa-star text-2xl lg:mx-3"></i>
              <i className="fa-solid fa-star text-2xl"></i>
              <i className="fa-solid fa-star text-2xl lg:mx-3"></i>
              <i className="fa-solid fa-star text-2xl"></i>
            </div>
            <p className="text-left lg:text-center lg:mx-60 mt-8 text-base lg:text-lg opacity-75">
              Clients rate Flexiple .NET developers 4.8 / 5 on average based on
              10,482 reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
