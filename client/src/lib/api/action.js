import { postSerVer } from "./server"

export const addOrganization = async(v) => {
    return postSerVer('/api/organizaion',v,'POST')
}

export const updateOrganization = async(v,id) => {
    return postSerVer(`/api/organizaion/${id}`,v,'PATCH')
}

export const eventAddOrganization = async(v) => {
    return postSerVer(`/api/event`,v,'POST')
}