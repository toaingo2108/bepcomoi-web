export const menuItems: MenuItemType[] = [
  { name: "Trang chủ", href: "/" },
  { name: "Về Mămmy", href: "/niem-tin-cua-mammy" },
  {
    name: "Cửa hàng",
    href: "/cua-hang",
    subItems: [
      // {
      //   name: "Thực phẩm ăn dặm",
      //   href: "/thuc-pham-an-dam",
      // },
      // {
      //   name: "Chăm sóc cơ thể bé",
      //   href: "/cham-soc-co-the-be",
      // },
      // {
      //   name: "Dụng cụ ăn dặm",
      //   href: "/dung-cu-an-dam",
      // },
      // {
      //   name: "Tất cả sản phẩm",
      //   href: "/san-pham",
      // },
    ],
  },
  {
    name: "Phươn pháp ăn dặm bổ não",
    href: "/phuong-phap-an-dam-bo-nao",
    // subItems: [
    //   {
    //     name: "Phương pháp ăn dặm bổ não",
    //     href: "/chuyen-muc/phuong-phap-an-dam-bo-nao",
    //   },
    //   {
    //     name: "Vì sao 1000 ngày đầu đời quan trọng?",
    //     href: "/the-first-1000-days",
    //   },
    //   {
    //     name: "Tài nguyên cho cha mẹ",
    //     href: "/chuyen-muc/tai-nguyen-cho-cha-me",
    //   },
    // ],
  },
  { name: "Thực đơn ăn dặm bổ não", href: "/chuyen-muc/thuc-don-an-dam" },
  {
    name: "Help",
    href: "/help",
    // subItems: [
    //   {
    //     name: "Hồ sơ công bố sản phẩm",
    //     href: "/ho-so-cong-bo-san-pham",
    //   },
    //   {
    //     name: "Chính sách bảo mật thông tin",
    //     href: "/chinh-sach-bao-mat-thong-tin",
    //   },
    // ],
  },
];

export type MenuItemType = {
  name: string;
  href: string;
  subItems?: {
    name: string;
    href: string;
  }[];
};
