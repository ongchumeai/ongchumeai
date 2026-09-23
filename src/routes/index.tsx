import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Gift,
  ImageIcon,
  Sparkles,
  Store,
  Wrench,
  DollarSign,
} from "lucide-react";
import heroAsset from "@/assets/nuoi-agent-cay-tien.png.asset.json";
import speakerAsset from "@/assets/phong-menly.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuôi Agent Cày Thay Mình 24/7 | KOL AI Workshop" },
      {
        name: "description",
        content:
          "Huấn luyện cấp tốc cùng Phong Menly: xây đội AI Agent, phát triển skill và ứng dụng AI vào công việc.",
      },
      { property: "og:title", content: "Nuôi Agent Cày Thay Mình 24/7" },
      {
        property: "og:description",
        content: "Từ skill tiến hóa thành một Agent sống thực sự cùng KOL AI Workshop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const benefits = [
  {
    icon: ImageIcon,
    title: "1 Đội 3 AI agent làm việc thay mình tích hợp sẵn Skill",
    description: "Nhận ngay đội 3 AI agent làm việc thay bạn, tích hợp sẵn skill hoàn chỉnh",
  },
  {
    icon: DollarSign,
    title: "Chia sẻ những cách xây kênh bằng subagent khác biệt",
    description: "Hé lộ cách xây kênh bằng subagent khác biệt mà ít ai biết đến",
  },
  {
    icon: Wrench,
    title: "Hướng dẫn tự biết build app ứng dụng công việc của mình không phụ thuộc",
    description: "Tự tay xây dựng app AI theo nhu cầu công việc riêng, không cần phụ thuộc vào bất kỳ ai",
  },
  {
    icon: Store,
    title: "Hướng dẫn thương mại skill",
    description: "Biết cách đóng gói, bán và vận hành skill AI thành sản phẩm thương mại",
  },
  {
    icon: Gift,
    title: "Quà tặng đặc biệt",
    description: "Nhận quà tặng độc quyền khi tham gia huấn luyện cấp tốc",
  },
  {
    icon: Sparkles,
    title: "Ý tưởng kiếm tiền",
    description: "Khám phá những ý tưởng điên rồ để kiếm tiền với AI",
  },
];

function CtaLink({ label = "ĐĂNG KÝ NGAY" }: { label?: string }) {
  return (
    <Link to="/dang-ky" className="cta-button">
      {label}
    </Link>
  );
}

function HomePage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="hero-wash px-5 pb-16 pt-11 sm:pt-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="eyebrow"><span aria-hidden="true">•</span> HUẤN LUYỆN CẤP TỐC 1 LẦN DUY NHẤT</div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            NUÔI AGENT CÀY THAY MÌNH <span className="text-primary">24/7</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-muted-foreground sm:text-xl">
            Từ skill tiến hóa thành 1 Agent sống thực sự
          </p>
          <div className="event-pill mt-6">
            <CalendarDays className="size-5 text-primary" aria-hidden="true" />
            <span>20:00 ngày 21/9</span>
          </div>
          <img
            src={heroAsset.url}
            alt="Nuôi AI Agent cày tiền cùng KOL AI"
            className="hero-image mt-7 w-full"
          />
          <p className="mt-7 text-sm text-muted-foreground sm:text-base">
            <span aria-hidden="true">👉</span> Bạn muốn đứng ngoài cuộc chơi AI hay bắt đầu <strong className="text-primary">ngay hôm nay?</strong>
          </p>
          <div className="mt-5"><CtaLink label="NHẬN VÉ & MIỄN PHÍ TÀI NGUYÊN" /></div>
          <p className="mt-3 text-xs text-muted-foreground">Tham gia nhóm Zalo để giữ chỗ và nhận quà độc quyền</p>
          <div className="closed-notice mt-8">
            <strong>🚫 Đã hết thời gian đăng ký!</strong>
            <span>Cổng đăng ký đã đóng.</span>
          </div>
        </div>
      </section>

      <section className="section-soft px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <header className="text-center">
            <h2 className="section-title">Bạn sẽ nhận được gì?</h2>
            <p className="section-subtitle">Nếu chỉ cần một ý tưởng để mở ra cơ hội mới, bạn có sẵn sàng nắm lấy nó không?</p>
          </header>
          <div className="mt-12 space-y-4">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <article className="benefit-row" key={title}>
                <span className="benefit-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="benefit-icon"><Icon className="size-5" aria-hidden="true" /></span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold sm:text-lg">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{description}</p>
                </div>
                <ArrowUpRight className="hidden size-4 shrink-0 text-primary sm:block" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-title text-center">Diễn giả Huấn luyện cấp tốc</h2>
          <article className="speaker-panel mt-11">
            <div className="relative shrink-0">
              <img src={speakerAsset.url} alt="Phong Menly" className="size-32 rounded-full object-cover sm:size-36" />
              <span className="speaker-label">KOL AI</span>
            </div>
            <div>
              <h3 className="text-3xl font-black">Phong Menly</h3>
              <p className="mt-1 font-semibold text-primary">KOL AI &amp; Vibe Coding</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['AI Expert', 'Content Creator', 'Vibe Coding'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                Người tiên phong trong lĩnh vực KOL AI tại Việt Nam, chia sẻ kiến thức và kinh nghiệm thực tế về cách kiếm tiền với AI một cách hiệu quả.
              </p>
            </div>
          </article>

          <header className="mt-24 text-center">
            <h2 className="text-2xl font-black sm:text-3xl">🎬 Xem trước nội dung từ Phong Menly</h2>
            <p className="mt-2 text-muted-foreground">Video chia sẻ thực tế giúp bạn hiểu rõ hơn về hành trình KOL AI</p>
          </header>
          <div className="video-shell mt-9">
            <iframe
              src="https://www.youtube.com/embed/K2H9p7IGhdo"
              title="KOL AI Marketing - Phong Menly"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video w-full"
            />
          </div>
          <div className="mt-9 text-center"><CtaLink /></div>
        </div>
      </section>

      <section className="community-band px-5 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-title">Nơi bạn tìm thấy cho mình một cộng đồng</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Cùng hàng trăm KOL, Affiliate và nhà sáng tạo đang xây dựng đế chế AI của riêng mình.
          </p>
          <div className="mt-8"><CtaLink /></div>
        </div>
      </section>
    </main>
  );
}