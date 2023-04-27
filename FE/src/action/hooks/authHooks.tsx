import { postAsync } from "@action/api/api";

export const Login = async (
  id: string,
  pwd: string,
) => {
  const response = await postAsync(`/user/login`, {userId: id, userPw: pwd });
  console.log(response);
  
  return response;
};