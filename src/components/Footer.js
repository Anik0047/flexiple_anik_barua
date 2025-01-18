import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="w-[1400px] mx-auto">
        <div className="flex justify-between items-end border-b border-white">
          <div>
            <p className="text-2xl font-bold mb-3">Contact Details</p>
            <p className="text-xl w-[500px]">
              2093, Philadelphia Pike, DE 19703, Claymont
              suvansh.bansal@flexiple.com
            </p>
            <div className="flex ">
              <div className="w-6 h-6">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="w-6 h-6">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="w-6 h-6">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="w-6 h-6">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <p>Media</p>
            <p>Full-time</p>
            <p>Contractor</p>
            <p>Blogs</p>
            <p>About</p>
            <p>FAQ</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="flex justify-between">
          <img src="/logo.svg" />
          <div className="flex">
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Copyright@2025 Fleiple Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
