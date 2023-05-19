import { Folder } from "@src/types/FlightInfo";
import { atom } from "recoil";
import localStorageEffect from "@src/constant/localStorage";

interface FolderList {
  toastLst: Array<Folder>;
}

interface selectedFolderId {
  folderId: number;
}

const folderData: Array<FolderList> = [];

export const folderListState = atom({
  key: "folderListState",
  default: [] as Folder[],
});

export const selectedFolderIdState = atom<selectedFolderId>({
  key: "selectedFolderIdState",
  default: { folderId: 0 },
  effects: [localStorageEffect("selectedFolder")],
});
