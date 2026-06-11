import { getSerVer } from "./server"

const BasUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const myOrganization = async(email) => {
    // console.log(email)
    return await getSerVer(`/api/organizaion/${email}`)
}

export const modalOrganization = async(email) => {
    const res = await fetch(`${BasUrl}/api/organizaion/${email}`)
    return res.json()
}