import { atom } from "recoil";
 
interface UserInfo {
  id: string;
  name: string;
  position: string;
  phoneNumber: string;
}

interface Admin {
  users: UserInfo[] | null;
}

const adminState = atom<Admin>({
  key: "adminState",
  default: {
    users: null,
  },
});
