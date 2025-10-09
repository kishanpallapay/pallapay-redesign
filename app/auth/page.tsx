import { AuthPageGateway } from "@/views/auth/AuthPageGateway";

type AuthPageProps = {
  searchParams?: {
    view?: string;
  };
};

export const dynamic = "force-dynamic";

export default function AuthPage({ searchParams }: AuthPageProps) {
  return <AuthPageGateway initialView={searchParams?.view} />;
}
