"use client";

import Wrapper from "@/components/global/Wrapper";
import React, { useMemo, useRef, useState, useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TicketPercent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, formatPrice } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import BreadcrumbContainer from "@/components/global/BreadcrumbContainer";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { createOrder } from "./actions";
import Image from "next/image";
import { verifyVoucher } from "@/lib/api";
import { Voucher } from "@/types/voucher";

const formSchema = z.object({
  receiver: z.string().min(1),
  phone: z.string().regex(new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)),
  address: z.string().min(1),
  note: z.string().optional(),
  paymentMethod: z.string().min(1),
});

const PayPage = () => {
  const router = useRouter();

  const { items, clearCart } = useCart();

  const totalPrice = useMemo(() => {
    return items.reduce((prevTotal, { product, quantity }) => {
      return prevTotal + product.salePrice * quantity;
    }, 0);
  }, [items]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiver: "",
      phone: "",
      address: "",
      note: "",
      paymentMethod: "COD",
    },
  });

  const codeVoucherRef = useRef<HTMLInputElement>(null);

  const [voucher, setVoucher] = useState<Voucher | string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleVerifyVoucher = async () => {
    const code = codeVoucherRef.current?.value || "";
    const voucherVerified = await verifyVoucher(code, totalPrice);

    if (!voucherVerified) {
      setVoucher(""); // error
    } else {
      setVoucher(voucherVerified); // success
    }

    console.log(voucherVerified);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const voucherCode = voucher ? (voucher as Voucher).code : undefined;
    startTransition(async () => {
      const order = await createOrder(values, items, totalPrice, voucherCode);
      clearCart();
      router.push(order?.paymentUrl ?? `/order/${order?.code}`);
    });
  };

  return (
    <>
      <BreadcrumbContainer data={[{ label: "Trang chủ", href: "/" }, { label: "Thanh toán" }]} />
      <div className="bg-neutral-100 py-16">
        <Wrapper>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="bg-white lg:p-20 p-8 flex flex-col space-y-6">
                <h2 className="text-3xl font-light">Thanh toán</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <div className="flex items-center p-4 bg-neutral-100 border-t-2 border-primary">
                      <TicketPercent className="shrink-0 h-5 w-5 text-primary mr-1.5" />
                      <span className="font-light">Bạn có mã ưu đãi?</span>
                      <AccordionTrigger
                        hideIcon
                        className="p-0 text-primary underline hover:no-underline hover:text-black ml-1.5 font-light transition-colors duration-1000"
                      >
                        <span>Ấn vào đây để nhập mã</span>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="grid lg:grid-cols-2 grid-cols-1 py-8">
                      <div className="flex flex-col space-y-1">
                        <p className="text-muted-foreground">
                          Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.
                        </p>
                        <div className="flex space-x-4 pt-4">
                          <Input
                            className="rounded-none flex-1"
                            placeholder="Mã ưu đãi"
                            ref={codeVoucherRef}
                          />
                          <Button
                            type="button"
                            className="rounded-full px-10"
                            onClick={handleVerifyVoucher}
                          >
                            Áp Dụng
                          </Button>
                        </div>
                        {voucher === "" && (
                          <p className="text-rose-600">Mã giảm giá không hợp lệ hoặc đã hết hạn.</p>
                        )}
                        {voucher && (
                          <p>
                            Mã giảm giá hợp lệ:{" "}
                            <span className="font-bold text-primary">
                              {typeof voucher === "string" ? voucher : voucher.code}
                            </span>
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex gap-10 flex-col lg:flex-row">
                  <div className="flex-1">
                    <p className="py-4 border-b font-bold">Thông tin thanh toán</p>
                    <div className="space-y-2 my-6">
                      <FormField
                        control={form.control}
                        name="receiver"
                        render={({ field, fieldState: { invalid } }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-muted-foreground">
                              Người nhận hàng <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                className={cn(
                                  "rounded-none",
                                  invalid && "border-destructive",
                                  !invalid && !!field.value && "border-primary"
                                )}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field, fieldState: { invalid } }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-muted-foreground">
                              Số điện thoại <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                className={cn(
                                  "rounded-none",
                                  invalid && "border-destructive",
                                  !invalid && !!field.value && "border-primary"
                                )}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field, fieldState: { invalid } }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-muted-foreground">
                              Địa chỉ <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                className={cn(
                                  "rounded-none",
                                  invalid && "border-destructive",
                                  !invalid && !!field.value && "border-primary"
                                )}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <p className="py-4 border-b font-bold">Thông tin bổ sung</p>
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="note"
                        render={({ field, fieldState: { invalid } }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-muted-foreground">
                              Ghi chú đơn hàng (tuỳ chọn)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiêt hơn."
                                className={cn(
                                  "rounded-none",
                                  invalid && "border-destructive",
                                  !invalid && !!field.value && "border-primary"
                                )}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="lg:w-[40%] w-full border p-6 flex flex-col space-y-6 h-fit">
                    <p className="font-bold">Đơn hàng của bạn</p>
                    <div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="pl-0 font-bold text-muted-foreground">
                              Sản phẩm
                            </TableHead>
                            <TableHead className="pl-0 font-bold text-muted-foreground text-right">
                              Tạm tính
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody className="[&_tr:last-child]:border-b">
                          {items.map(({ product, quantity }) => (
                            <TableRow key={product.slug}>
                              <TableCell className="pl-0 font-medium">
                                <span className="font-light">{product.name}</span>{" "}
                                <span className="font-bold text-muted-foreground">
                                  x {quantity}
                                </span>
                              </TableCell>
                              <TableCell className="pl-0 font-bold text-muted-foreground text-right">
                                {formatPrice(product.salePrice * quantity)}
                              </TableCell>
                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell className="pl-0 font-bold text-muted-foreground">
                              Tạm tính
                            </TableCell>
                            <TableCell className="pl-0 font-bold text-muted-foreground text-right">
                              {formatPrice(totalPrice)}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-0 font-bold text-muted-foreground">
                              Giảm giá
                            </TableCell>
                            <TableCell className="pl-0 font-bold text-muted-foreground text-right">
                              {formatPrice(voucher ? (voucher as Voucher).discount : 0)}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="pl-0 font-bold text-muted-foreground">
                              Tổng
                            </TableCell>
                            <TableCell className="pl-0 font-bold text-muted-foreground text-right">
                              {formatPrice(
                                totalPrice - (voucher ? (voucher as Voucher).discount : 0)
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue="COD"
                                value={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex flex-col space-y-4 w-full">
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="BANK"
                                          id="r1"
                                          className="border-muted-foreground text-muted-foreground"
                                        />
                                        <Label
                                          className="text-muted-foreground font-normal"
                                          htmlFor="r1"
                                        >
                                          Thanh toán qua MoMo
                                        </Label>
                                        <Image
                                          src="/Logo-MoMo-Square.png"
                                          alt="momo-logo"
                                          width={20}
                                          height={20}
                                        />
                                      </div>
                                      {field.value === "BANK" && (
                                        <div className="relative text-muted-foreground bg-neutral-100 text-sm p-4">
                                          <div
                                            className="absolute bottom-[99%] h-3 w-5 bg-neutral-100"
                                            style={{
                                              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                            }}
                                          ></div>
                                          <p>(Chưa hỗ trợ vui lòng chọn phương thức khác)</p>
                                          <p>hoặc</p>
                                          <p>0386857571 - Ngô Thị Như Ý</p>
                                        </div>
                                      )}
                                    </div>
                                  </FormControl>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <div className="flex flex-col space-y-4 w-full">
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="COD"
                                          id="r2"
                                          className="border-muted-foreground text-muted-foreground"
                                        />
                                        <Label
                                          className="text-muted-foreground font-normal"
                                          htmlFor="r2"
                                        >
                                          Trả tiền mặt khi nhận hàng
                                        </Label>
                                      </div>
                                      {field.value === "COD" && (
                                        <div className="relative w-full text-muted-foreground bg-neutral-100 text-sm p-4">
                                          <div
                                            className="absolute bottom-[99%] h-3 w-5 bg-neutral-100"
                                            style={{
                                              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                                            }}
                                          ></div>
                                          <p>
                                            Quý khách có thể thanh toán sau khi nhận và kiểm tra
                                            hàng.
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </FormControl>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="inline-block text-sm">
                      <span className="text-muted-foreground">
                        Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải
                        nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong
                      </span>{" "}
                      <Link
                        href="/"
                        className="text-primary underline hover:no-underline hover:text-black transition-colors"
                      >
                        chính sách riêng tư.
                      </Link>
                    </div>

                    <Button
                      loading={isPending}
                      type="submit"
                      className="w-full rounded-full font-bold py-6 text-lg"
                    >
                      Đặt Hàng
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </Wrapper>
      </div>
    </>
  );
};

export default PayPage;
