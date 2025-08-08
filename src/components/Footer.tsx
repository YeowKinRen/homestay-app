import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-theme text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-secondary">Classical Cozy Homestay</h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Enjoy a cozy stay in the heart of Melaka, surrounded by a beautiful village view. 
            Perfect for family gatherings and group vacations, our homestay offers the charm of 
            traditional living with the comfort of modern amenities.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
            <li><a href="#location" className="hover:text-white">Location</a></li>
            <li><a href="#surroundings" className="hover:text-white">Surroundings</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-secondary mt-1" />
              <span>
                Classical Cozy Homestay<br />
                No. 235-F, Kampung Lapan 3/11 Jalan Kenanga<br />
                75200 Melaka, Melaka, Malaysia
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-secondary" />
              <a href="tel:+60123229830">+6012-322 9830</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" />
              <a href="mailto:yeowkinsern@gmail.com">yeowkinsern@gmail.com</a>
            </li>
          </ul>

          <div className="mt-4">
            <p className="text-sm mb-2">Follow Us</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-secondary"><FaFacebookF /></a>
              <a href="#" className="hover:text-secondary"><FaInstagram /></a>
              <a href="#" className="hover:text-secondary"><FaTiktok /></a>
              <a href="https://wa.me/60123229830" className="hover:text-secondary"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
        <p>&copy; 2025 Classical Cozy Homestay. All rights reserved.</p>
        <p className="mt-1">
          Created by <a href="https://github.com/YeowKinRen" target="_blank" className="text-secondary hover:underline">Kin Ren</a>
        </p>
      </div>
    </footer>
  );
}
