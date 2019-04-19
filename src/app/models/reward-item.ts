export class RewardItem {
    id: number;
    name: string;
    price: number;
    type: string;
    description: string;
    tags: string[];
    imageURL: string;
    meta: any;
}

export interface OrderItem {
    id: number;
    name: string;
    price: number;
    date: string;
}

export interface Meta { purchased: number; clicked: number }