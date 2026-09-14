import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const services = [
  {
    title: "Publicity & Earned Media",
    body: "Campaign strategy, media relations, launches, talent publicity and culturally relevant moments through Comms 101.",
  },
  {
    title: "Editorial & Storytelling",
    body: "Features, first-person essays, branded editorial, founder stories, interviews and copy that sounds like a human wrote it.",
  },
  {
    title: "Strategy & Advisory",
    body: "Positioning, communications strategy, creative counsel, workshops and senior support for founders, brands and teams.",
  },
];

const proof = [
  "SBS",
  "FIFA World Cup",
  "Culture Kings x San Francisco 49ers",
  "The Fourth Wall",
  "FINNS Bali",
  "Pour Sport",
];

const ventures = [
  {
    title: "Social101",
    label: "Publishing",
    body: "An independent culture, travel and lifestyle publication founded in 2010, with a sixteen-year archive and an enduring curiosity about what is worth doing, seeing and talking about.",
    href: "https://social101.com",
  },
  {
    title: "OneAnother",
    label: "Community Technology",
    body: "The technology layer behind real-world community, helping people find their people and community builders spend less time administering connection and more time creating it.",
    href: "https://oneanother.community",
  },
];

export default function Brands() {
  return (
    <>
      <SEO
        title="Work With Lisa Hollinshead | Publicity, Editorial & Strategy"
        description="Work with Lisa Hollinshead across publicity and earned media, editorial storytelling, communications strategy, speaking and partnerships."
      />

      <section className="pt-40 pb-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,65%)] mb-5 font-sans">
            Work With Lisa
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(45,30%,97%)] leading-tight max-w-4xl">
            You do not need more content.<br />You need a story worth telling.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-[hsl(35,8%,65%)] max-w-2xl font-light leading-relaxed">
            Lisa brings more than 20 years across journalism, publicity, publishing and founder-led businesses to ideas that deserve attention.
          </motion.p>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5">Comms 101</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Publicity and earned media by Lisa Hollinshead</h2>
          <p className="text-[hsl(35,8%,40%)] leading-relaxed font-light max-w-2xl mb-16">
            Strategic, editorially intelligent campaigns built to earn attention, create cultural relevance and give good stories somewhere to travel.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-[hsl(45,30%,97%)] p-8 md:p-10">
                <span className="text-xs text-[hsl(0,30%,60%)]">0{index + 1}</span>
                <h3 className="font-serif text-2xl mt-6 mb-4">{service.title}</h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{service.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-[hsl(40,20%,85%)]">
            <p className="text-xs uppercase tracking-[0.25em] text-[hsl(35,8%,55%)] mb-6">Selected Recent Work</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {proof.map(item => <span key={item} className="font-serif text-xl text-[hsl(30,3%,25%)]">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5">Founder</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">Things Lisa has built</h2>
          <div className="grid md:grid-cols-2 gap-px bg-[hsl(40,20%,85%)]">
            {ventures.map((venture) => (
              <a key={venture.title} href={venture.href} target="_blank" rel="noreferrer" className="bg-[hsl(45,30%,97%)] p-10 md:p-14 group">
                <p className="text-xs uppercase tracking-[0.2em] text-[hsl(0,30%,60%)] mb-5">{venture.label}</p>
                <h3 className="font-serif text-4xl mb-6 group-hover:text-[hsl(0,30%,50%)] transition-colors">{venture.title}</h3>
                <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light mb-8">{venture.body}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest">Visit {venture.title} <ArrowRight size={13} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[hsl(30,3%,17%)] text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[hsl(45,30%,97%)] mb-6">Have something interesting in the works?</h2>
          <p className="text-[hsl(35,8%,65%)] font-light mb-10">Tell Lisa what you are building and where you want the story to go.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(35,8%,45%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors">
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}