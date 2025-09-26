"use client";
import Login from "@/component/Login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return <Login onNavigate={(path) => router.push(path === "home" ? "/" : `/${path}`)} />;
}