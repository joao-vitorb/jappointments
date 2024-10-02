import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem natus praesentium aliquid saepe unde, delectus, nemo explicabo optio reiciendis deserunt laborum voluptatum officiis cum commodi, ea cumque harum in.</p>
        </div>

        {/* center section */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* right section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+1-212-456-7890</li>
                <li>jappointments@email.com</li>
            </ul>
        </div>
      </div>

        {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ JAppointments - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
