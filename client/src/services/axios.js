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

//needs to be tested
export const createRecipe = async (data) => {
 try {
   const resp = await api.post('/receipies/create', data);
   console.log("Creating recipe...")
   return resp;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const deleteRecipe = async (id) => {
 try {
   const resp = await api.delete(`/receipies/delete/${id}`);
   console.log("Deleting recipe...")
   return resp;
 } catch (e) {
   console.log(e);
 }
}

//needs to be tested
export const editRecipe = async (id) => {
 try {
 	 const temp={message:"hello world"};
   const resp = await api.delete(`/receipies/edit/${id}`,temp);
   console.log("Deleting recipe...")
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