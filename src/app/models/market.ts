export class Brand {
    id: number;
    brandKey: string;
    brandName: string;
    status: string;
    shortDescription: string;
    imageUrls: Object;
    meta: Meta;
}

export class RewardItem {
    id: number;
    name: string;
    price: number;
    type: string;
    description: string;
    tags: string[];
    imageURL: string;
    meta: Meta;
}

export interface OrderItem {
    id: number;
    name: string;
    price: number;
    date: string;
}

export interface Meta { 
    purchaseCount?: number; 
    cartCount?: number;
    checked?: boolean;
    purchaseDate?: string;
}

export class Cart {
    id: number;
    items: RewardItem[];
    cost: number;
}

export class Purchase {
    id: number;
    items: RewardItem[];
    cost: number;
    createdAt: string;
}