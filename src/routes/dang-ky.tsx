import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import qrAsset from "@/assets/qr-135k.jpg.asset.json";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({
    meta: [
      { title: "Đăng Ký Nhận Vé | KOL AI Workshop" },
      { name: "description", content: "Đăng ký vé tham gia huấn luyện cấp tốc KOL AI cùng Phong Menly." },
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
    <main className="min-h-screen bg-soft px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> Quay lại trang chủ
        </Link>
        <header className="mt-8 text-center">
          <div className="eyebrow">HUẤN LUYỆN CẤP TỐC KOL AI</div>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl">Đăng Ký Nhận Vé</h1>
          <p className="mt-3 text-lg font-semibold text-primary">Huấn luyện cấp tốc KOL AI – KHAI LỘC</p>
        </header>

        <section className="mt-12">
          <h2 className="text-center text-2xl font-black">Hướng dẫn đăng ký</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Đăng ký nhận vé và chuyển khoản theo QR bên dưới", "Kết nối Zalo: 0978 076 936 để xác nhận", "Gửi bill đã chuyển khoản và vào nhóm nhận link Zoom"].map((step, i) => (
              <div className="rounded-lg border bg-card p-5 text-center shadow-sm" key={step}>
                <span className="mx-auto grid size-9 place-items-center rounded-full bg-primary font-black text-primary-foreground">{i + 1}</span>
                <p className="mt-3 text-sm font-medium leading-6">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-xl border bg-card shadow-lg">
          <div className="border-b bg-secondary px-6 py-5 text-center">
            <span className="text-xs font-bold uppercase text-primary">Vé VIP Giới Thiệu</span>
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
                <p className="text-sm text-muted-foreground">Số tiền chuyển khoản</p>
                <div className="mt-1 flex items-end gap-3"><strong className="text-5xl font-black text-primary">5$</strong><span className="pb-1 text-muted-foreground">~ 135K VNĐ</span></div>
              </div>
            </div>
            <div className="text-center">
              <img src={qrAsset.url} alt="QR thanh toán 5 đô la" className="mx-auto w-full max-w-64 rounded-lg border" />
              <p className="mt-3 text-xs leading-5 text-muted-foreground">Quét mã QR để chuyển khoản<br />Techcombank • LE DANG PHUONG</p>
            </div>
          </div>
        </section>

        <section className="mt-9 rounded-xl border bg-card p-7 text-center shadow-sm">
          <MessageCircle className="mx-auto size-9 text-primary" />
          <h2 className="mt-3 text-xl font-black">Liên hệ xác nhận qua Zalo</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Sau khi chuyển khoản, liên hệ Zalo để xác nhận đăng ký và nhận link Zoom</p>
          <a href="https://zalo.me/0978076936" target="_blank" rel="noreferrer" className="cta-button mt-6">Liên hệ Zalo: 0978 076 936</a>
        </section>
      </div>
    </main>
  );
}