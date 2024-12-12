import Banner from "@/components/global/Banner";
import Wrapper from "@/components/global/Wrapper";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <Wrapper className="!px-0 max-w-[1908px]">
          <Banner />
          <div className="relative w-full aspect-[1908/600]">
            <Image src="/home1.jpg" alt="home" fill className="object-cover" priority />
          </div>
          {/* <section>
          <Wrapper className="py-10">
            <h3 className="text-center font-bold text-primary text-xl">
              TẤT CẢ NHỮNG GÌ CON CẦN LÀ MỘT KHỞI ĐẦU MẠNH MẼ
            </h3>
            <p className="text-center py-6 font-light text-base">
              Trong 2 năm đầu tiên, mỗi ngày trẻ tăng 24g. Riêng bộ não chiếm tới 2g và tạo ra tới
              1000 liên kết mới mỗi giây. Muốn được như vậy, trẻ phải được cung cấp những món ăn bổ
              não. Một bộ não thông minh chính, một cơ thể khỏe mạnh là món quà tốt nhất mà chúng ta
              có thể dành cho con. Ở Mămmy, chúng tôi sản xuất những sản phẩm ăn dặm, đồ dùng và sp
              chăm sóc cơ thể con chất lượng cao nhất.
            </p>
            <div className="grid grid-cols-3 mt-6">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/doandammobile.png"
                  alt="image"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/chamsoccothemobile-731x1024.png"
                  alt="image"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/dungcuandammobile-731x1024.png"
                  alt="image"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </Wrapper>
        </section> */}
          {/* <section>
            <div className="relative w-full h-auto aspect-[1644/742]">
              <Image
                src="/home2.jpg"
                alt="image"
                fill
                className="select-none pointer-events-none object-cover"
                priority
              />
            </div>
            <div className="w-full h-auto aspect-[1644/649] relative">
              <Image
                src="/home3.jpg"
                alt="image"
                fill
                className="object-cover select-none pointer-events-none"
                priority
              />
            </div>
            <div className="w-full h-auto aspect-[1644/649] relative">
              <Image
                src="/home4.jpg"
                alt="image"
                fill
                className="object-contain select-none pointer-events-none"
                priority
              />
            </div>
          </section> */}
        </Wrapper>
      </div>
    </>
  );
};

export default HomePage;
