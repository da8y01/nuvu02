export interface User {
  email: string;
  password?: string;
  ccinfo?: string;
  admin?: boolean;
}

export interface GetUser {
  token: string;
  user: object;
}
