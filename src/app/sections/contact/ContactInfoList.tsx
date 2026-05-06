import { Mail, MapPin, Phone } from "lucide-react";

import { companyProfile } from "../../constants/company";

const contacts = [
  { icon: MapPin, label: "주소", value: companyProfile.location },
  { icon: Mail, label: "이메일", value: companyProfile.email },
  { icon: Phone, label: "전화", value: companyProfile.phone },
];

export function ContactInfoList() {
  return (
    <div className="space-y-6">
      {contacts.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3">
          <Icon className="mt-1 h-5 w-5 text-emerald-500" />
          <div>
            <h2 className="font-semibold tracking-tight">{label}</h2>
            <p className="text-slate-600 dark:text-slate-300">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
