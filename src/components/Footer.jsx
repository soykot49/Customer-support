import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20 py-12 px-10">
      
      {/* Responsive Grid */}
      <div className="grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-5 
                      gap-10">

        {/* brand section added */}
        <div>
          <h3 className="font-bold text-lg">CS — Ticket System</h3>
          <p className="text-sm opacity-80 mt-3 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* company added */}
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">About Us</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Our Mission</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Contact Sales</p>
        </div>

        {/* services added*/}
        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Products & Services</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Customer Stories</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Download Apps</p>
        </div>

        {/* information added*/}
        <div>
          <h4 className="font-bold mb-3">Information</h4>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Privacy Policy</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Terms & Conditions</p>
          <p className="opacity-80 hover:text-purple-400 cursor-pointer">Join Us</p>
        </div>

        {/* social link added*/}
        <div>
          <h4 className="font-bold mb-3">Social Links</h4>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400 mb-2">
            <FaTwitter />
            <span>@CS — Ticket System</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400 mb-2">
            <FaFacebook />
            <span>@CS — Ticket System</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400 mb-2">
            <FaInstagram />
            <span>@CS — Ticket System</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-purple-400">
            <FaEnvelope />
            <span>support@cs.com</span>
          </div>
        </div>

      </div>

      {/* copyright */}
      <p className="text-center mt-10 text-sm opacity-60">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
