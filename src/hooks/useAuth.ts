import { useState, useEffect } from "react";
import jsCookie from "js-cookie";
import api from "../api/axios.intercept";
import { UserRoles } from "../common/constant/user.constant";

type User = {
  email: string;
  name: string;
  id: string;
  role: string;
};

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = jsCookie.get("accessToken") || null;
    const storedUser = jsCookie.get("user")
      ? JSON.parse(jsCookie.get("user") as string)
      : null;

    setToken(storedToken);
    setUserState(storedUser);
  }, []);

  const setUser = (accessToken: string, userData: User) => {
    jsCookie.set("accessToken", accessToken, {
      path: "/",
      sameSite: "lax",
      secure: false,
    });

    jsCookie.set("user", JSON.stringify(userData), {
      path: "/",
      sameSite: "lax",
      secure: false,
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    setToken(accessToken);
    setUserState(userData);
  };

  return {
    token,
    user,
    isAuthenticated: !!token,
    isInstructor: user?.role === UserRoles.Instructor,
    setUser,
  };
};

export default useAuth;
