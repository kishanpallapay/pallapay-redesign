import { AuthPageGateway } from "@/views/auth/AuthPageGateway";

type AuthTypePageProps = {
  params: {
    authType?: string[];
  };
};

export const dynamic = "force-dynamic";

export default function AuthTypePage({ params }: AuthTypePageProps) {
  const [initialView] = params.authType ?? [];

  return <AuthPageGateway initialView={initialView} />;
}
