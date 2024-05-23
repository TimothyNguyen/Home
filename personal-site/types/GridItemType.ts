
export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type ItemType = "social" | "mentor";

export interface EquipmentItem {
  title: string;
  link: string;
}

export interface GridItemType {
    layout: GridItemLayout;
    type: ItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    promotion?: string;
    price?: string;
    oldPrice?: string;
    stars?: number;
    imageUrl?: string;
}