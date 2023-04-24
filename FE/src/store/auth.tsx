import { atom } from "recoil";

interface User {
  id: string;
  name: string;
  type: number;
}

interface Auth {
  isAuthenticated: boolean;
  user: User | null;
}

const authState = atom<Auth>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
