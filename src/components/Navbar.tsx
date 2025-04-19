"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // تغيير شفافية شريط التنقل عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary hover:text-primary-dark transition">مأوى</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
          <NavLink href="/" active={pathname === "/"}>الرئيسية</NavLink>
          <NavLink href="/map?type=apartment&view=list" active={pathname === "/map" && pathname.includes("apartment")}>الشقق</NavLink>
          <NavLink href="/map?type=room&view=list" active={pathname === "/map" && pathname.includes("room")}>الغرف</NavLink>
          <NavLink href="/map?type=bed&view=list" active={pathname === "/map" && pathname.includes("bed")}>سرير في غرفة</NavLink>
          <NavLink href="/about" active={pathname === "/about"}>عن مأوى</NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>اتصل بنا</NavLink>
          <NavLink href="/faq" active={pathname === "/faq"}>الأسئلة الشائعة</NavLink>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <Link 
            href="/login" 
            className="text-gray-600 hover:text-primary transition duration-300"
          >
            تسجيل الدخول
          </Link>
          <Link 
            href="/register" 
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-dark transition duration-300 shadow-sm hover:shadow"
          >
            إنشاء حساب
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} active={pathname === "/"}>الرئيسية</MobileNavLink>
            <MobileNavLink href="/map?type=apartment&view=list" onClick={() => setIsMenuOpen(false)} active={pathname === "/map" && pathname.includes("apartment")}>الشقق</MobileNavLink>
            <MobileNavLink href="/map?type=room&view=list" onClick={() => setIsMenuOpen(false)} active={pathname === "/map" && pathname.includes("room")}>الغرف</MobileNavLink>
            <MobileNavLink href="/map?type=bed&view=list" onClick={() => setIsMenuOpen(false)} active={pathname === "/map" && pathname.includes("bed")}>سرير في غرفة</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)} active={pathname === "/about"}>عن مأوى</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)} active={pathname === "/contact"}>اتصل بنا</MobileNavLink>
            <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)} active={pathname === "/faq"}>الأسئلة الشائعة</MobileNavLink>
            
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-primary transition w-full py-2 text-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
              <Link 
                href="/register" 
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                إنشاء حساب
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop Navigation Link
function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className={`transition duration-300 px-2 py-1 rounded ${
        active 
          ? "text-primary font-medium border-b-2 border-primary" 
          : "text-gray-600 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({ href, onClick, active, children }: { href: string; onClick: () => void; active?: boolean; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className={`transition py-2 ${
        active 
          ? "text-primary font-medium" 
          : "text-gray-600 hover:text-primary"
      }`} 
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

// Add these animations to your globals.css or relevant CSS file
/*
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-in-out forwards;
}
*/ 