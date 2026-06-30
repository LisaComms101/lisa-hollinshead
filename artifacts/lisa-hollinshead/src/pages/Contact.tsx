import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const enquiryReasons = [
  "Journalism / commission",
  "Speaking / podcast",
  "Media commentary",
  "Brand / PR enquiry",
  "General enquiry",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.reason) e.reason = "Please select a reason.";
    if (!form.message.trim()) e.message = "Please include a message.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const field = "flex flex-col gap-2";
  const label = "text-xs uppercase tracking-[0.2em] text-[hsl(35,8%,45%)] font-sans";
  const input = "px-5 py-4 bg-transparent border border-[hsl(40,20%,82%)] text-[hsl(30,3%,17%)] placeholder:text-[hsl(35,8%,65%)] text-sm focus:outline-none focus:border-[hsl(30,3%,17%)] transition-colors font-sans";
  const errorCls = "text-xs text-[hsl(0,60%,55%)] font-sans mt-1";

  return (
    <>
      <SEO
        title="Contact | Lisa Hollinshead"
        description="Get in touch with Lisa Hollinshead for journalism commissions, speaking engagements, podcast appearances, media commentary or brand enquiries."
      />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-24 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-tight"
          >
            Contact<br />Lisa
          </motion.h1>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-20 pb-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-20">

          {/* SIDEBAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-2xl text-[hsl(30,3%,17%)] mb-4">Let's talk</h2>
              <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light text-sm">
                Lisa welcomes enquiries from editors, producers, event organisers, brand partners and anyone with a story worth telling.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(35,8%,55%)] font-sans">Email</p>
              <a href="mailto:hello@lisahollinshead.com" className="inline-flex items-center gap-2 text-[hsl(30,3%,17%)] hover:text-[hsl(0,30%,60%)] transition-colors font-serif text-lg">
                <Mail size={16} />
                hello@lisahollinshead.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(35,8%,55%)] font-sans mb-5">Lisa is open to:</p>
              <div className="space-y-3">
                {["Journalism commissions", "Speaking & panels", "Podcast appearances", "Media commentary", "Brand partnerships", "PR & communications work"].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[hsl(35,8%,45%)] font-light">
                    <div className="w-1 h-1 rounded-full bg-[hsl(0,30%,65%)] mt-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center"
              >
                <h2 className="font-serif text-4xl text-[hsl(30,3%,17%)] mb-4">Thank you, {form.name.split(" ")[0]}.</h2>
                <p className="text-[hsl(35,8%,45%)] font-light">Lisa will be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp} className={field}>
                    <label htmlFor="name" className={label}>Name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className={input}
                    />
                    {errors.name && <p className={errorCls}>{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp} className={field}>
                    <label htmlFor="email" className={label}>Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={input}
                    />
                    {errors.email && <p className={errorCls}>{errors.email}</p>}
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className={field}>
                  <label htmlFor="reason" className={label}>Reason for Enquiry</label>
                  <select
                    id="reason"
                    value={form.reason}
                    onChange={e => setForm({ ...form, reason: e.target.value })}
                    className={`${input} appearance-none cursor-pointer bg-[hsl(45,30%,97%)]`}
                  >
                    <option value="">Select a reason…</option>
                    {enquiryReasons.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  {errors.reason && <p className={errorCls}>{errors.reason}</p>}
                </motion.div>

                <motion.div variants={fadeUp} className={field}>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea
                    id="message"
                    rows={7}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell Lisa a little about what you have in mind…"
                    className={`${input} resize-none`}
                  />
                  {errors.message && <p className={errorCls}>{errors.message}</p>}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-xs uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors duration-300 font-sans"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
