export interface TemplateProps {
    userName: string;
    userImage: string | null;
    nameFontSize: number;
    description?: string;
}

export interface CardData {
    name: string;
    image?: string;
    description?: string;
}

export interface TemplateRenderProps {
    data: CardData;
}
