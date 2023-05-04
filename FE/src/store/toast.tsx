import { atom, selector } from "recoil";
import { Toast } from "@src/types/Toast";

interface ToastList {
  toastLst: Array<Toast>;
}

const toastData: Array<object> = [];

export const toastListState = atom({
  key: "toastListState",
  default: {
    list: toastData,
  },
});