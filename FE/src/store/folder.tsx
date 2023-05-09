import { Folder } from "@src/types/FlightInfo";
import { atom } from "recoil";

interface FolderList {
  toastLst: Array<Folder>;
}

const folderData: Array<FolderList> = [];

export const folderListState = atom({
  key: "folderListState",
  default: [] as Folder[],
});