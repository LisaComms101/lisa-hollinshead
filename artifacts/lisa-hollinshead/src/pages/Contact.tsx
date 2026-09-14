import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";

const enquiryTypes = [
  "Journalism commissions",
  "Publicity and communications",
  "Speaking, panels and MC roles",
  "Media commentary and podcast appearances",
  "Brand and travel partnerships",
  "OneAnother and podcast partnerships",
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Lisa Hollinshead | Journalism, Publicity & Speaking"
        description="Contact Lisa Hollinshead about journalism commissions, publicity, speaking, media commentary, partnerships and creative projects."
      />

      <section className="pt-40 pb-24 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans">
            Start a Conversation
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-tight">
            Have something<br />interesting in the works?
          </motion.h1>
        </div>
      </section>

      <section className="py-20 pb-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[hsl(30,3%,20%)] mb-8">
              I would love to hear about the story, brief, assignment or beautifully ambitious idea you are building.
            </p>
            <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light mb-10">
              Email is the quickest way to reach me. Tell me what you have in mind, your timing and the best way to get back to you.
            </p>
            <a href="mailto:hello@lisahollinshead.com?subject=Website%20enquiry" className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors">
              <Mail size={16} /> Email Lisa <ArrowRight size={14} />
            </a>
            <p className="mt-5 font-serif text-xl">hello@lisahollinshead.com</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="border-t border-[hsl(40,20%,85%)]">
            {enquiryTypes.map((item, index) => (
              <div key={item} className="flex gap-6 py-6 border-b border-[hsl(40,20%,85%)]">
                <span className="text-xs text-[hsl(0,30%,60%)] font-sans tabular-nums">0{index + 1}</span>
                <span className="font-serif text-xl text-[hsl(30,3%,17%)]">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}