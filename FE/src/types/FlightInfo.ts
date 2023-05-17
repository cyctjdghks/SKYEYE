export type Building = {
  buildingId: number;
  buildingEstablishment: any;
  userId: string;
  buildingName: string;
  buildingAddress: string;
};

export type Folder = {
  folderId: number;
  folderName: string;
  folderMemo: string;
  folderBuilt: string;
  userId: string;
  createTime: string;
  updateTime: string;
  countImage: number;
};

export type CrackPhoto = {
  crackType: String;
  cnt: number;
};

export type Crack = {
  crackId: number;
  crackType: string;
  crackPosition: string;
  buildingId: number;
  imageSrc: string;
};

export type AboutBuilding = {
  buildingName: string;
  buildingAddress: string;
  buildingEstablishment: string;
  userId: string;
};

export type AboutFolder = {
  folderName: string;
  folderMemo: string;
  folderBuilt: string;
  userId: string;
};

export type InputBuilding = { buildingId: number | null; buildingName: string };
export type InputFolder = { folderId: number | null; folderName: string };

type CrackCapture = {
  crackType: string;
  crackPosition: string;
  buildingId: number;
};

export type Capture = {
  profile: any;
  crack: CrackCapture;
};

export type Picture = {
  originalFileName: string;
  storedFileName: string;
  fileSize: number;
  createTime: string;
  crackType: string;
  updateTime: string;
  crackId: string;
};
