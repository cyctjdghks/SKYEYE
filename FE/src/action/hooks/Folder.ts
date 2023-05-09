import { getAsync, postAsync, putAsync, deleteAsync } from "@action/api/api";

// regist Folder
export const RegistFolder = async (
  folderName: string,
  userId: string,
  folderMemo: string,
  folderBuilt: string
) => {
  const response = await postAsync(
    "/folder/regist",
    { folderName, userId, folderMemo, folderBuilt },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

// update Folder
export const UpdateFolder = async (
  folderName: string,
  userId: string,
  folderMemo: string,
  folderBuilt: string
) => {
  const response = await putAsync(
    "/folder/update",
    { folderName, userId, folderMemo, folderBuilt },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

// delete Folder
export const DeleteFolder = async (folderId: string) => {
  const response = await deleteAsync(`/folder/delete/${folderId}`);
  return response;
};

// getAllFolder by UserId
export const GetFolderByUserId = async (userId: string) => {
  const response = getAsync(`/folder/get/all/${userId}`);
  return response;
};

// getImage by folderId
export const GetImageByFolderId = async (userId: string, folderId: string) => {
  const response = getAsync(`/folder/get/folder/list/${userId}/${folderId}`);
  return response;
};

// getFolder by Date
export const GetFolderByDate = async (userId: string, dateTime: String) => {
  const response = getAsync(`/folder/get/date/${userId}/${dateTime}`);
  return response;
};

// getCountCrack by folder
export const GetCountCrackByFolder = async (folderId: string) => {
  const response = getAsync(`/folder/get/crack/${folderId}`);
  return response;
};

// getImage by FolderCrack
export const GetImageByFolderCrack = async (
  userId: string,
  folderId: string,
  crackType: string
) => {
  const response = getAsync(
    `/folder/get/folder/${userId}/${folderId}/${crackType}`
  );
  return response;
};

// get Folder
export const GetFolder = async (folderId: string) => {
  const response = getAsync(`/folder/get/detail/folder/${folderId}`);
  return response;
};

// get Image
export const GetImage = async (imageId: string) => {
  const response = getAsync(`/folder/get/detail/image/${imageId}`);
  return response;
};