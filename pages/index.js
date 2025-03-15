import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, MessageCircle, Store, Users } from "lucide-react";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  const features = [
    {
      title: "🌱 Crop Prediction",
      description: "Predict the best crops to grow based on soil, weather, and location.",
      icon: <Leaf size={40} className="text-green-600" />,
      link: "/crop-prediction",
    },
    {
      title: "🏭 Cold Storage Finder",
      description: "Locate the nearest cold storage facilities and check availability in real time.",
      icon: <Store size={40} className="text-blue-600" />,
      link: "/cold-storage",
    },
    {
      title: "🤖 AI Chatbot",
      description: "Get instant answers to your farming queries with our AI-powered chatbot.",
      icon: <MessageCircle size={40} className="text-orange-600" />,
      link: "/ai-chatbot",
    },
    {
      title: "🌾 Farmer Community",
      description: "Connect with fellow farmers, share experiences, and trade crops.",
      icon: <Users size={40} className="text-yellow-600" />,
      link: "/farmer-community",
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-green-700 mt-10"
      >
        🌿 Welcome to Kisaan Udyog 2.0 🚜
      </motion.h1>
      <p className="text-lg text-gray-700 max-w-xl mt-4">
        A modern web application designed to empower farmers with technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => {
              console.log("Navigating to:", feature.link);
              router.push(feature.link);}}
            className="cursor-pointer"
          >
            <Card className="p-6 flex flex-col items-center bg-white shadow-xl rounded-2xl">
              {feature.icon}
              <h3 className="text-xl font-semibold text-green-800 mt-4">
                {feature.title}
              </h3>
              <CardContent>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8"
      >
        <Button className="bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-6 rounded-xl">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
