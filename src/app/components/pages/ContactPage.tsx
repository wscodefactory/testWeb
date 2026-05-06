import { PageHero } from "../PageHero";
import { ContactSection } from "../../sections/contact/ContactSection";

export function ContactPage() {
  return (
    <>
      <PageHero
        variant="green"
        eyebrow="Contact"
        title="문의"
        description="프로젝트 문의 및 도입 상담을 남겨주세요."
      />
      <ContactSection />
    </>
  );
}
