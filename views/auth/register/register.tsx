"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaTicketAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrDivider } from "@/components/ui/divider";
import { registerSchema as schema } from "@/validation/auth";

function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle registration logic here
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="flex gap-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              isFilled
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
              isFilled
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
            isFilled
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
            isFilled
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
            isFilled
            label={"ConfirmPassword"}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmyourpassword"
            rightIcon={showConfirmPassword ? FaEyeSlash : FaEye}
            onRightIconClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
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
            isFilled
            icon={FaTicketAlt}
            label={"ReferralCode"}
            placeholder="#ReferralCode(optional)"
            errorMessage={errors.referralCode?.message}
          />
        )}
      />

      <Button type="submit" className="w-full !text-black" size="md">
        Create Account
      </Button>
      <OrDivider />
      <p className="text-center px-2 text-sm text-muted-foreground">
        or Continue With
      </p>
      <div className="flex sm:hidden justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-gray-300 w-12 h-11 p-0"
        >
          <Image src="/logo/google.png" alt="Google" width={20} height={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-gray-300 w-12 h-11 p-0"
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
      <div className="hidden sm:flex flex-col gap-4">
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-300"
        >
          <Image src="/logo/google.png" alt="Google" width={20} height={20} />
          Continue with Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-300"
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
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-orange underline font-semibold"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export { Register };
