import axios from "axios";

const baseUrl = "http://localhost:3000/api/orders";

export const getOrders = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getOrder = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const postOrder = async (order) => {
  const response = await axios.post(baseUrl, order);
  return response.data;
};

export const putOrder = async (id, order) => {
  const response = await axios.put(`${baseUrl}/${id}`, order);
  return response.data;
};

export const deleteOrder = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
