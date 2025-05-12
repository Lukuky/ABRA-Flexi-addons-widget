export type WidgetState = 'overview' | 'detail';

export interface Category {
    id: number;
    nameCs: string;
    nameSk: string;
    nameEn: string;
    nameDe: string;
    active: boolean;
}

export interface Partner {
    id: number;
    logo: string;
    name: string;
    url: string;
}

export interface Addon {
    categories: string[];
    description: string;
    hasPrice: boolean;
    id: number;
    installScript?: string;
    installed?: boolean;
    linkMore?: string;
    name: string;
    partner: Partner;
    perex: string;
    photo: URL;
    uninstallScript?: string;
    variants: string[];
}

export interface AddonsSearch {
    totalPages: number;
    content: Addon[];
}