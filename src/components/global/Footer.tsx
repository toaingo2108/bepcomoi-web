import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="h-fit border-t-4 border-primary/60 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/FooterBGXL.jpg')",
      }}
    >
      <Wrapper className="flex flex-col py-16">
        <div className="flex justify-center">
          <div className="relative h-36 w-36">
            <Image src="/logo-mammy.png" alt="logo" fill className="object-contain" priority />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div>
            <h3 className="font-bold">Trang Facebook</h3>
            {/* <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBepcomoi%2F%3Fref%3Dembed_page&tabs=timeline&width=340&height=328&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=337909515527733"
              style={{
                border: "none",
                overflow: "hidden",
              }}
              className="w-full"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe> */}
          </div>
          <div>
            <h3 className="font-bold">Thông tin liên hệ</h3>
          </div>
          <div>
            <h3 className="font-bold">Liên kết</h3>
            <div className="flex flex-col gap-2 mt-4">
              <FooterLink>Phương pháp ăn dặm bổ não</FooterLink>
              <FooterLink>Niềm tin của Mămmy</FooterLink>
              <FooterLink>Help</FooterLink>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Chính sách dịch vụ</h3>
            <div className="flex flex-col gap-2 mt-4">
              <FooterLink>Hình thức thanh toán</FooterLink>
              <FooterLink>Chính sách bảo mật</FooterLink>
              <FooterLink>Chính sách đổi trả</FooterLink>
              <FooterLink>Chính sách giao hàng</FooterLink>
              <FooterLink>Chính sách kiếm hàng</FooterLink>
              <FooterLink>Trách nhiệm giao nhận</FooterLink>
              <FooterLink>Tuyên bố miễn trừ</FooterLink>
            </div>
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div className="lg:col-span-3 flex flex-col gap-1">
            <p className="font-bold text-sm">CÔNG TY TNHH MĂMMY VIỆT NAM</p>
            <p className="font-bold text-sm">Giấy chứng nhận ĐKDN số 0316964191</p>
            <p className="font-bold text-sm">Do Sở Kế hoạch đầu tư cấp ngày 29/09/2021</p>
            <p className="text-sm">
              Trụ sở chính: 112/11-112/13 Nguyễn Văn Hưởng, Thảo Điền, Tp. Thủ Đức, Tp. Hồ Chí Minh,
              Việt Nam Nhà máy Mămmy Bình Dương: 329 Đường Hưng Định 24, Kp Hưng Lộc, Phường Hưng
              Định, Thuận An, Tỉnh Bình Dương.
            </p>
            <p className="text-sm font-bold">
              TỔNG ĐÀI CSKH: <span className="text-primary">0877 050 450</span>
            </p>
          </div>
          <div className="lg:col-span-1 relative aspect-[4/1]">
            <Image src="/logoSaleNoti.png" alt="logosalenoti" fill className="object-contain" priority />
          </div>
        </div>
      </Wrapper>
      <div className="h-16 bg-primary text-white font-bold flex justify-center items-center">
        Copyright © 2023 MĂMMY
      </div>
    </footer>
  );
};

export default Footer;

export function FooterLink({ children, href = "/" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="flex items-center text-sm font-light">
      <CheckIcon className="h-4 w-4 text-primary mr-1.5 shrink-0" strokeWidth={3} />
      {children}
    </Link>
  );
}
