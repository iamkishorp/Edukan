import axios from "axios";

const baseUrl = "http://example.com:80/api/products";

export const getFeaturedProducts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const postProduct = async (product) => {
  try {
    const response = await axios.post(baseUrl, product);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const putProduct = async (id, product) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
