import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-sky-950 text-white space-y-16 py-16 md:px-16 sm:px-10 px-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <Link to="/" className="text-3xl font-semibold text-neutral-200 flex items-center gap-x-2 mb-4">
                        <FiBookOpen size={36} />
                        LearnHub
                    </Link>
                    <p className="text-sm">
                        The best place to discover new learning resources, books, and courses.
                    </p>
                </div>

                {/* Customer Support Section */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/faq" className="text-sm text-neutral-400 hover:text-white">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-sm text-neutral-400 hover:text-white">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/returns" className="text-sm text-neutral-400 hover:text-white">Returns</Link>
                        </li>
                        <li>
                            <Link to="/shipping" className="text-sm text-neutral-400 hover:text-white">Shipping</Link>
                        </li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="text-sm text-neutral-400 hover:text-white">About Us</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="text-sm text-neutral-400 hover:text-white">Terms of Service</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="text-sm text-neutral-400 hover:text-white">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/careers" className="text-sm text-neutral-400 hover:text-white">Careers</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://facebook.com" className="text-sm text-neutral-400 hover:text-white">Facebook</a>
                        </li>
                        <li>
                            <a href="https://twitter.com" className="text-sm text-neutral-400 hover:text-white">Twitter</a>
                        </li>
                        <li>
                            <a href="https://instagram.com" className="text-sm text-neutral-400 hover:text-white">Instagram</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" className="text-sm text-neutral-400 hover:text-white">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="text-center text-sm mt-8 border-t border-neutral-700 pt-8">
                <p className="text-neutral-400">&copy; 2025 LearnHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
