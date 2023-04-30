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
