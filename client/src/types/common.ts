export interface User {
  _id: string;
  name: string;
  age: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  name: string;
  color: string;
  url: string;
}

export interface Business {
  _id: string;
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrls: string[];
}