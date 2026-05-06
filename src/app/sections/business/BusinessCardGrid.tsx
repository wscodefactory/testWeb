import { Bot, Boxes, Code2, Factory } from "lucide-react";

import { Card, CardContent } from "../../components/ui/card";

const businessItems = [
  {
    icon: Bot,
    title: "산업용 AI 키오스크",
    description:
      "제조 현장에 특화된 AI 키오스크 설계·개발·공급. 작업 지시, 품질 점검, 데이터 수집을 통합 지원합니다.",
  },
  {
    icon: Factory,
    title: "MES (생산관리시스템)",
    description:
      "공정/설비/품질 데이터를 실시간으로 수집·분석해 생산성을 극대화하는 맞춤형 MES 솔루션.",
  },
  {
    icon: Boxes,
    title: "ERP (전사적자원관리)",
    description: "영업·구매·재고·회계를 통합 관리하는 제조업 맞춤 ERP 시스템 구축.",
  },
  {
    icon: Code2,
    title: "로우코드 개발",
    description: "빠른 구축과 유연한 커스터마이즈가 가능한 로우코드 플랫폼 기반 솔루션.",
  },
];

export function BusinessCardGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {businessItems.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardContent className="p-6">
              <Icon className="mb-3 h-8 w-8 text-emerald-500" />
              <h2 className="mb-2 text-xl font-semibold tracking-tight">{title}</h2>
              <p className="text-slate-600 dark:text-slate-300">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
