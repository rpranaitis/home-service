export interface User {
  _id: string;
  name: string;
  age: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type NewUser = Omit<User, '_id'>;

export interface UserResponse {
  status: string;
  message?: string;
  token: string;
  user: User;
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

export interface Booking {
  [x: string]: any;
  _id: string;
  businessId: string;
  date: string;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
}

export type NewBooking = Omit<Booking, '_id'>;

export interface RegisterFormValues {
  name: string;
  age: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}
