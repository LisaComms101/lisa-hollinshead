import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const services = [
  {
    title: "Publicity & Earned Media",
    body: "Campaign strategy, media relations, launches, talent publicity, press-office support and culturally relevant moments.",
  },
  {
    title: "Entertainment, Talent & Broadcast",
    body: "Television publicity, talent positioning, media days, interview strategy, programme launches and broadcast campaigns.",
  },
  {
    title: "Founder & Brand Storytelling",
    body: "Founder profiling, thought leadership, positioning and narratives that create authority beyond a single announcement.",
  },
  {
    title: "Strategy & Senior Counsel",
    body: "Communications strategy, creative counsel, spokesperson positioning, workshops and senior advisory support.",
  },
];

const selectedWork = [
  {
    title: "SBS",
    context: "Including Who Do You Think You Are?, Sean Micallef’s Origin Odyssey, Cup Fever!, FIFA and Plating Locally.",
    role: "Entertainment, sport and factual publicity strategy and execution.",
  },
  {
    title: "Culture Kings x San Francisco 49ers",
    context: "Australian activation for the iconic sports and streetwear partnership.",
    role: "Earned-media strategy and campaign publicity.",
  },
  {
    title: "The Fourth Wall",
    context: "A new performing-arts publication.",
    role: "Launch positioning, founder profiling, media strategy and publicity.",
  },
  {
    title: "FINNS Bali",
    context: "Recent work for FINNS Bali.",
    role: "Publicity and strategic communications support through Comms 101.",
  },
  {
    title: "Pour Sport",
    context: "Recent work for Pour Sport.",
    role: "Publicity and strategic communications support through Comms 101.",
  },
];

export default function Publicity() {
  return (
    <>
      <SEO
        title="Publicity & Strategy | Lisa Hollinshead"
        description="Lisa Hollinshead brings more than 20 years across journalism, publicity, publishing and founder-led businesses to stories that deserve attention."
      />

      <section className="pt-40 pb-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,65%)] mb-5 font-sans">
            COMMS 101
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(45,30%,97%)] leading-tight max-w-4xl">
            Publicity built with newsroom judgement.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-[hsl(35,8%,65%)] max-w-2xl font-light leading-relaxed">
            Lisa Hollinshead brings more than 20 years across journalism, publicity, publishing and founder-led businesses to stories that deserve attention. Through Comms 101, she works with entertainment, sport, travel, cultural organisations, consumer brands and founders on strategic, editorially intelligent earned media.
          </motion.p>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(40,20%,85%)]">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-[hsl(45,30%,97%)] p-8 md:p-10 group hover:bg-[hsl(40,25%,95%)] transition-colors">
                <span className="text-xs text-[hsl(0,30%,60%)]">0{index + 1}</span>
                <h3 className="font-serif text-2xl mt-6 mb-4">{service.title}</h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{service.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans">
            Why Lisa
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl text-[hsl(30,3%,17%)] leading-relaxed italic"
          >
            Lisa understands how stories travel because she works on both sides of the media. She pitches journalists and is a journalist. She advises founders and is a founder. She creates campaigns and understands the editorial judgement that determines whether they earn attention.
          </motion.blockquote>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Selected Work</h2>
          </div>
          
          <div className="space-y-px bg-[hsl(40,20%,85%)]">
            {selectedWork.map((work, i) => (
              <motion.div
                key={work.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="bg-[hsl(45,30%,97%)] p-8 md:p-12 grid md:grid-cols-4 gap-8 group hover:bg-[hsl(40,25%,95%)] transition-colors"
              >
                <div className="md:col-span-1">
                  <h3 className="font-serif text-2xl text-[hsl(30,3%,17%)]">{work.title}</h3>
                </div>
                <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] mb-2">Context</p>
                    <p className="text-sm text-[hsl(35,8%,40%)] leading-relaxed font-light">{work.context}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] mb-2">Role</p>
                    <p className="text-sm text-[hsl(35,8%,40%)] leading-relaxed font-light">{work.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[hsl(30,3%,17%)] text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl text-[hsl(45,30%,97%)] mb-10">Have something worth talking about?</h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(35,8%,45%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors">
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}