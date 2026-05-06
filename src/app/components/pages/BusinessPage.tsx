import { PageHero } from "../PageHero";
import { BusinessCardGrid } from "../../sections/business/BusinessCardGrid";

export function BusinessPage() {
  return (
    <>
      <PageHero
        variant="green"
        eyebrow="Business"
        title="주요사업"
        description="제조업 디지털 전환을 위한 통합 솔루션을 제공합니다."
      />
      <BusinessCardGrid />
    </>
  );
}
