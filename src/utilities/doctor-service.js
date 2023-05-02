import * as doctorApi from './doctor-api'


export async function getAll() {
    return doctorApi.getAll()
    
};

export async function create(formData) {
    return doctorApi.create(formData)
    
}

