import { useState } from "react";

export default function Visit() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.name.trim()) setSent(true);
  };

  return (
    <section className="two">
      <div className="stack">
        <h2>Come by</h2>
        <dl>
          <dt>Tue–Sat</dt><dd>10:00 – 20:00</dd>
          <dt>Sun</dt><dd>12:00 – 18:00</dd>
          <dt>Mon</dt><dd>Closed</dd>
        </dl>
      </div>
      <div>
        {sent ? (
          <p className="ok">Thanks, {form.name}. We'll keep a copy aside for you.</p>
        ) : (
          <form onSubmit={submit}>
            <label htmlFor="name">
              Your name
              <input id="name" name="name" value={form.name} onChange={update} required />
            </label>
            <label htmlFor="message">
              Book request
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={update}
                placeholder="A title you'd like us to order in"
              />
            </label>
            <button className="cta" type="submit">Send request</button>
          </form>
        )}
      </div>
    </section>
  );
}
