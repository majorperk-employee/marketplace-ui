import { Cart } from "./market";

export class Account {
  id: number;
  cart: Cart;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  tier: Tier;
  address: string;
  city: string;
  state: string;
  email: string;
  zip: number;
  points: number;
  totaldays: number;
  ontimedays: number;
  phone?: string;
  daystreak?: number;
  picture?: string;
  job?: string;
}

export class Auth {
  id: number;
  points: number;
}

export class Tier {
  id: number;
  currentTier: string;
  nextTier: string;
  onTimePercentGoal: number;
  totalDaysGoal: number;
}

export class Survey {
  period: number;
  duration: string;
  question: string;
  options: any[];
  scale: string;
}