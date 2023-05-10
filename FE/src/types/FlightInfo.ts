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
  crackType: String;
  crackPosition: String;
  buildingId: number;
  imageSrc: String;
};

export type AboutBuilding = {
  buildingName: String;
  buildingAddress: String;
  buildingEstablishment: String;
  userId: String;
};

export type InputBuilding = { buildingId: number | null; buildingName: string };

type CrackCapture = {
  crackType: String;
  crackPosition: String;
  buildingId: number;
};

export type Capture = {
  profile: any;
  crack: CrackCapture;
};

export type Picture = {
  originalFileName: String;
  storedFileName: String;
  fileSize: number;
  createTime: String;
  updateTime: String;
};
