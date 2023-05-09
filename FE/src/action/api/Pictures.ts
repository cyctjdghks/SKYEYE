import { getAsync } from "./api"

export const getFolders = async (user:string, date:string) => {
    const response = await getAsync(`/folder/get/date/${user}/${date}`)

    return response
}