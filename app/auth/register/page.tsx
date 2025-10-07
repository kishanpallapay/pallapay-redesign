"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaTicketAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrDivider } from "@/components/ui/divider";
import { registerSchema as schema } from "@/app/validation/auth";

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', referralCode: '' },
    });

    const onSubmit = (data:any) => {
        console.log(data);
        // Handle registration logic here
        router.push("/");
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
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-foreground">Create an account</h1>
                    <p className="text-gray-200 text-sm mt-1">
                        Enter your details to create an account
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex gap-4">
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label={"FirstName"}
                                    placeholder="FirstName"
                                    errorMessage={errors.firstName?.message}
                                />
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label={"LastName"}
                                    placeholder="LastName"
                                    errorMessage={errors.lastName?.message}
                                />
                            )}
                        />
                    </div>

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

                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                icon={FaLock}
                                label={"ConfirmPassword"}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirmyourpassword"
                                rightIcon={showConfirmPassword ? FaEyeSlash : FaEye}
                                onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                errorMessage={errors.confirmPassword?.message}
                            />
                        )}
                    />

                    <Controller
                        name="referralCode"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                icon={FaTicketAlt}
                                label={"ReferralCode"}
                                placeholder="#ReferralCode(optional)"
                                errorMessage={errors.referralCode?.message}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full !text-black"
                    >
                        Create Account
                    </Button>

                    <OrDivider/>

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

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-orange underline font-semibold">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
