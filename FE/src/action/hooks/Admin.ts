import { getAsync, postAsync, putAsync, deleteAsync } from "@action/api/api";

// ADMIN
// login Admin
export const LoginAdmin = async (adminId: string, adminPw: string) => {
  const response = await postAsync("/admin/login", {
    adminId,
    adminPw,
  });
  return response;
};

// find all User
export const FindUserAll = async () => {
  const response = await getAsync("/admin/user");
  return response;
};

// find all Crack
export const FindCrackAll = async () => {
  const response = await getAsync("/admin/crack");
  return response;
};
