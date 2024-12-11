import Confetti from "@/components/confetti";
import Wrapper from "@/components/global/Wrapper";
import NotFound from "@/components/not-found";
import { Button } from "@/components/ui/button";
import { getDetailOrder } from "@/lib/api";
import { FORMAT_STATUS_ORDER, PaymentMethodEnum } from "@/types/order";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OrderDetailPageProps {
  params: {
    code: string;
  };
  searchParams: {
    [key: string]: string;
  };
}
const OrderDetailPage = async ({ params, searchParams }: OrderDetailPageProps) => {
  const order = await getDetailOrder(params.code);

  if (!order) {
    return <NotFound>Không tìm thấy đơn hàng</NotFound>;
  }

  const isSuccess =
    (order.paymentMethod === PaymentMethodEnum.BANK && order.isPaid) ||
    order.paymentMethod === PaymentMethodEnum.COD;

  return (
    <React.Fragment>
      {isSuccess && <Confetti />}
      <div className="bg-neutral-100 py-20">
        <Wrapper className="p-10 bg-white flex flex-col items-center gap-4">
          {isSuccess ? (
            <CheckCircle2Icon className="text-lime-500 w-40 h-40" strokeWidth={1} />
          ) : (
            <XCircleIcon className="text-rose-500 w-40 h-40" strokeWidth={1} />
          )}
          <h2 className="text-3xl">Xin chào {order.receiver},</h2>
          <p className="italic text-lg">
            Trạng thái đơn hàng của bạn: {FORMAT_STATUS_ORDER[order.status]}.
          </p>
          <p className="text-center">
            Nếu có thắc mắc, vui lòng liên hệ cho cửa hàng cùng với mã đơn hàng
            <br />
            <b>{order.code}</b>
          </p>
          {order.isPaid ? (
            <div className="text-green-500 font-semibold">Đã thanh toán</div>
          ) : (
            <div className="text-yellow-400 font-semibold">
              Chưa thanh toán ({order.paymentMethod})
            </div>
          )}

          <Button variant="secondary" className="rounded-none" asChild>
            <Link href={"/cua-hang"}>Tiếp tục mua sắm</Link>
          </Button>
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default OrderDetailPage;
