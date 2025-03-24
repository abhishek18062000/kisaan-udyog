import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLeaf, FaRobot, FaSnowflake, FaUsers, FaShoppingBasket, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/getStarted"); 
  };

  return (
    <div className="min-h-screen text-gray-900 flex flex-col items-center bg-green-50">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-green-700 bg-opacity-60 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Kisaan Udyog 2.o</h1>
        <div className="hidden md:flex space-x-24">
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">About Us</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Contact Us</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Marketplace</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Login</a>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-green-700 bg-opacity-60 flex flex-col items-center py-4 space-y-4 md:hidden">
            <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">About Us</a>
            <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Contact Us</a>
            <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Marketplace</a>
            <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-300">Login</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="text-center py-32 bg-green-600 bg-opacity-80 text-white w-full mt-0 relative">
        <motion.h1 
          className="text-6xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Scalable Farming Web Application
        </motion.h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          AI-powered insights, social networking, and data-driven solutions for smarter farming decisions.
        </p>
        <Button 
          className="bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureRow 
          icon={<FaLeaf className="text-green-700 text-8xl" />} 
          title="Crop Prediction System"
          description="AI-based recommendations using soil type, weather, and location data. Supports regional languages."
        />
        <FeatureRow 
          icon={<FaRobot className="text-blue-600 text-8xl" />} 
          title="AI Chatbot for Queries"
          description="Ask agriculture-related questions via text or voice. Multilingual support for better accessibility."
        />
        <FeatureRow 
          icon={<FaSnowflake className="text-cyan-600 text-8xl" />} 
          title="Cold Storage Finder"
          description="Find nearby cold storages, check availability, and book space with map integration."
        />
        <FeatureRow 
          icon={<FaUsers className="text-orange-600 text-8xl" />} 
          title="Farmer Social Network"
          description="Engage with other farmers, share experiences, and stay updated with agricultural trends."
        />
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <FeatureRow 
            icon={<FaShoppingBasket className="text-purple-600 text-8xl" />} 
            title="Buy & Sell Marketplace"
            description="Sell crops directly to buyers with price, quantity, and location filters."
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-green-700 text-white py-6 text-center mt-12">
        <p className="text-lg">&copy; {new Date().getFullYear()} Scalable Farming Web Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureRow({ icon, title, description }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center space-y-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>{icon}</div>
      <h3 className="text-4xl font-bold text-green-700">{title}</h3>
      <p className="text-gray-700 text-lg">{description}</p>
    </motion.div>
  );
}
