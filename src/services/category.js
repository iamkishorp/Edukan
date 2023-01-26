import axios from "axios";

const baseUrl = "http://example.com:80/api/categories";

export const getCategories = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getCategory = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const postCategory = async (category) => {
  const response = await axios.post(baseUrl, category);
  return response.data;
};

export const putCategory = async (id, category) => {
  const response = await axios.put(`${baseUrl}/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
