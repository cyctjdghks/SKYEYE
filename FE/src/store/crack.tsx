import { atom } from "recoil";
import { Folder } from "@src/types/FlightInfo";

export const crackListState = atom({
  key: "crackListState",
  default: []
})

export const userFolderListState = atom<Array<Folder>>({
  key: "userFolderListState",
  default: []
})

export const photoListState = atom({
  key: "photoListState",
  default: []
})
