import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log("Error", error)
    }
}

export const getUsers
 = async () => {
    try {
        return await axios.get(`${URL}/all`)
    }

    catch (error) {
        console.log('Error', error)
    }
}

export const deleteUser = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${BASE_URL}/${id}`, user)
}
