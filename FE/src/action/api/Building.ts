import { AboutBuilding } from "@src/types/FlightInfo";
import { getAsync, postAsync } from "./api";

export const addBuilding = async (buildingInfo:AboutBuilding) => {
  const response = await postAsync("/building/regist", buildingInfo)

  return response;
};

export const getBuildingList = async (droneId:string) => {
  const response = await getAsync(`/drone/building/${droneId}`)

  return response;
}