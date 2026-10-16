"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/cx";

const fieldClass =
  "w-full rounded-md border border-border bg-bg-subtle px-4 py-3 text-[15px] outline-none transition focus:border-brand focus:bg-white focus:shadow-ring aria-invalid:border-error";

function Field({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}

export function QuoteForm() {
  const [done, setDone] = useState(false);
  const [invalid, setInvalid] = useState({ name: false, contact: false });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const next = { name: name.length === 0, contact: contact.length === 0 };
    setInvalid(next);
    if (next.name || next.contact) return;
    setDone(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl bg-white p-[clamp(1.5rem,3vw,2.125rem)] text-copy shadow-form"
    >
      <div className="grid grid-cols-1 gap-4 min-[720px]:grid-cols-2">
        <Field id="f-name" label="Name">
          <input
            id="f-name"
            name="name"
            type="text"
            required
            placeholder="—"
            autoComplete="name"
            aria-invalid={invalid.name || undefined}
            className={fieldClass}
          />
        </Field>
        <Field id="f-company" label="Company">
          <input
            id="f-company"
            name="company"
            type="text"
            placeholder="—"
            autoComplete="organization"
            className={fieldClass}
          />
        </Field>
        <Field id="f-contact" label="Email or phone" className="min-[720px]:col-span-2">
          <input
            id="f-contact"
            name="contact"
            type="text"
            required
            placeholder="name@company.com / +7 ___ ___ __ __"
            autoComplete="email"
            aria-invalid={invalid.contact || undefined}
            className={fieldClass}
          />
        </Field>
        <Field id="f-category" label="Product category">
          <input id="f-category" name="category" type="text" placeholder="—" className={fieldClass} />
        </Field>
        <Field id="f-volume" label="Expected volume">
          <input id="f-volume" name="volume" type="text" placeholder="—" className={fieldClass} />
        </Field>
        <Field id="f-comment" label="Comment" className="min-[720px]:col-span-2">
          <textarea id="f-comment" name="comment" className={cx(fieldClass, "min-h-26 resize-y")} />
        </Field>
        <Button type="submit" variant="dark" disabled={done} className="w-full min-[720px]:col-span-2">
          Get a consultation
        </Button>
      </div>
      {done ? (
        <p className="mt-3.5 text-center text-[13.4px] font-semibold text-brand-deep">
          Thank you! Your request has been sent — a manager will contact you.
        </p>
      ) : null}
    </form>
  );
}
