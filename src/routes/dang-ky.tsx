import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, QrCode } from "lucide-react";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({
    meta: [
      { title: "Thanh Toán Vé 50K | KOL AI Workshop" },
      { name: "description", content: "Quét mã QR thanh toán 50.000đ và liên hệ Zalo xác nhận vé KOL AI Workshop." },
      { property: "og:title", content: "Đăng Ký Nhận Vé KOL AI Workshop" },
      { property: "og:description", content: "Nhận vé, tài liệu, phần hỏi đáp trực tiếp và bản phát lại trong 7 ngày." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistrationPage,
});

const ticketBenefits = [
  "Tham gia Huấn luyện cấp tốc KOL AI trực tuyến",
  "Nhận tài liệu & slide bài giảng",
  "Cơ hội Q&A trực tiếp",
  "Replay Zoom trong 7 ngày",
];

function RegistrationPage() {
  return (
    <main className="midautumn-sky min-h-screen px-5 py-10 sm:py-14">
      <div className="midautumn-stars" aria-hidden="true" />
      <div className="midautumn-moon" aria-hidden="true" />
      <div className="lantern" style={{ left: "6%", top: "16%", animationDelay: "0.4s" }} aria-hidden="true" />
      <div className="lantern" style={{ left: "90%", top: "22%", width: "2rem", height: "2.6rem", animationDelay: "1.8s" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> Quay lại trang chủ
        </Link>
        <header className="mt-8 text-center">
          <div className="eyebrow">🌕 HUẤN LUYỆN CẤP TỐC KOL AI</div>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl">Thanh Toán &amp; Nhận Vé</h1>
          <p className="mt-3 text-lg font-semibold text-primary">Hoàn tất thanh toán 50.000đ để xác nhận đăng ký</p>
        </header>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-black">Hướng dẫn đăng ký</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Quét mã QR Vietcombank và chuyển khoản đúng 50.000đ", "Chụp lại biên lai giao dịch thành công", "Gửi biên lai qua Zalo 0918 478 2687 để xác nhận"].map((step, i) => (
              <div className="rounded-lg border bg-card p-5 text-center shadow-sm" key={step}>
                <span className="mx-auto grid size-9 place-items-center rounded-full bg-primary font-black text-primary-foreground">{i + 1}</span>
                <p className="mt-3 text-sm font-medium leading-6">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-xl border bg-card shadow-lg">
          <div className="border-b bg-secondary px-6 py-5 text-center">
            <span className="text-xs font-bold uppercase text-primary">Vé tham gia • 50.000đ</span>
            <h2 className="mt-2 text-2xl font-black">Vé Tham Gia Huấn Luyện cấp tốc</h2>
            <p className="mt-2 text-sm text-muted-foreground">Mời 1 ly cà phê – tấm vé của thành viên yêu quý ☕</p>
          </div>
          <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-9">
            <div>
              <h3 className="font-bold">Bạn sẽ nhận được:</h3>
              <ul className="mt-5 space-y-4">
                {ticketBenefits.map((benefit) => (
                  <li className="flex gap-3 text-sm leading-6" key={benefit}>
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" /></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t pt-6">
                <p className="text-sm text-muted-foreground">Số tiền cần thanh toán</p>
                <div className="mt-1"><strong className="text-5xl font-black text-primary">50.000đ</strong></div>
                <p className="mt-3 text-sm font-semibold">Nội dung: Họ tên + Số điện thoại</p>
              </div>
            </div>
            <div className="text-center">
              <QrCode className="mx-auto mb-3 size-7 text-primary" aria-hidden="true" />
              <img src="/images/qr-vietcombank-duy-hung.jpeg" alt="Mã QR Vietcombank thanh toán cho Đỗ Duy Hưng" className="mx-auto w-full max-w-72 rounded-lg border" />
              <p className="mt-3 text-sm font-bold">Vietcombank • ĐỖ DUY HƯNG</p>
              <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-left text-xs font-medium leading-5 text-amber-950">
                QR gốc đang hiển thị 199.000đ. Trước khi xác nhận, vui lòng kiểm tra và điều chỉnh số tiền thành <strong>50.000đ</strong>.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-9 rounded-xl border bg-card p-7 text-center shadow-sm">
          <MessageCircle className="mx-auto size-9 text-primary" />
          <h2 className="mt-3 text-xl font-black">Liên hệ xác nhận qua Zalo</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Sau khi chuyển khoản, hãy gửi ảnh biên lai kèm họ tên và số điện thoại qua Zalo để được xác nhận và nhận thông tin tham gia.</p>
          <a href="https://zalo.me/09184782687" target="_blank" rel="noreferrer" className="cta-button mt-6">Liên hệ Zalo: 0918 478 2687</a>
        </section>
      </div>
    </main>
  );
}
