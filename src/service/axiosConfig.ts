import axios from "axios";

export const BASE_URL = "http://localhost:8080/";

export const ENDPOINTS = {
  CLIENTS: "clients",
  PRODUCTS: "products",
  ORDERS: "orders",
  MENU: "menu"
};

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
});
