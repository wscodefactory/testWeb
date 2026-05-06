import { ContactForm } from "./ContactForm";
import { ContactInfoList } from "./ContactInfoList";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <ContactInfoList />
        <ContactForm />
      </div>
    </section>
  );
}
