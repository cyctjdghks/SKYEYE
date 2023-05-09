import { getAsync, postAsync, putAsync, deleteAsync } from "@action/api/api";

// USER
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