import { sendRequest } from "./sendRequest";

const BASE_URL = '/api/doctors';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function create(formData) {
return sendRequest(BASE_URL, 'POST', formData)
}
