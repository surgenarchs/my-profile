"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Command, MenuIcon, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenuLink,

} from "@/components/ui/navigation-menu";
import { NavSecondary } from "./nav-secondary";
import { NavMain } from "./nav-main";


const navMain = [
    {
      title: "Explore",
      url: "/dashboard/",
      icon: BrainCircuit,
      isActive: true,
      items: [
        { title: "Portfolio", url: "/dashboard/portfolio" },
        { title: "Services", url: "/dashboard/services" },
      ],
    },
  ];
// Sidebar Menu Items
const menuItems = [
  { title: "Portfolio", href: "/dashboard/portfolio", description: "Find more about what we do" },
  { title: "Services", href: "/dashboard/services", description: "Service is what we offer" },
];

const navSecondary = [
    { title: "Reach out", url: "/dashboard/contacts", icon: PhoneCall },
    { title: "About Us", url: "/dashboard/about", icon: PhoneCall },
    { title: "Legal Policies", url: "/dashboard/legal", icon: Command },

  ];
  

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar with useCallback for performance
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Open Button - Hidden when Sidebar is Open */}
      {!isOpen && <MenuIcon className="w-6 h-6 text-green-500 md:hidden cursor-pointer" onClick={toggleSidebar} />}

      {/* Sidebar Menu - Animate on Open/Close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-muted/50 backdrop-blur-md z-50 flex flex-col items-center"
          >
            {/* Close Button */}
            <button onClick={toggleSidebar} className="absolute top-4 right-4 p-2">
              <X className="w-6 h-6 text-green-500" />
            </button>

            {/* Logo & Brand */}
            <nav className="mt-8">
              <Link href="/">
                <span className="flex items-center gap-3 p-4 border-b">
                  <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full border border-green-400" />
                  <div className="text-left">
                    <span className="text-lg font-semibold">Surgen Archs</span>
                    <span className="block text-sm text-gray-400">Hands-on Solutions</span>
                  </div>
                </span>
              </Link>
            </nav>
            <div className="flex items-center justify-center w-full">

              <NavMain items={navMain} onClick={toggleSidebar}/>

              
            </div>
              



    

            <div className="absolute bottom-0 gap-2 p-4">
              <NavSecondary items={navSecondary} className="mt-auto" onClick={toggleSidebar}/>
              <footer className="border-t p-4 text-center text-xs text-gray-500">
                
                &copy; {new Date().getFullYear()} Surgen Archs
            </footer>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Reusable List Item Component
interface NavItemProps {
  title: string;
  href: string;
  description: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, href, description, onClick }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        onClick={onClick}
        className="block p-3 border-b rounded-md transition-colors "
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-xs text-gray-500">{description}</p>
      </Link>
    </NavigationMenuLink>
  </li>
);
