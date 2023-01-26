import axios from "axios";

const baseUrl = "http://example.com:80/api/cart";

export const getCart = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addToCart = async (productId) => {
  try {
    const response = await axios.post(baseUrl, { productId });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCart = async (productId, quantity) => {
  try {
    const response = await axios.put(`${baseUrl}/${productId}`, { quantity });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const removeFromCart = async (productId) => {
  try {
    await axios.delete(`${baseUrl}/${productId}`);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
