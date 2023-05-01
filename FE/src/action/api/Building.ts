import { postAsync } from "./api";

export const addBuilding = async (buildingInfo) => {
  console.log(buildingInfo);
  const response = await postAsync("/building/regist", buildingInfo)

  if (!response.isSuccess) {
    console.log(response.result)
  }

  return response;
};
