"use client";

import { FormEvent, useRef, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const validationRun = useRef(0);
  const today = new Date().toISOString().slice(0, 10);

  function resetFeedback() {
    validationRun.current += 1;
    if (state !== "idle") {
      setState("idle");
      setMessage("");
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const arrival = String(form.get("arrival"));
    const departure = String(form.get("departure"));
    if (arrival < today) {
      setState("error");
      setMessage("Arrival must be today or later. Your details have not been sent.");
      return;
    }
    if (arrival && departure && departure <= arrival) {
      setState("error");
      setMessage("Departure must be after arrival. Your details have not been sent.");
      return;
    }
    setState("loading");
    setMessage("Checking your details…");
    const run = ++validationRun.current;
    window.setTimeout(() => {
      if (validationRun.current !== run) return;
      setState("success");
      setMessage("Your details are valid. This development preview does not transmit inquiries or reserve a room. Copy the details before leaving this page.");
    }, 650);
  }

  return (
    <form className="inquiry-form" onSubmit={submit} onChange={resetFeedback} noValidate={false}>
      <div className="field-pair">
        <label>Arrival<input name="arrival" type="date" required /></label>
        <label>Departure<input name="departure" type="date" required /></label>
      </div>
      <div className="field-pair">
        <label>Adults<select name="adults" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option></select></label>
        <label>Children<select name="children" defaultValue="0"><option>0</option><option>1</option><option>2</option></select></label>
      </div>
      <label>Your name<input name="name" autoComplete="name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>What should we know?<textarea name="message" rows={5} placeholder="Room preference, food needs, arrival questions…" /></label>
      <label className="check-field"><input type="checkbox" required /> <span>I understand this is a non-transmitting development preview.</span></label>
      <button className="submit-button" type="submit" disabled={state === "loading"}>{state === "loading" ? "Checking…" : "Check inquiry"}</button>
      <p className={`form-status ${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
