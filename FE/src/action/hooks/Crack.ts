import { getAsync, postAsync, putAsync, deleteAsync } from "@action/api/api";
// regist Crack
export const RegistCrack = async (formData: any | null) => {
  const response = await postAsync("/crack/regist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// get Crack
export const GetCrack = async (crackId: string) => {
  const response = await getAsync(`/crack/get/${crackId}`);
  return response;
};

// update Crack
export const UpdateCrack = async (
  crackId: string,
  crackType: string,
) => {
  const response = await putAsync("/crack/update", {
    crackId,
    crackType
  });
  return response;
};

// delete Crack
export const DeleteCrack = async (crackId: string) => {
  const response = await deleteAsync(`/crack/delete/${crackId}`);
  return response;
};

// download Crack Image
export const DownLoadCrackImage = async (imgSrc: string) => {
  const response = await getAsync(`/crack/download?imageSrc=${imgSrc}`);
  return response;
};

// get Crack by BuildingId
export const GetCrackByBuildingId = async (buildingId: string) => {
  const response = await getAsync(`/building/crack/${buildingId}`);
  return response;
};