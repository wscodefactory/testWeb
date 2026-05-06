import { PageHero } from "../PageHero";
import { NoticeListSection } from "../../sections/notice/NoticeListSection";

export function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="공지사항"
        description="회사의 새 소식과 공지를 확인하세요."
      />
      <NoticeListSection />
    </>
  );
}
