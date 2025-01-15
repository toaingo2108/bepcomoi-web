"use client";

import Wrapper from "@/components/global/Wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendHelp } from "@/lib/api";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, "Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  content: z.string().min(1, "Nội dung không được để trống"),
});

type FormValues = z.infer<typeof FormSchema>;

const HelpPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: FormValues) => {
    startTransition(async () => {
      await sendHelp(data);
    });
  };

  return (
    <Wrapper className="py-10">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.575855450003!2d106.66260787494504!3d10.767135289381107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f55ab74d021%3A0x38fdf2960ead59b!2zNTA2LzIgxJAuIDMgVGjDoW5nIDIsIFBoxrDhu51uZyA4LCBRdeG6rW4gMTAsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1736847507067!5m2!1svi!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="bg-white flex flex-col space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState: { invalid } }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-muted-foreground">
                        Họ và tên <span className="text-destructive">*</span>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState: { invalid } }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-muted-foreground">
                        Địa chỉ Email <span className="text-destructive">*</span>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field, fieldState: { invalid } }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-muted-foreground">Nội dung</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Hay góp ý hoặc đặt câu hỏi cho chúng tôi tại đây. (hoặc để lại số điện thoại của bạn chúng tôi sẽ liên hệ ngay)"
                          className={cn(
                            "rounded-none",
                            invalid && "border-destructive",
                            !invalid && !!field.value && "border-primary"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-full font-bold py-6 text-lg"
                  loading={isPending}
                >
                  Gửi
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default HelpPage;
