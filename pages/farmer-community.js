import { useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

export default function FarmerCommunity() {
  const [posts, setPosts] = useState([
    {
        id: 1,
        author: "Abhishek Maurya",
        content: "🌾 YE MAI HAI.. BOLE THO MOST HANDSOME BOI 🙏",
        image: "/images/abhishh.jpeg",
        likes: 10000000,
        comments: [],
    },
    {
      id: 2,
      author: "CallMeAbhi",
      content: "🌾 YE EYE CONTACT BHI KY CHEEJ HAI YAAR  🙏",
      image: "/images/eye.jpg",
      likes: 12,
      comments: [],
    },
    {
      id: 3,
      author: "PABLU YADAV",
      content: "🍅 DOSA IDLI SAMBAR CHUTNEY CHUTNEY 🍀",
      image: "/images/flower.jpg",
      likes: 8,
      comments: [],
    },
    
      {
        id: 4,
        author: "Badri Ki Dhulaniya",
        content: "🍅 AAAPATIJANAK SITUATION. 🍀",
        image: "/images/insect.jpeg",
        likes: 0,
        comments: [],
      },
  ]);

  // Handle Like
  const handleLike = (id) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)));
  };

  // Handle New Comment
  const handleComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full p-6 bg-green-50 min-h-screen">
        
        <div className="max-w-2xl mx-auto space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-green-800">{post.author}</h3>
              <p className="text-gray-700">{post.content}</p>
              
              {post.image && (
                <div className="relative w-full h-64 mt-3">
                  <Image
                    src={post.image}
                    alt="Farmer Post"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center gap-4 mt-3">
                <button className="flex items-center text-blue-600 hover:text-blue-800" onClick={() => handleLike(post.id)}>
                  <ThumbsUp size={20} className="mr-1" /> {post.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <MessageCircle size={20} className="mr-1" /> Comment
                </button>
                <button className="flex items-center text-green-600 hover:text-green-800">
                  <Share2 size={20} className="mr-1" /> Share
                </button>
              </div>

              {/* Comment Section */}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded-lg"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                      handleComment(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
                {post.comments.length > 0 && (
                  <div className="mt-2">
                    {post.comments.map((comment, index) => (
                      <p key={index} className="text-gray-700 text-sm">💬 {comment}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
