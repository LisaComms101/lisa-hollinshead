import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const topics = [
  "Modern Womanhood",
  "ADHD in Women",
  "Single Motherhood",
  "Reinvention & Identity",
  "Storytelling & Media",
  "Personal Branding",
  "PR & Communications",
  "Kindness & Community",
  "Burnout & Wellbeing",
  "The Changing Definition of Success",
];

const formats = [
  {
    title: "Media Commentary",
    description: "Expert perspective for television, radio, print and digital media on topics relating to modern womanhood, ADHD, mental health, parenting and wellbeing.",
  },
  {
    title: "Podcast Interviews",
    description: "In-depth, honest conversations that resonate deeply with audiences navigating the complexities of contemporary life.",
  },
  {
    title: "Panel Discussions",
    description: "Engaging panellist for conferences, events and festivals on themes of women in leadership, wellbeing, storytelling and identity.",
  },
  {
    title: "Keynote Speaking",
    description: "Compelling keynotes that blend personal narrative, psychological insight and practical wisdom for corporate and community audiences.",
  },
  {
    title: "Workshops & Events",
    description: "Intimate, interactive sessions on storytelling, personal branding, communications strategy and the art of authentic self-expression.",
  },
];

export default function Speaking() {
  return (
    <>
      <SEO
        title="Speaking & Commentary | Lisa Hollinshead"
        description="Lisa Hollinshead is available for media commentary, podcast interviews, panels and speaking on modern womanhood, ADHD, reinvention, storytelling and more."
      />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,65%)] mb-5 font-sans"
          >
            Speaking & Commentary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(45,30%,97%)] leading-tight"
          >
            Speak with<br />Lisa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-[hsl(35,8%,65%)] max-w-xl font-light"
          >
            Lisa is available for media commentary, podcast interviews, panels and speaking opportunities on modern womanhood, ADHD, single motherhood, reinvention, storytelling and the changing definition of success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(0,30%,65%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,55%)] transition-colors">
              Invite Lisa to Speak <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SPEAKING FORMATS */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">How Lisa Can Help</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Speaking Formats</motion.h2>
          </motion.div>

          <div className="space-y-px bg-[hsl(40,20%,85%)]">
            {formats.map((format, i) => (
              <motion.div
                key={format.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-8 md:p-12 grid md:grid-cols-3 gap-8 group hover:bg-[hsl(40,25%,95%)] transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs text-[hsl(0,30%,60%)] font-sans tabular-nums mt-1">0{i + 1}</span>
                  <h3 className="font-serif text-2xl text-[hsl(30,3%,17%)]">{format.title}</h3>
                </div>
                <p className="md:col-span-2 text-[hsl(35,8%,45%)] leading-relaxed font-light">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-28 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Topics</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[hsl(30,3%,17%)]">Areas of Conversation</motion.h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="px-6 py-3 border border-[hsl(40,20%,80%)] bg-[hsl(45,30%,97%)]"
              >
                <span className="font-serif text-lg text-[hsl(30,3%,25%)]">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 bg-[hsl(0,30%,73%)]/10 border-t border-b border-[hsl(0,30%,73%)]/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-[hsl(30,3%,17%)] italic leading-tight"
          >
            "Lisa brings rare personal honesty and professional depth to every conversation."
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)] mb-6">Ready to work with Lisa?</motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,45%)] leading-relaxed mb-10 font-light">
              Reach out to discuss availability, topics and how Lisa can bring depth and authenticity to your next event or media opportunity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors duration-300">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
