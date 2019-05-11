import { Cart } from "./market";

export class Account {
  id: number;
  cart: Cart;
  purchases: [];
  tier: Tier;
  phone: string;
  username: string;
  nickname: string;
  password: string;
  manager: boolean;
  email: string;
  picture: string;
  points: number;
  sandPMetrics: SPMetrics;
}

export class Auth {
  id: number;
  points: number;
}

export class Tier {
  id: number;
  currentTier: string;
  nextTier: string;
  absenteeismGoal: number;
  totalDaysGoal: number;
  multiplier: number;
}

export class Survey {
  period?: number;
  duration?: string;
  question: string;
  options: any[];
  scale: string;
}

export class SPMetrics {
  employee_id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  team_id: number;
  team_name: string;
  location_id: number;
  location_name: string;
  prod_hours: number;
  sales: number;
  avg_speed_answer: number;
  avg_handle: number;
  first_call_resolution: number;
  customer_satisfcation: number;
  abstenteeism: number;
  input_data_error: number;
  contact_quality: number;
}