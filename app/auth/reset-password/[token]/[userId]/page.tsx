import { ResetPassword } from "@/views/auth/reset/reset-password";

type ResetPasswordPageProps = {
  params: {
    token: string;
    userId: string;
  };
};

export const dynamic = "force-dynamic";

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  return <ResetPassword token={params.token} userId={params.userId} />;
}
