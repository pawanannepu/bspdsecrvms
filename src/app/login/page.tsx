"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Invalid email or password");
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f2f5] px-4">
      <div className="w-full max-w-[420px] rounded-2xl bg-white px-8 py-10 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
        <div className="mb-6 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Indian Railways SECR"
            width={72}
            height={72}
            className="mb-4 rounded-full"
            priority
          />
          <h1 className="font-serif text-[28px] font-bold text-[#1e293b]">
            Welcome Back!
          </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block font-serif text-[15px] text-[#374151]">
              Email Address <span className="text-[#ef4444]">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-md border border-[#d1d5db] px-3 py-2.5 text-[14px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-serif text-[15px] text-[#374151]">
              Password <span className="text-[#ef4444]">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-md border border-[#d1d5db] px-3 py-2.5 text-[14px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20"
            />
            <label className="mt-2 flex items-center gap-2 text-[13px] text-[#4b5563]">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-[#d1d5db]"
              />
              Show Password
            </label>
          </div>

          <button
            type="button"
            className="font-serif text-[13px] text-[#9ca3af] hover:text-[#6b7280]"
          >
            Forgot Password?
          </button>

          {error && (
            <p className="rounded-md bg-[#fef2f2] px-3 py-2 text-sm text-[#dc2626]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#4f46e5] py-2.5 text-[15px] font-medium text-white transition hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
