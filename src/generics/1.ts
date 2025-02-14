import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
  id: number;
  name: string;
}

async function getUserData() {
  const userData = await fetchData<User>('https://api.example.com/user');
  console.log(userData.id, userData.name);
}

interface Product {
  id: number;
  name: string;
  price: number;
}

async function getProductData() {
  const products = await fetchData<Product[]>('https://api.example.com/products');
  console.log(products);
}