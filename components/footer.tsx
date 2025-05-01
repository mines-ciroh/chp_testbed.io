import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <div className="max-w-screen-xl mx-auto px-4">
                <p className="mb-2">© {new Date().getFullYear()} CIROH Hydrologic Prediction Testbed</p>
                <nav className="flex justify-center gap-4 mt-2">
                    <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>
                    <a href="/terms" className="text-white hover:underline">Terms of Service</a>
                    <a href="/contact" className="text-white hover:underline">Contact Us</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
