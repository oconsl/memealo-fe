import Login from "@/sections/login-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Memealo",
};

export default function LoginPage() {
  return <Login />;
}
