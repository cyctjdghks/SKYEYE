import { getAsync } from "./api"

export const getUserInfo = (userId:string) => {
    const response = getAsync(`/user/get/${userId}`)

    return response
}