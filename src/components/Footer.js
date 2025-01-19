import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-32 text-white">
      <div className="lg:w-[1400px] mx-auto">
        <div className="lg:flex block justify-between items-end border-b border-white pb-20 ps-5">
          <div>
            <p className="text-lg lg:text-2xl font-bold mb-8 lg:mb-3">
              Contact Details
            </p>
            <p className="text-sm lg:text-base w-full lg:w-[500px] mb-8">
              2093, Philadelphia Pike, DE 19703, Claymont
              suvansh.bansal@flexiple.com
            </p>
            <div className="flex gap-10 mt-5 lg:text-xl mb-8 ">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-center rounded-full">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-center rounded-full">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-center rounded-full">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-center rounded-full">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap lg:gap-12">
            <p>Media</p>
            <p>Full-time</p>
            <p>Contractor</p>
            <p>Blogs</p>
            <p>About</p>
            <p>FAQ</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="flex justify-between px-5 py-5 lg:py-10">
          <img className="w-[96px] lg:w-[96px]" src="/logo.svg" />
          <div className="flex lg:gap-10">
            <p className="hidden lg:block">Terms of use</p>
            <p className="border-r border-white lg:pe-5 hidden lg:block">
              Privacy policy
            </p>
            <p className="opacity-70 text-sm lg:text-base">
              Copyright@2025 Fleiple Inc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
