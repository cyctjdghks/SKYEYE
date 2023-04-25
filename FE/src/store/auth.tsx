import { atom } from "recoil";
import localStorageEffect from "@src/constant/localStorage";

interface User {
  id: string;
  name: string;
  type: number;
}

interface Auth {
  isAuthenticated: boolean;
  user: User | null;
}

export const authState = atom<Auth>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
  },
  effects: [
    localStorageEffect('auth')
  ]
});
