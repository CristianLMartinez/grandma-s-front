import { ENDPOINTS, instance } from "./axiosConfig"; // Asegúrate de que la ruta sea correcta
import { Client } from "../schemas/Client"; // Asegúrate de que la ruta sea correcta

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
            'Accept': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching clients: ", error);
      throw error;
    }
  };
  
