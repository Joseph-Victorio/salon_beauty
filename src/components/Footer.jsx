import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-text text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">Yulia Beauty Salon</h4>
          <p>
            Perawatan kecantikan profesional dengan pengalaman bertahun-tahun.
          </p>
          <div className="flex space-x-3 mt-3">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Layanan</h4>
          <ul>
            <li>Perawatan Wajah</li>
            <li>Perawatan Rambut</li>
            <li>Manicure & Pedicure</li>
            <li>Body Treatment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Kontak Kami</h4>
          <p>Jl. Mawar No. 123, Jakarta</p>
          <p>Telp: 0812-3456-7890</p>
          <p>Email: info@yuliabeauty.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
