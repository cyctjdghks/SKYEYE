import { atom } from "recoil";

interface UserInfo {
  userId: string;
  userName: string;
  userPosition: string;
  userPhoneNumber: string;
  imageSrc: string;
}

interface Admin {
  users: UserInfo[] | null;
}

interface SelectedIdx {
  idx: number | null;
}

const dummyData: UserInfo[] = [
  {
    userId: "string",
    userName: "string",
    userPosition: "string",
    userPhoneNumber: "string",
    imageSrc: "strin",
  },
  {
    userId: "strin2g",
    userName: "strin2g",
    userPosition: "strin2g",
    userPhoneNumber: "stri2ng",
    imageSrc: "strin2",
  },

];

export const adminState = atom<Admin>({
  key: "adminState",
  default: {
    users: dummyData,
  },
});

export const selectedIdxState = atom<SelectedIdx>({
  key: "selectedIdxState",
  default: {
    idx: null,
  },
});
