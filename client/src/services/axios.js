import axios from 'axios';
const URL = 'http://localhost:4567';

const api = axios.create({
  baseURL: `${URL}`
})

export const fetchRecipes = async () => {
 try {
   const resp = await api.get('/receipies')
   console.log("Fetching recipes...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

export const fetchOneRecipe = async (id) => {
 try {
   const resp = await api.get(`/receipies/${id}`)
   console.log("Fetching one recipe...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const createRecipe = async (data,header) => {
 try {
   const resp = await api.post('/receipies/create', data,header);
   console.log("Creating recipe...")
   return resp;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const deleteRecipe = async (id,data) => {
 try {
   const resp = await api.delete(`/receipies/delete/${id}`, data);
   console.log(`/receipies/delete/${id}`, data);
   console.log("Deleting recipe...")
   return resp;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const editRecipe = async (id,data,header) => {
 try {
   const resp = await api.put(`/receipies/edit/${id}`,data, header);
   console.log("Editing recipe...")
   return resp;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const fetchCuisines = async () => {
 try {
   const resp = await api.get('/cuisines')
   console.log("Fetching cuisines...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const fetchOneCuisine = async (id) => {
 try {
   const resp = await api.get(`/cuisines/${id}`)
   console.log("Fetching one cuisine...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const fetchUser = async (id) => {
 try {
   const resp = await api.get(`/users/${id}`)
   console.log("Fetching user...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const logIn = async (data) => {
 try {
   const resp = await api.post('/users/login',data)
   console.log("Logging in...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const signUp = async (data) => {
 try {
   const resp = await api.post('/users/signup',data)
   console.log("Creating new user...")
   return resp.data;
 } catch (e) {
   console.log(e);
 }
}