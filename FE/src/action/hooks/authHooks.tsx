import { postAsync } from "@action/api/api";

// user login
export const UserLogin = async (id: string, pwd: string) => {
  const response = await postAsync("/user/login", { userId: id, userPw: pwd });
  return response;
};

// drone login
export const DroneLogin = async (id: string, pwd: string) => {
  const response = await postAsync("/drone/login", {
    droneId: id,
    dronePw: pwd,
  });
  return response;
};

// admin login
export const AdminLogin = async (id: string, pwd: string) => {
  const response = await postAsync("/admin/login", {
    adminId: id,
    adminPw: pwd,
  });
  return response;
};
