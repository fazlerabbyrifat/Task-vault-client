import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-black text-white">
      <div>
        <p>&copy; {currentYear} - All right reserved by Task Vault</p>
      </div>
    </footer>
  );
};

export default Footer;
