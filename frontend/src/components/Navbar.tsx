import React, { useState } from "react";
import Link from "next/link";
import { ShirtIcon as Tshirt, Home } from 'lucide-react'

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("home");

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Tshirt className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">FitTracker</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                        href="/"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "home" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => setActiveTab("home")}
                        >
                        <Home className="h-4 w-4" />
                        </Link>
                        <Link
                        href="/closet"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "closet" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => setActiveTab("closet")}
                        >
                        Closet
                        </Link>
                        <Link
                        href="/find-fit"
                        className={`transition-colors hover:text-foreground/80 ${
                            activeTab === "find-fit" ? "text-foreground" : "text-foreground/60"
                        }`}
                        onClick={() => setActiveTab("find-fit")}
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
