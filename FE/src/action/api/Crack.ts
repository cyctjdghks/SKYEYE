import { getAsync } from "./api"

export const getCrackList = async (folderId:number) => {
    const response = await getAsync(`/folder/get/crack/${folderId}`)

    return response
}