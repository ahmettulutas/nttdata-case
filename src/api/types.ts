export type Product = {
  id: number;
  description: string;
  imageUrl: string;
  name: string;
  price: string;
  shippingMethod: string;
};

export type ProductListRes = Array<Product>;
