export type MenuItemData = {
  id: number;
  name: string;
  price: number;
  emoji: string;
};

export type OrderItem = MenuItemData & {
  orderId: number;
};