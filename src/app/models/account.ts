import { RewardItem } from "./market";

export class Account {
  id: number;
  cart: RewardItem[];
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

