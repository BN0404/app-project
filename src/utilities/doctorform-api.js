import { sendRequest } from "./sendRequest";

// const {axios} = require(axios);

const BASE_URL = '/api/doctors';

export function addUser(data) {
    return sendRequest(`${BASE_URL}/add`, "POST", data)
    // try {
    //     return await axios.post(`${BASE_URL}/add`, data)
    // } catch (error) {
    //     console.log("Error", error)
    // }
}

export function getUsers() {
    return sendRequest(`${BASE_URL}/all`)
    // try {
        // return await axios.get(`${URL}/all`)
    // }

    // catch (error) {
    //     console.log('Error', error)
    // }
}

export function getUser(id) {
return sendRequest(`${BASE_URL}/${id}`)
}

export async function deleteUser(id) {
    return sendRequest(`${BASE_URL}/${id}`,"DELETE")
    // return await axios.delete(`${BASE_URL}/${id}`);
}

export async function editUser(id, user) {
    return sendRequest(`${BASE_URL}/${id}`, "PUT", user)
//     return await axios.put(`${BASE_URL}/${id}`, user)
}