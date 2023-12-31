"use client";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex items-center justify-between">
      <div className="group ssr-only">
        <Link href={"/"} className="text-2xl font-bold">
          DailyBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500" />
      </div>
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
};

export default Navbar;
