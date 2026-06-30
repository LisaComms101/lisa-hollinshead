import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <>
      <SEO
        title="About Lisa Hollinshead | Journalist, Author & Communications Strategist"
        description="Lisa Hollinshead is a journalist, communications strategist and founder with more than 20 years' experience across media, PR, storytelling and brand building."
      />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-24 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-[0.95]"
          >
            Lisa<br />Hollinshead
          </motion.h1>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="aspect-[3/4] bg-[hsl(35,15%,88%)] relative overflow-hidden sticky top-32">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, hsl(0,25%,84%) 0%, hsl(35,20%,82%) 60%, hsl(45,25%,90%) 100%)",
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-lg italic text-[hsl(30,3%,28%)] leading-relaxed">
                  "Stories that matter — told with honesty, intelligence, and depth."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.p variants={fadeUp} className="font-serif text-2xl md:text-3xl text-[hsl(30,3%,20%)] leading-relaxed">
              Lisa Hollinshead is a journalist, communications strategist and founder with more than 20 years' experience across media, PR, storytelling and brand building.
            </motion.p>

            <motion.div variants={fadeUp} className="w-16 h-px bg-[hsl(0,30%,65%)]" />

            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed text-lg font-light">
              As the founder of Social101, Comms101 and One Another, Lisa has spent her career helping people, brands and communities tell stories that matter. Now, through her own writing and commentary, she explores the emotional, psychological and practical realities of modern womanhood.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed font-light">
              Her writing explores the territories that too often go unspoken — from ADHD, relationships and burnout to single motherhood, reinvention, wellbeing and the quiet power of finally feeling enough. Drawing on two decades of experience across journalism, PR, media production and community building, Lisa brings a rare combination of professional insight and personal honesty to every piece she writes.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed font-light">
              Lisa writes for audiences who are navigating the messy, meaningful middle of their lives — women who want to think more deeply, feel less alone, and find practical wisdom in the personal. Her voice is warm, intelligent, and unflinchingly honest.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/journalism" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors w-fit">
                Read Lisa's Work <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors w-fit">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KEY AREAS */}
      <section className="py-24 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl text-[hsl(30,3%,17%)] mb-12"
          >
            Areas of Expertise
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {[
              { title: "Journalism & Writing", body: "First-person journalism, feature writing, personal essays, commentary and editorial strategy across digital and print media." },
              { title: "Communications Strategy", body: "Brand storytelling, PR consultancy, media training and communications strategy for individuals and organisations." },
              { title: "Speaking & Thought Leadership", body: "Keynotes, panel discussions, podcast appearances and media commentary on modern womanhood, ADHD, wellbeing and identity." },
              { title: "Community Building", body: "Founder-led experience building digital communities and purpose-led platforms that connect, inspire and activate." },
              { title: "Brand & Media", body: "20+ years working with brands, media organisations and individuals to tell stories that build trust and create change." },
              { title: "Personal Growth", body: "Deeply personal and evidence-informed writing on ADHD, mental health, reinvention, relationships and the journey to self-acceptance." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-8 md:p-10"
              >
                <h3 className="font-serif text-xl text-[hsl(30,3%,17%)] mb-3">{item.title}</h3>
                <div className="w-8 h-px bg-[hsl(0,30%,65%)] mb-5" />
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-[hsl(45,30%,97%)] italic leading-tight"
          >
            "Helping people, brands and communities tell stories that matter — for more than twenty years."
          </motion.blockquote>
        </div>
      </section>
    </>
  );
}
