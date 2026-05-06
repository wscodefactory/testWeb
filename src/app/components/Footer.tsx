import { companyProfile } from "../constants/company";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10 text-slate-600 dark:text-slate-300">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="mb-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {companyProfile.koreanName}
            </h2>
            <p>{companyProfile.summary}</p>
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">주소</h2>
            <p>{companyProfile.location}</p>
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">연락처</h2>
            <p>{companyProfile.email}</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">© 2026 {companyProfile.englishName}. All rights reserved.</div>
      </div>
    </footer>
  );
}
