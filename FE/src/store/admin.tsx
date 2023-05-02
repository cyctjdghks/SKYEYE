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

const dummyData: UserInfo[] = [];

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
