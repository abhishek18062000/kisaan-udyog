import Link from "next/link";
import { Home, Search, MessageCircle, Bell, PlusSquare, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col p-4 fixed left-0 top-0">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-700 mb-6">🌾 Kisaan Udyog</h1>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <SidebarLink href="/" icon={<Home size={24} />} text="Home" />
        <SidebarLink href="/search" icon={<Search size={24} />} text="Search" />
        <SidebarLink href="/messages" icon={<MessageCircle size={24} />} text="Messages" />
        <SidebarLink href="/notifications" icon={<Bell size={24} />} text="Notifications" />
        <SidebarLink href="/create" icon={<PlusSquare size={24} />} text="Create Post" />
        <SidebarLink href="/profile" icon={<User size={24} />} text="Profile" />
      </nav>
    </div>
  );
}

// Reusable Sidebar Link Component
function SidebarLink({ href, icon, text }) {
  return (
    <Link href={href}>
      <div className="flex items-center space-x-3 p-2 hover:bg-green-100 rounded-lg cursor-pointer transition">
        {icon}
        <span className="text-lg font-medium text-gray-700">{text}</span>
      </div>
    </Link>
  );
}
