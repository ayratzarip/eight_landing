"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { BookOpen, User, Lightbulb, Notebook } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Header() {
    const pathname = usePathname();

  // Get user's initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/diamond_logo_green.png"
            alt="Logo"
            style={{ width: "10%", height: "auto" }}
          />
          <span className="text-gray-600 font-bold">
            EightFaces: Soft Skills Engine
          </span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/auth/signin">Вход</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
