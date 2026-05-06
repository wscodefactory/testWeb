import { PageHero } from "../PageHero";
import { AboutOverviewSection } from "../../sections/about/AboutOverviewSection";

export function AboutPage() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="About"
        title="회사소개"
        description="솔루시오네모스는 충청북도 충주시에 위치한 MES/ERP 개발 및 스마트팩토리 DX 솔루션 전문 소프트웨어 기업입니다."
      />
      <AboutOverviewSection />
    </>
  );
}
