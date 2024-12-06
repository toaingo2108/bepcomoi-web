"use client";

import React, { FunctionComponent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const Search = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="hover:bg-transparent shrink-0">
          <SearchIcon className="text-primary w-3.5 h-3.5" strokeWidth={4} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-2">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground font-bold text-2xl px-10 pt-2">
            Tìm kiếm
          </DialogTitle>
        </DialogHeader>
        <Tabs>
          <TabsList defaultValue="news" className="bg-transparent gap-1">
            <TabsTrigger
              value="news"
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 border rounded-t-lg rounded-b-none"
            >
              Tin tức
            </TabsTrigger>
            <TabsTrigger
              value="food"
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 border rounded-t-lg rounded-b-none"
            >
              Món ăn
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 border rounded-t-lg rounded-b-none"
            >
              Đơn hàng
            </TabsTrigger>
          </TabsList>
          <ContentTab value="news" />
          <ContentTab value="food" />
          <SearchOrderTab onAfterSearch={handleClose} />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Search;

interface ContentTabProps {
  value: "news" | "food" | "order";
}

const ContentTab: FunctionComponent<ContentTabProps> = ({ value }) => {
  return (
    <TabsContent value={value} className="min-h-[40vh] mt-1">
      <div className="flex gap-2">
        <Input
          className="flex-1 rounded-none"
          placeholder={value === "news" ? "Tìm kiếm bài viết..." : "Tìm kiếm món ăn..."}
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] rounded-none">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="shadow-xl max-h-52">
            {[
              { label: "Tất cả", value: "all" },
              { label: "Dụng cụ cho bé ăn dặm", value: "dung-cu-cho-be-an-dam" },
              { label: "Phương pháp ăn dặm bổ não", value: "phuong-phap-an-dam-bo-nao" },
              { label: "Tài nguyên cho cha mẹ", value: "tai-nguyen-cho-cha-me" },
              { label: "Thực đơn ăn dặm bổ não", value: "thuc-don-an-dam-bo-nao" },
              { label: "Các món mì ý bổ não", value: "cac-mon-mi-y-bo-nao" },
              { label: "Các món với dầu ăn bổ não", value: "cac-mon-voi-dau-an-bo-nao" },
              { label: "Các món với hạt bổ não", value: "cac-mon-voi-hat-bo-nao" },
              {
                label: "Thực đơn cho bé 12 đến 24 tháng",
                value: "thuc-don-cho-be-12-den-24-thang",
              },
              { label: "Tin tức", value: "tin-tuc" },
              {
                label: "Vì sao 1000 ngày đầu đời rất quan trọng?",
                value: "vi-sao-1000-ngay-dau-doi-rat-quan-trong",
              },
            ].map((item) => (
              <SelectItem
                className="focus:bg-primary focus:text-white hover:cursor-pointer"
                key={item.value}
                value={item.value}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button className="rounded-full" size="icon">
          <SearchIcon className="text-white w-3.5 h-3.5" strokeWidth={4} />
        </Button>
      </div>
    </TabsContent>
  );
};

interface SearchOrderTabProps {
  onAfterSearch: () => void;
}
const SearchOrderTab = ({ onAfterSearch }: SearchOrderTabProps) => {
  const router = useRouter();
  const formSchema = z.object({
    orderCode: z.string().min(1),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderCode: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { orderCode } = values;
    if (orderCode) {
      router.push(`/order/${orderCode}`);
      onAfterSearch();
    }
  };

  return (
    <TabsContent value="order" className="min-h-[40vh] mt-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="orderCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="flex-1 rounded-none"
                      placeholder="Nhập mã đơn hàng..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="rounded-full" size="icon" type="submit">
              <SearchIcon className="text-white w-3.5 h-3.5" strokeWidth={4} />
            </Button>
          </div>
        </form>
      </Form>
    </TabsContent>
  );
};
