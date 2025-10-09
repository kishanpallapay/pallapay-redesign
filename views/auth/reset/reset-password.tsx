"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrDivider } from "@/components/ui/divider";

import { resetPasswordSchema as schema } from "@/validation/auth";

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export interface ResetPasswordProps {
  token: string;
  userId: string;
}

export function ResetPassword({ token, userId }: ResetPasswordProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordForm) => {
    console.log("Reset password submitted:", {
      ...data,
      token,
      userId,
    });
    router.push("/auth/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
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
      <div className="w-full max-w-lg rounded-2xl bg-transparent md:border-2 md:border-orange md:px-16 md:py-10 px-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground font-exo2">
            Reset your password
          </h1>
          <p className="text-gray-200 dark:text-gray-400 text-sm mt-1.5 font-exo2">
            Choose a new password for your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                icon={FaLock}
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter a new password"
                isFilled
                rightIcon={showPassword ? FaEyeSlash : FaEye}
                onRightIconClick={() => setShowPassword(prev => !prev)}
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
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your new password"
                isFilled
                rightIcon={showConfirmPassword ? FaEyeSlash : FaEye}
                onRightIconClick={() => setShowConfirmPassword(prev => !prev)}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />

          <Button type="submit" className="w-full !text-black" size="md">
            Reset password
          </Button>
        </form>

        <OrDivider />

        <p className="text-center text-sm text-muted-foreground font-exo2">
          Remembered it?{" "}
          <button
            type="button"
            className="text-orange underline font-semibold font-exo2"
            onClick={() => router.push("/auth/login")}
          >
            Back to login
          </button>
        </p>
      </div>
    </main>
  );
}
