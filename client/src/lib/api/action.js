import { postSerVer } from "./server"

export const addOrganization = async(v) => {
    return postSerVer('/api/organizaion',v,'POST')
}