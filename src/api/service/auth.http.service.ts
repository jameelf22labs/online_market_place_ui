import api from "../axios.intercept";
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from "../types/auth.types";
import { handleApi } from "../utils/handle-api";

const AuthApiService = {
  httpLogin: (loginCreds: LoginPayload) =>
    handleApi<LoginResponse>(api.post("/auth/login", loginCreds)),

  httpRegister: (signUpCreds: SignUpPayload) =>
    handleApi<SignUpResponse>(api.post("/auth/register", signUpCreds)),

  httpLoginLecture: () => {},
};

export default AuthApiService;
