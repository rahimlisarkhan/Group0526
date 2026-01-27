// type Gender = 'male' | 'female';
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

// type nurlanAddress = string | number | string[];
// type nurlanAddress = ['Ag seher', '28 may']; // tuple type example
// type nurlanAddress = [string, string]; // tuple type example

export interface UserAddress {
  street: string;
  city: string;
  country: string;
}

export interface UserProfile {
  id: number;
  username: string;
  email: string;
  gender: Gender;
  // address: ['street1', 'street2']; // tuple type example
  address: UserAddress[]; // tuple type example
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

// export interface Info {
//   fullname: string;
//   age: number;
//   isActive: boolean;
//   street: string;
//   city: string;
//   country: string;
// }

export type Info = Person & UserAddress; // intersection type example

export interface Admin {
  fullname: string;
  role: 'system admin';
  age: number;
  address: string[];
}

export interface Employee {
  name: string;
  surname: string;
  role: 'system employee';
  age: number;
}

export interface ResponseSystem<T> {
  data: T;
  balance: number;
  createdAt: string;
  updatedAt?: string;
}
