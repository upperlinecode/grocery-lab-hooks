export type InventoryItem = {
  name: string;
  priceInCents: number;
  productID: string;
};

export const inventory = [
  { name: "Apple", priceInCents: 199, productID: "a1582" },
  { name: "Loaf of Bread", priceInCents: 150, productID: "b2693" },
  { name: "Milk", priceInCents: 250, productID: "m3704" },
];
