"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrDivider } from "@/components/ui/divider";

import { forgotPasswordSchema as schema } from "@/validation/auth";

type ForgotPasswordForm = {
  email: string;
};

export function ForgotPassword() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log("Forgot password submitted:", data);
    router.push("/auth/login");
  };

  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-foreground font-exo2">
          Forgot password?
        </h1>
        <p className="text-gray-200 dark:text-gray-400 text-sm mt-1.5 font-exo2">
          Enter your email to receive a password reset link.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              icon={FaEnvelope}
              isFilled
              label="Email"
              type="email"
              placeholder="Enter your email"
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Button type="submit" className="w-full !text-black" size="md">
          Send reset link
        </Button>
      </form>

      <OrDivider />

      <p className="text-center text-sm text-muted-foreground font-exo2">
        Remember your password?{" "}
        <Link
          href="/auth/login"
          className="text-orange underline font-semibold font-exo2"
        >
          Back to login
        </Link>
      </p>
    </>
  );
}
