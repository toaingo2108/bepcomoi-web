import Wrapper from "@/components/global/Wrapper";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Wrapper className="py-10">
      <h1 className="text-center text-2xl pb-4">CHÍNH SÁCH BẢO MẬT</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. MỤC ĐÍCH VÀ PHẠM VI THU THẬP THÔNG TIN</h2>
        <p>
          Khi khách hàng truy cập và mua sắm tại bepcomoi.com, chúng tôi có thể thu thập một số
          thông tin cá nhân nhằm phục vụ cho quá trình mua hàng và nâng cao trải nghiệm dịch vụ. Các
          thông tin có thể bao gồm:
        </p>
        <ul className="list-disc pl-6">
          <li>Họ và tên</li>
          <li>Địa chỉ giao hàng</li>
          <li>Số điện thoại liên hệ</li>
          <li>Email</li>
          <li>Phương thức thanh toán</li>
          <li>Lịch sử giao dịch</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. PHẠM VI SỬ DỤNG THÔNG TIN</h2>
        <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
        <ul className="list-disc pl-6">
          <li>Xử lý đơn hàng và giao hàng đến khách hàng.</li>
          <li>
            Cung cấp thông tin về sản phẩm, khuyến mãi, ưu đãi (nếu khách hàng đồng ý nhận thông tin
            này).
          </li>
          <li>Cải thiện chất lượng dịch vụ, hỗ trợ khách hàng tốt hơn.</li>
          <li>Đảm bảo an toàn giao dịch thanh toán.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. CAM KẾT BẢO MẬT THÔNG TIN KHÁCH HÀNG</h2>
        <p>
          Chúng tôi cam kết không bán, chia sẻ hoặc trao đổi thông tin cá nhân của khách hàng cho
          bên thứ ba vì mục đích thương mại.
        </p>
        <p>
          Thông tin khách hàng chỉ được chia sẻ với các bên liên quan như đơn vị vận chuyển, cổng
          thanh toán trong trường hợp cần thiết để hoàn tất đơn hàng.
        </p>
        <p>
          Mọi giao dịch thanh toán trực tuyến sẽ được mã hóa và bảo mật theo tiêu chuẩn cao nhất.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. THỜI GIAN LƯU TRỮ THÔNG TIN</h2>
        <p>
          Thông tin cá nhân của khách hàng sẽ được lưu trữ trong hệ thống cho đến khi khách hàng yêu
          cầu xóa hoặc khi chúng tôi không còn cần sử dụng thông tin đó.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">5. QUYỀN LỢI CỦA KHÁCH HÀNG</h2>
        <ul className="list-disc pl-6">
          <li>
            Kiểm tra, cập nhật hoặc yêu cầu xóa thông tin cá nhân của mình bằng cách liên hệ với
            chúng tôi qua bepcomoi7583@gmail.com/0386857571.
          </li>
          <li>Yêu cầu ngừng nhận thông tin tiếp thị bất kỳ lúc nào.</li>
          <li>Khiếu nại về việc sử dụng thông tin cá nhân không đúng mục đích.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. THAY ĐỔI CHÍNH SÁCH BẢO MẬT</h2>
        <p>
          Chúng tôi có thể cập nhật chính sách bảo mật này để phù hợp với quy định pháp luật và nhu
          cầu thực tế. Mọi thay đổi sẽ được thông báo trên website trước khi có hiệu lực.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">7. LIÊN HỆ</h2>
        <p>
          Nếu có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến chính sách bảo mật, vui lòng liên hệ:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Email:</strong> bepcomoi7583@gmail.com
          </li>
          <li>
            <strong>Hotline:</strong> 0386857571
          </li>
          <li>
            <strong>Địa chỉ:</strong> 506/2 Đường 3/2, P.14, Q.10, TP.HCM
          </li>
        </ul>
      </section>

      <p className="mt-6 font-semibold">
        bepcomoi.com cam kết bảo vệ thông tin cá nhân của khách hàng và cung cấp trải nghiệm mua sắm
        an toàn, thuận tiện nhất.
      </p>
    </Wrapper>
  );
};

export default PrivacyPolicy;
