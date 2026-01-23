export interface UserAddress {
  street: string;
  city: string;
  country: string;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  address: UserAddress[];
}

export interface EmployeeProfile extends UserProfile {
  department: string;
  position: string;
}

export type ResultSum = number | string; // union type example
export type Role = 'admin' | 'user' | 'guest'; // literal type example

export type Person = {
  fullname: string;
  age: number;
  isActive: boolean;
};
