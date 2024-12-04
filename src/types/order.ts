import { Product } from "./product";

export type Order = {
  id: string;
  name: string;
  birthday: string;
  receiver: string;
  phone: string;
  code: string;
  address: string;
  paymentMethod: string;
  totalPrice: number;
  status: StatusOrderEnum;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
  productIds: string[];
  quantity: number[];
  products: Product[];
};

export enum PaymentMethodEnum {
  COD = "COD",
  BANK = "BANK",
}

export enum StatusOrderEnum {
  PENDING = "PENDING",
  CONFIRMED_BY_ADMIN = "CONFIRMED_BY_ADMIN",
  DELIVERING = "DELIVERING",
  DELIVERED = "DELIVERED",
  COMPLETED = "COMPLETED", // when the order is delivered and paid
  CANCELLED = "CANCELLED", // when the order is cancelled
}

export const FORMAT_STATUS_ORDER = {
  [StatusOrderEnum.PENDING]: "Chờ xử lý",
  [StatusOrderEnum.CONFIRMED_BY_ADMIN]: "Đã xác nhận",
  [StatusOrderEnum.DELIVERING]: "Đang giao hàng",
  [StatusOrderEnum.DELIVERED]: "Đã giao hàng",
  [StatusOrderEnum.COMPLETED]: "Hoàn thành",
  [StatusOrderEnum.CANCELLED]: "Đã hủy",
};
