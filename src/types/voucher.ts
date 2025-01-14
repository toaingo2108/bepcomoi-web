export type Voucher = {
  id: string;
  code: string;
  discountType: DiscountType;
  discount: number;
  minOrderValue: number;
  maxDiscount: number | null;
  expiredDate: string | Date;
  usageLimit: number | null;
  usageCount: number;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export enum DiscountType {
  PERCENT = "PERCENT",
  AMOUNT = "AMOUNT",
}
