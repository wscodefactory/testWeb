import { Cpu, Factory, Sparkles } from "lucide-react";

import { SectionHeader } from "../../components/SectionHeader";
import { Card, CardContent } from "../../components/ui/card";

const coreBusinesses = [
  { icon: Cpu, title: "산업용 AI 키오스크", description: "현장에 최적화된 AI 키오스크" },
  { icon: Factory, title: "MES / ERP", description: "제조업 맞춤형 시스템 개발" },
  { icon: Sparkles, title: "로우코드 개발", description: "빠르고 유연한 솔루션 구축" },
];

export function CoreBusinessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <SectionHeader
          align="center"
          title="핵심 사업"
          description="제조업 DX를 위한 통합 솔루션"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {coreBusinesses.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardContent className="p-6">
              <Icon className="mb-3 h-8 w-8 text-emerald-500" />
              <h3 className="mb-1 font-semibold tracking-tight">{title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
