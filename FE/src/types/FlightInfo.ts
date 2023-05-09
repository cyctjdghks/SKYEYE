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

export type AboutFolder = {
  folderName: string;
  folderMemo: string;
  folderBuilt: string;
  userId: string;
};

export type InputBuilding = { buildingId: number | null; buildingName: string };
export type InputFolder = { folderId: number | null; folderName: string };

type CrackCapture = {
  crackType: String;
  crackPosition: String;
  buildingId: number;
};

export type Capture = {
  profile: any;
  crack: CrackCapture;
};
