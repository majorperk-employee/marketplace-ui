import { RewardItem, Cart } from "./market";

export class Account {
  id: number;
  cart: Cart;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  tier: string;
  address: string;
  city: string;
  state: string;
  email: string;
  zip: number;
  points: number;
  totaldays: number;
  ontimedays: number;
  
  daystreak?: number;
  picture?: string;
  job?: string;
}

export class Auth {
  id: number;
  points: number;
}