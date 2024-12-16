"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
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
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
import { getListProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { buildImageUrl } from "@/lib/utils";

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
          <TabsList defaultValue="product" className="bg-transparent gap-1">
            <TabsTrigger
              value="product"
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 border rounded-t-lg rounded-b-none"
            >
              Sản phẩm
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 border rounded-t-lg rounded-b-none"
            >
              Đơn hàng
            </TabsTrigger>
          </TabsList>
          <TabsContent value="product">
            <SearchFoodTab onClose={handleClose} />
          </TabsContent>
          <TabsContent value="order">
            <SearchOrderTab onClose={handleClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Search;

interface ContentTabProps {
  onClose: () => void;
}

const SearchFoodTab = ({ onClose }: ContentTabProps) => {
  const router = useRouter();

  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [searchKey, setSearchKey] = useDebounceValue("", 500);

  const handleSearch = async (value: string) => {
    const products = await getListProducts({ search: value });
    if (products) {
      setSearchResult(products);
    }
  };

  useEffect(() => {
    if (searchKey) {
      handleSearch(searchKey);
    } else {
      setSearchResult([]);
    }
  }, [searchKey]);

  return (
    <div className="min-h-[40vh] mt-1 flex flex-col">
      <div className="flex gap-2">
        <Input
          className="flex-1 rounded-none"
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Tìm kiếm sản phẩm"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] rounded-none">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className="shadow-xl max-h-52">
            {[{ label: "Tất cả", value: "all" }].map((item) => (
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
      <ScrollArea className="h-72 w-full pr-4 mt-4">
        {searchResult.map((product) => (
          <div
            key={product.slug}
            role="button"
            onClick={() => {
              router.push("/san-pham/" + product.slug);
              onClose();
            }}
            className="flex justify-between items-center space-x-2 hover:bg-neutral-50 py-1"
          >
            <div className="flex flex-1 items-center space-x-2">
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={buildImageUrl(product.images[0])}
                  alt="product-image"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  priority
                  quality={60}
                />
              </div>
              <div className="text-sm">
                <p className="font-bold text-primary-foreground max-w-lg overflow-hidden whitespace-nowrap text-ellipsis">
                  {product.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

interface SearchOrderTabProps {
  onClose: () => void;
}
const SearchOrderTab = ({ onClose }: SearchOrderTabProps) => {
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
      onClose();
    }
  };

  return (
    <div className="min-h-[40vh] mt-1">
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
    </div>
  );
};
