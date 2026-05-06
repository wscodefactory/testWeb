import { companyProfile } from "../../constants/company";

const profileItems = [
  ["회사명", companyProfile.koreanName],
  ["소재지", companyProfile.location],
  ["사업분야", "MES/ERP, 스마트팩토리 DX, AI 키오스크"],
  ["개발방식", "로우코드(Low-code) 기반"],
];

export function AboutOverviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <article>
          <h2 className="mb-3 text-2xl font-bold tracking-tight">우리의 미션</h2>
          <p className="leading-7 text-slate-600 dark:text-slate-300">
            로우코드 기반 개발 역량을 바탕으로 충주 및 충청권 제조업의 디지털 전환을 가속화하고,
            제조 현장의 생산성과 효율을 혁신합니다.
          </p>
        </article>

        <article>
          <h2 className="mb-3 text-2xl font-bold tracking-tight">회사 정보</h2>
          <dl className="space-y-2 text-slate-600 dark:text-slate-300">
            {profileItems.map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <dt className="min-w-20 font-medium text-slate-900 dark:text-slate-100">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
