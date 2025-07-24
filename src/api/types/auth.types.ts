export type LoginPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: string;
    role: string
  };
};

export type SignUpResponse = {
  name: string;
  email: string;
};
