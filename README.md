# SolucioneMos Company Website

React + Vite 기반 기업 웹사이트 프로젝트입니다.

## 구조

```txt
src/
  app/
    components/
      pages/        # 라우팅 단위 페이지
      ui/           # 공통 UI 컴포넌트
    constants/      # 회사 정보, 네비게이션 데이터
    layout/         # 공통 레이아웃
    sections/       # 페이지별 섹션 컴포넌트
    types/          # 공통 타입
```

## 주요 정리 사항

- 페이지 내부 섹션을 컴포넌트 단위로 분리
- 회사 정보와 네비게이션 데이터를 constants로 분리
- Vite 설정에서 불필요한 커스텀 asset resolver 제거
- 사용하지 않는 export 산출물, 안내 문서, 임시 asset 폴더 제거
- `package.json` 프로젝트명 정리

## 실행 방법

```bash
npm install
npm run dev
```
