export interface LoginUserRequest {
  Username: string;
  Password: string;
}

export interface User {
  Username: string;
  FullName: string;
  Email: string;
  PasswordChangedAt: Date;
  CreatedAt: Date;
}

export interface LoginUserResponse {
  SessionID: string;
  access_token: string;
  AccessTokenExpiresAt: Date;
  RefreshToken: string;
  RefreshTokenExpiresAt: Date;
  user: User;
}

export interface Account {
  id: number;
  owner: string;
  balance: number;
  currency: number;
  created_at: Date;
}
