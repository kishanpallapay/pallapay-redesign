"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { OrDivider } from "@/components/ui/divider";
import { loginSchema as schema } from "@/validation/auth";
import { useAuthStore } from "@/lib/stores/auth-store";

function Login() {
  const router = useRouter();
  const setCredentials = useAuthStore(state => state.setCredentials);
  const clearAuth = useAuthStore(state => state.clearAuth);
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: any) => {
    console.log(data);

    if (data.email === "admin@example.com" && data.password === "123456") {
      setCredentials({
        token: "demo_token_123",
        user: {
          id: "admin",
          email: data.email,
          name: "Admin User",
        },
      });
      router.push("/");
    } else {
      clearAuth();
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
      <Controller
        name="email"
        control={control}
        render={({ field }: { field: any }) => (
          <Input
            {...field}
            isFilled
            icon={FaEnvelope}
            label={"Email"}
            placeholder="Email"
            errorMessage={errors.email?.message}
          />
        )}
      />

      {/* Password */}
      <Controller
        name="password"
        control={control}
        render={({ field }: { field: any }) => (
          <Input
            {...field}
            icon={FaLock}
            isFilled
            label={"Password"}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            rightIcon={showPassword ? FaEyeSlash : FaEye}
            onRightIconClick={() => setShowPassword(!showPassword)}
            errorMessage={errors.password?.message}
          />
        )}
      />

      {/* Remember Me + Forgot Password */}
      <div className="flex items-center justify-between text-sm mb-9 mt-5">
        <label className="flex items-center gap-2 text-muted-foreground">
          <Checkbox />
          Remember me
        </label>
        <Link
          className="p-0 underline h-auto text-primary"
          href="/auth/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}
      <Button type="submit" className="w-full !text-black mb-0" size={"md"}>
        Login
      </Button>

      {/* Divider */}
      <OrDivider />

      {/* Social Buttons - Mobile */}
      <div className="flex sm:hidden justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-gray-300 hover:border-orange w-12 h-11 p-0"
        >
          <Image src="/logo/google.png" alt="Google" width={20} height={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-gray-300 hover:border-orange w-12 h-11 p-0"
        >
          <Image
            src="/logo/Apple.png"
            alt="Apple"
            width={20}
            height={20}
            className="block dark:hidden"
          />
          <Image
            src="/logo/AppleWhite.png"
            alt="Apple"
            width={20}
            height={20}
            className="hidden dark:block"
          />
        </Button>
      </div>

      {/* Social Buttons - Desktop */}
      <div className="hidden sm:flex flex-col gap-4">
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full flex items-center justify-center gap-2 border-gray-300 hover:border-orange text-gray-300"
        >
          <Image src="/logo/google.png" alt="Google" width={20} height={20} />
          Continue with Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full flex items-center justify-center gap-2 border-gray-300 hover:border-orange text-gray-300"
        >
          <Image
            src="/logo/Apple.png"
            alt="Apple"
            width={20}
            height={20}
            className="block dark:hidden"
          />
          <Image
            src="/logo/AppleWhite.png"
            alt="Apple"
            width={20}
            height={20}
            className="hidden dark:block"
          />
          Continue with Apple
        </Button>
      </div>
    </form>
  );
}
export { Login };
