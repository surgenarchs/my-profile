"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Sidebar Menu Items
const menuItems = [
  { title: "Portfolio", href: "/dashboard/portfolio", description: "Find more about what we do" },
  { title: "Services", href: "/dashboard/services", description: "Service is what we offer" },
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
                  <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-lg" />
                  <div className="text-left">
                    <span className="text-lg font-semibold">Surgen Archs</span>
                    <span className="block text-sm text-gray-400">Hands-on Solutions</span>
                  </div>
                </span>
              </Link>
            </nav>

            {/* Navigation Menu */}
            <div className="flex flex-col gap-6 text-lg pt-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4">
                        {menuItems.map((item) => (
                          <NavItem key={item.title} {...item} onClick={toggleSidebar} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/dashboard/contacts" legacyBehavior>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={toggleSidebar}>
                        Reach Out
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Reusable List Item Component
const NavItem = ({ title, href, description, onClick }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        onClick={onClick}
        className="block p-3 rounded-md transition-colors "
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-xs text-gray-500">{description}</p>
      </Link>
    </NavigationMenuLink>
  </li>
);
