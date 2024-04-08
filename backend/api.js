import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace with your API base URL

const apiClient = axios.create({
    baseURL,
    withCredentials: true, // Include cookies if needed for authentication
    headers: {
        'Authorization': `Bearer  ${localStorage.getItem('authToken')}`  
    }                                                                           //ensure that you store token in local storage
                                                                                // localStorage.setItem('authToken', token);
});

const loginClient = axios.create({
    baseURL,
    withCredentials: true  // May be needed depending on your authentication setup
});


export const loginUser = (data) => loginClient.post('/login', data); 
export const logoutUser = () => apiClient.post('/logout');

export const getJeea = () => apiClient.get(`/jeeas`);


export const getCcaEca = () => apiClient.get(`/temp-cca-ecas`,{headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`  
}});
export const createOrUpdateCcaEca = (data) => apiClient.post(`/temp-cca-ecas`, data);
export const deleteCcaEca = () => apiClient.delete(`/temp-cca-ecas`);


export const getPersonalDetail = () => apiClient.get(`/temp-personal-details`);
export const createOrUpdatePersonalDetail = (data) => apiClient.post(`/temp-personal-details`, data);
export const deletePersonalDetail = () => apiClient.delete(`/temp-personal-details`);


export const getOtherDetail = () => apiClient.get(`/temp-other-details`);
export const createOrUpdateOtherDetail = (data) => apiClient.post(`/temp-other-details`, data);
export const deleteOtherDetail = () => apiClient.delete(`/temp-other-details`);


export const getParentDetail = () => apiClient.get(`/temp-parent-details`);
export const createOrUpdateParentDetail = (data) => apiClient.post(`/temp-parent-details`, data);
export const deleteParentDetail = () => apiClient.delete(`/temp-parent-details`);


export const getEducationDetail = () => apiClient.get(`/temp-education-details`);
export const createOrUpdateEducationDetail = (data) => apiClient.post(`/temp-education-details`, data);
export const deleteEducationDetail = () => apiClient.delete(`/temp-education-details`);


export const getHostelDetail = () => apiClient.get(`/temp-hostel-details`);
export const createOrUpdateHostelDetail = (data) => apiClient.post(`/temp-hostel-details`, data);
export const deleteHostelDetail = () => apiClient.delete(`/temp-hostel-details`);

export const createUgRegistration = (data) => apiClient.post(`/ug-registrations`, data);
export const getUgRegistration = () => apiClient.get(`/ug-registrations`); 
