import { getAsync } from "./api"

export const getCrackList = async (buildingId:number) => {
    const response = await getAsync(`/building/crack/${buildingId}`)

    return response
}