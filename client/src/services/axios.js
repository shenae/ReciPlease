import axios from "axios";
const URL = "http://localhost:4567";

const api = axios.create({
  baseURL: `${URL}`
});

export const fetchRecipes = async () => {
  try {
    const resp = await api.get("/receipies");
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchOneRecipe = async id => {
  try {
    const resp = await api.get(`/receipies/${id}`);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const createRecipe = async (data, header) => {
  try {
    const resp = await api.post("/receipies/create", data, header);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const deleteRecipe = async (id, data) => {
  try {
    const resp = await api.delete(`/receipies/delete/${id}`, data);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const editRecipe = async (id, data, header) => {
  try {
    const resp = await api.put(`/receipies/edit/${id}`, data, header);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCuisines = async () => {
  try {
    const resp = await api.get("/cuisines");
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchOneCuisine = async id => {
  try {
    const resp = await api.get(`/cuisines/${id}`);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchUser = async id => {
  try {
    const resp = await api.get(`/users/${id}`);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const logIn = async data => {
  try {
    const resp = await api.post("/users/login", data);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async data => {
  try {
    const resp = await api.post("/users/signup", data);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};