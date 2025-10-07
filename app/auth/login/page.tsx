"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { OrDivider } from "@/components/ui/divider";


import { loginSchema as schema } from "@/app/validation/auth";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { email: '', password: '' },
    });

    const onSubmit = (data:any) => {
        if (data.email === "admin@example.com" && data.password === "123456") {
            localStorage.setItem("authToken", "demo_token_123");
            router.push("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-background flex-col">
            <div className="text-center mb-2">
                    <div className="w-[160px] h-[40px] mx-auto mb-3">
                        <Image
                            src="/logo/LogoBlue.png"
                            alt="Logo"
                            width={160}
                            height={40}
                            className="block dark:hidden"
                        />
                        <Image
                            src="/logo/LogoWhite.png"
                            alt="Logo"
                            width={160}
                            height={40}
                            className="hidden dark:block"
                        />
                    </div>
                </div>
            <div className="w-full max-w-md rounded-2xl bg-transparent md:border md:border-orange md:p-8 px-8">
                {/* Logo + Title + Description */}
                <div className="text-center mb-6">
                   
                    <h1 className="text-2xl font-bold text-foreground">Login</h1>
                    <p className="text-gray-200 text-sm mt-1">
                        Enter your email and password to login
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
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
                        render={({ field }) => (
                            <Input
                                {...field}
                                icon={FaLock}
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
                        <a
                            type="button"
                            className="p-0 underline h-auto text-primary"
                           href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        className="w-full !text-black"
                    >
                        Login
                    </Button>

                    {/* Divider */}
                   <OrDivider/>
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full border-primary text-primary"
                        onClick={() => router.push("/auth/register")}
                    >
                        Create Account
                    </Button>
                    {/* Social Buttons - Mobile */}
                    <p className="text-center px-2 text-sm text-muted-foreground">
                        or Continue With
                    </p>
                    <div className="flex sm:hidden justify-center gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="border-gray-300"
                        >
                            <Image src="/logo/google.png" alt="Google" width={20} height={20} />
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="border-gray-300"
                        >
                            <Image src="/logo/Apple.png" alt="Apple" width={20} height={20} className="block dark:hidden" />
                            <Image src="/logo/AppleWhite.png" alt="Apple" width={20} height={20} className="hidden dark:block" />
                        </Button>
                    </div>

                    {/* Social Buttons - Desktop */}
                    <div className="hidden sm:flex flex-col gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-300"
                        >
                            <Image src="/logo/google.png" alt="Google" width={20} height={20} />
                            Continue with Google
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-300"
                        >
                            <Image src="/logo/Apple.png" alt="Apple" width={20} height={20} className="block dark:hidden" />
                            <Image src="/logo/AppleWhite.png" alt="Apple" width={20} height={20} className="hidden dark:block" />
                            Continue with Apple
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    );
}