import { getAsync, postAsync, putAsync, deleteAsync } from "@action/api/api";

// regist User
export const RegistUser = async (formData: any | null) => {
  const response = await postAsync("/user/regist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// login User
export const LoginUser = async (id: string, pwd: string) => {
  const response = await postAsync("/user/login", { userId: id, userPw: pwd });
  return response;
};

// update User
export const UpdateUser = async (formData: any | null) => {
  const response = await putAsync("/user/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// delete User
export const DeleteUser = async (userId: string) => {
  const response = await deleteAsync(`/user/delete/${userId}`);
  return response;
};

// get User
export const GetUser = async (userId: string) => {
  const response = await getAsync(`/user/get/${userId}`);
  return response;
};

// get Building by UserId
export const GetBuildingByUserId = async (userId: string) => {
  const response = await getAsync(`/user/building/${userId}`);
  return response;
};

// get Drone by UserId
export const GetDroneByUserId = async (userId: string) => {
  const response = await getAsync(`/user/drone/${userId}`);
  return response;
};

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
  crackPostion: string
) => {
  const response = await putAsync("/crack/update", {
    crackId,
    crackType,
    crackPostion,
  });
  return response;
};

// delete Crack
export const DeleteCrack = async (crackId: string) => {
  const response = await deleteAsync(`/crack/update/${crackId}`);
  return response;
};

// download Crack Image
export const DownLoadCrackImage = async (imgSrc: string) => {
  const response = await getAsync(`/crack/download?imageSrc=${imgSrc}`);
  return response;
};

// regist Building
export const RegistBuilding = async (
  buildingEstablishment: string,
  userId: string,
  buildingName: string,
  buildingAddress: string
) => {
  const response = await postAsync(
    "/building/regist",
    { buildingEstablishment, userId, buildingName, buildingAddress },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

// update Building
export const UpdateBuilding = async (
  buildingEstablishment: string,
  userId: string,
  buildingName: string,
  buildingAddress: string
) => {
  const response = await putAsync(
    "/building/update",
    { buildingEstablishment, userId, buildingName, buildingAddress },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

// delete Building
export const Building = async (buildingId: string) => {
  const response = await deleteAsync(`/building/delete/${buildingId}`);
  return response;
};

// get Crack by BuildingId
export const GetCrackByBuildingId = async (buildingId: string) => {
  const response = await getAsync(`/building/crack/${buildingId}`);
  return response;
};

// get Building
export const GetBuilding = async (buildingId: string) => {
  const response = await getAsync(`/building/get/${buildingId}`);
  return response;
};
// regist Drone
// export const RegistDrone =async (params:type) => {

// }

// export const

// login Drone
export const LoginDrone = async (droneId: string, dronePw: string) => {
  const response = await postAsync("/drone/login", {
    droneId,
    dronePw,
  });
  return response;
};
// update Drone
export const UpdateDrone = async (droneId: string, dronePw: string) => {
  const response = await putAsync("/drone/update", {
    droneId,
    dronePw,
  });
  return response;
};
// get Drone
// delete Drone

// login Admin
// find all User
export const FindUserAll = async () => {
  const response = await getAsync("/admin/user");
  return response;
};

// find all Building
export const FindUserBuilding = async () => {
  const response = await getAsync("/admin/building");
  return response;
};

// find all Crack
export const FindCrackAll = async () => {
  const response = await getAsync("/admin/crack");
  return response;
};

// find all drone
export const FindDroneAll = async () => {
  const response = await getAsync("/admin/drone");
  return response;
};

// admin login
export const LoginAdmin = async (id: string, pwd: string) => {
  const response = await postAsync("/admin/login", {
    adminId: id,
    adminPw: pwd,
  });
  return response;
};

// hooks 사용!
