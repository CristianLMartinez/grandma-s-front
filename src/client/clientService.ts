import { ENDPOINTS, instance } from "../service/axiosConfig"; // Asegúrate de que la ruta sea correcta
import { Client } from "./Client"; // Asegúrate de que la ruta sea correcta

const BASE_ENDPOINT = ENDPOINTS.CLIENTS;

export const registerClient = async (client: Client) => {
  try {
    const response = await instance.post(BASE_ENDPOINT, client);
    return response.data;
  } catch (error) {
    console.error("Error registering client: ", error);
    throw error;
  }
};

export const getClients = async () => {
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

export const updateClient = async (document: string) => {
  try {
    const response = await instance.put(`${BASE_ENDPOINT}/${document}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients: ", error);
    throw error;
  }
};

export const deleteClient = async (document: string) => {
  try {
    const response = await instance.delete(`${BASE_ENDPOINT}/${document}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching clients: ", error);
    throw error;
  }
};

