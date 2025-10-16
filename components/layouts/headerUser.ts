type UserVerification = {
  level: string;
  accountStatus: string;
  description?: string;
  upgradeLabel?: string;
};

type HeaderUser = {
  name: string;
  email: string;
  avatarUrl?: string;
  verification?: UserVerification;
};

export type { HeaderUser, UserVerification };
