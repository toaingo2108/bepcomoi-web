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
            <Image src="/logo.png" alt="logo" fill className="object-contain" priority />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div>
            <h3 className="font-bold">Trang Facebook</h3>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61569239116841&tabs=timeline&width=292&height=320&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=337909515527733"
              width="292"
              height="320"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <h3 className="font-bold">Thông tin liên hệ</h3>
            <div className="flex flex-col gap-2 mt-4">
              <FooterLink href="tel:+84386857571">038.68.57.571</FooterLink>
              <FooterLink href="tel:+84964530045">096.45.30.045</FooterLink>
              <FooterLink href="mailto:bepcomoi7583@gmail.com">bepcomoi7583@gmail.com</FooterLink>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Liên kết</h3>
            <div className="flex flex-col gap-2 mt-4">
              <FooterLink>Về bepcomoi.com</FooterLink>
              <FooterLink>Bài viết</FooterLink>
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
            <p className="font-bold text-sm">BEP CO MOI</p>
            <p className="font-bold text-sm">TUI CO KHO MUC</p>
            <a href="mailto:bepcomoi7583@gmail.com" className="font-bold text-sm">
              bepcomoi7583@gmail.com
            </a>
            <p className="text-sm">CSC: 247 Trường Sa, P.Hoài Hương, Tx.Hoài Nhơn, Bình Định</p>
            <p className="text-sm">
              CN1: 64 Nguyễn Đình Thụ, P.Hoài Hương, Tx.Hoài Nhơn, Bình Định
            </p>
            <p className="text-sm">CN2: 90/7 Trần Hưng Đạo, P.Hải Cảng, TP.Quy Nhơn, Bình Định</p>
            <p className="text-sm">CN3: 506/2 Đường 3/2, P.14, Q.10, TP.HCM</p>
            <p className="text-sm">VP: 64 Võ Oanh, P.25, Q.Bình Thạnh, TP.HCM</p>
            <p className="text-sm font-bold">
              Vui lòng liên hệ:{" "}
              <a href="tel:+84386857571" className="text-primary">
                038.68.57.571
              </a>
              <span className="mx-2">-</span>
              <a href="tel:+84964530045" className="text-primary">
                096.45.30.045
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
      <div className="h-16 bg-primary text-white font-bold flex justify-center items-center">
        Copyright © 2025 bepcomoi.com
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
