"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", number: "00" },
    { name: "Destination", href: "/destination", number: "01" },
    { name: "Crew", href: "/crew", number: "02" },
    { name: "Technology", href: "/technology", number: "03" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 lg:pt-10">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        className="w-10 h-10 lg:w-12 lg:h-12"
                    >
                        <g fill="none" fillRule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF" />
                            <path
                                fill="#0B0D17"
                                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                            />
                        </g>
                    </svg>
                </div>

                {/* Desktop horizontal rule */}
                <div className="hidden lg:block h-[1px] bg-white/25 w-full max-w-[473px] absolute left-36 z-20"></div>

                {/* Desktop Nav */}
                <div className="backdrop-blur-xl bg-white/5 pl-24 pr-16 lg:pr-24 lg:pl-32 hidden md:flex min-w-[60%] lg:min-w-[55%] items-center justify-center lg:justify-start gap-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "font-barlow text-white text-sm lg:text-base tracking-[2.7px] uppercase py-9 border-b-[3px] border-transparent transition-all hover:border-white/50",
                                pathname === item.href && "border-white"
                            )}
                        >
                            <span className="font-bold mr-2">{item.number}</span>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white z-[60] relative"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        /* Close (X) icon */
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                            <g fill="#D0D6F9" fillRule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                            </g>
                        </svg>
                    ) : (
                        /* Hamburger icon */
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                            <g fill="#D0D6F9" fillRule="evenodd">
                                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                            </g>
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[min(70vw,280px)] z-50 md:hidden",
                    "backdrop-blur-2xl bg-white/10",
                    "flex flex-col pt-28 px-8 gap-8",
                    "transition-transform duration-300 ease-in-out",
                    menuOpen ? "translate-x-0" : "translate-x-full"
                )}
                aria-hidden={!menuOpen}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                            "font-barlow text-white text-sm tracking-[2.7px] uppercase",
                            "border-r-[3px] border-transparent pr-4",
                            "transition-all duration-200 hover:border-white/50",
                            pathname === item.href && "border-white"
                        )}
                    >
                        <span className="font-bold mr-3">{item.number}</span>
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    );
}
