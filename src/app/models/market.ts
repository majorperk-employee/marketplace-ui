//meta.checked is used to signify in/not in cart.
export class Brand {
    id: number;
    brandKey: string;
    brandName: string;
    status: string;
    shortDescription: string;
    imageUrls: Object;
    meta = new Meta(false);
    items?: RewardItem[];
}

//meta.checked is used to signify in/not in cart.
export class RewardItem {
    id: number;
    name: string;
    price: number;
    type: string;
    description: string;
    tags: string[];
    imageURL: string;
    meta = new Meta(false);
}

export class OrderItem {
    id: number;
    name: string;
    price: number;
    date: string;
}

//meta.checked is used to signify to delete/not delete.
export class Meta { 
    purchaseCount?: number; 
    cartCount?: number;
    checked: boolean;
    purchaseDate?: string;

    constructor(checked: boolean, purchaseCount?: number, cartCount?: number, purchaseDate?: string) {
        this.purchaseCount = purchaseCount;
        this.cartCount = cartCount;
        this.checked = checked;
        this.purchaseDate = purchaseDate;
    }
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