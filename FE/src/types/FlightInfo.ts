export type Building = {
  buildingId: number;
  buildingEstablishment: any;
  userId: string;
  buildingName: string;
  buildingAddress: string;
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

type CrackCapture = { crackType: String; crackPosition: String; buildingId: number };

export type Capture = {
  profile: any;
  crack: CrackCapture;
};
