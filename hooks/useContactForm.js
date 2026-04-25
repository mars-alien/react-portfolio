"use client";
import { useState } from "react";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

/**
 * useContactForm — manages contact form state and mailto submission.
 * @param {string} recipientEmail — email address to send to
 * @returns form state, field setter, submit handler, and sent flag
 */
export function useContactForm(recipientEmail) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body    = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    );
    window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`);
    setForm(INITIAL_FORM);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return { form, setField, submit, sent };
}
