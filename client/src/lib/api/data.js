import { getSerVer } from "./server"

export const myOrganization = async(email) => {
    return await getSerVer(`/api/organizaion/${email}`)
}