import { postSerVer } from "./server"

export const addOrganization = async(v) => {
    return postSerVer('/api/organizaion',v,'POST')
}

export const updateOrganization = async(v,id) => {
    // console.log(v,id)
    return postSerVer(`/api/organizaion/${id}`,v,'PATCH')
}