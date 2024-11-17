'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { ShirtIcon as Tshirt, Home} from 'lucide-react'

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("home");

    //^ Logic to update setActiveTab based on the current path
    

    const router = useRouter();
    const handleNavigation = (path: string) => {
        // setActiveTab = path.slice(1); //^ Set the active tab based on the path
        router.push(path); //^ Navigate to the specified path
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-24 items-center p-10">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Tshirt className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">FitTracker</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {/* <Link
                        href="/"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "home" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => handleNavigation("/")}
                        >
                        <Home className="h-4 w-4" />
                        </Link> */}
                        <Link
                        href="/closet"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "closet" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => handleNavigation("/closet")}
                        >
                        Closet
                        </Link>
                        <Link
                        href="/find-fit"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "find-fit" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => handleNavigation("/find-fit")}
                        >
                        Find Fit
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
