import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { articles, themes } from "@/data/content";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Journalism() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const filtered = activeTheme
    ? articles.filter((_, i) => i % themes.length === themes.findIndex(t => t.title === activeTheme))
    : articles;

  return (
    <>
      <SEO
        title="Journalism | Lisa Hollinshead"
        description="Read Lisa Hollinshead's journalism, including travel, first-person essays, motherhood, reinvention, profiles and culture."
      />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-24 bg-[hsl(45,30%,97%)] border-b border-[hsl(40,20%,85%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans"
          >
            Selected Writing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-tight"
          >
            Journalism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[hsl(35,8%,45%)] max-w-xl font-light"
          >
            Travel, first-person essays, profiles and stories about the lives we are actually living.
          </motion.p>
        </div>
      </section>

      {/* THEME FILTER */}
      <section className="py-8 border-b border-[hsl(40,20%,85%)] bg-[hsl(45,30%,97%)] sticky top-20 z-30 backdrop-blur-md bg-opacity-95">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] font-sans mr-2">Filter:</span>
            <button
              onClick={() => setActiveTheme(null)}
              className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors font-sans ${!activeTheme ? "border-[hsl(30,3%,17%)] bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)]" : "border-[hsl(40,20%,82%)] text-[hsl(35,8%,50%)] hover:border-[hsl(30,3%,17%)] hover:text-[hsl(30,3%,17%)]"}`}
            >
              All
            </button>
            {themes.map(t => (
              <button
                key={t.title}
                onClick={() => setActiveTheme(activeTheme === t.title ? null : t.title)}
                className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors font-sans ${activeTheme === t.title ? "border-[hsl(30,3%,17%)] bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)]" : "border-[hsl(40,20%,82%)] text-[hsl(35,8%,50%)] hover:border-[hsl(30,3%,17%)] hover:text-[hsl(30,3%,17%)]"}`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-20 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {filtered.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-8 md:p-10 group hover:bg-[hsl(0,30%,73%)]/5 transition-colors duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[hsl(0,30%,60%)] font-sans">{article.publication}</span>
                  <span className="text-xs text-[hsl(35,8%,60%)] font-sans">{article.date}</span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-[hsl(30,3%,17%)] leading-snug mb-4 group-hover:text-[hsl(0,30%,50%)] transition-colors flex-1">
                  {article.headline}
                </h2>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed mb-6 font-light">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] group-hover:text-[hsl(30,3%,17%)] transition-colors mt-auto">
                  Read Article <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-xl italic text-[hsl(35,8%,55%)]">More articles coming soon.</p>
            <p className="text-sm text-[hsl(35,8%,60%)] mt-2 font-light">Join the newsletter to be the first to read new work.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
