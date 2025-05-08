interface ISignatureCard {
    id: string;
    name: string;
    price: number;
    image_url: string;
    category: string;
    is_available?: boolean;
    className?: string;
}

interface ISignatureCardResponse {
    data: ISignatureCard[],
    metadata: {
        total: number;
        page: number;
        pageSize: number;
        totalPages: number;
    }
}

export type { ISignatureCard, ISignatureCardResponse }