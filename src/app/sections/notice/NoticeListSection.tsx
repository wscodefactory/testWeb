import { Badge } from "../../components/ui/badge";

const notices = [
  { id: 1, tag: "공지", title: "솔루시오네모스 공식 홈페이지 오픈 안내", date: "2026-05-01" },
  { id: 2, tag: "사업", title: "충주 제조업체 대상 스마트팩토리 DX 컨설팅 시작", date: "2026-04-20" },
  { id: 3, tag: "제품", title: "신규 산업용 AI 키오스크 v2.0 출시", date: "2026-03-15" },
  { id: 4, tag: "채용", title: "로우코드 개발자 상시 채용", date: "2026-02-10" },
];

export function NoticeListSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <ul className="divide-y rounded-lg border bg-white dark:bg-slate-900">
        {notices.map((notice) => (
          <li
            key={notice.id}
            className="flex flex-col gap-3 px-6 py-4 transition hover:bg-slate-50 dark:hover:bg-slate-800 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{notice.tag}</Badge>
              <span>{notice.title}</span>
            </div>
            <time className="text-slate-500 dark:text-slate-400">{notice.date}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
