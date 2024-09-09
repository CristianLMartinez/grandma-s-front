import { ENDPOINTS, instance } from "../../service/axiosConfig";
import { Product } from "../schema/Product";

const BASE_ENDPOINT = ENDPOINTS.PRODUCTS;

export const registerProduct = async (product: Product) => {
  try {
    const response = await instance.post(BASE_ENDPOINT, product);
    return response.data;
  } catch (error) {
    console.error("Error registering product: ", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await instance.get(BASE_ENDPOINT, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching clients: ", error);
    throw error;
  }
};

export const updateProduct = async (document: string, product: Product) => {
  try {
    const response = await instance.put(`${BASE_ENDPOINT}/${document}`, product);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients: ", error);
    throw error;
  }
};

export const deleteProduct = async (document: string) => {
  try {
    const response = await instance.delete(`${BASE_ENDPOINT}/${document}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients: ", error);
    throw error;
  }
};

