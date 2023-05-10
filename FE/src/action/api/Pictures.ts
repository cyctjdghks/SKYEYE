import { getAsync } from "./api"

export const getFolders = async (user:string, date:string) => {
    const response = await getAsync(`/folder/get/date/${user}/${date}`)

    return response
}

export const getPhotoList = async (userId: string, folderId:number, crackType:string) => {
    const response = await getAsync(`/folder/get/folder/crack/${userId}/${folderId}/${crackType}`)

    return response
}