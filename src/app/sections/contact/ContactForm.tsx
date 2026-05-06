import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { companyProfile } from "../../constants/company";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    const subject = `[문의] ${name}님의 문의`;
    const body = `이름: ${name}\n이메일: ${email}\n\n${message}`;
    const mailto = `mailto:${companyProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    toast.success("메일 앱이 열렸습니다. 전송을 완료해주세요.");
  };

  return (
    <form className="space-y-4 rounded-lg border bg-white p-6 dark:bg-slate-900" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="이름을 입력하세요" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">문의 내용</Label>
        <Textarea
          id="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="내용을 입력하세요"
        />
      </div>

      <Button type="submit" className="w-full">
        보내기
      </Button>
    </form>
  );
}
