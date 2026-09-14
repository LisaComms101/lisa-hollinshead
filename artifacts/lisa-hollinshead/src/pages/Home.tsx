import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { articles, themes, brands } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const publications = ["Mamamia", "9Honey", "SBS", "Kidspot", "Daily Mail", "Social101"];

export default function Home() {
  return (
    <>
      <SEO
        title="Lisa Hollinshead | Journalist, Author, Speaker & Communications Strategist"
        description="Lisa Hollinshead writes thoughtful first-person journalism exploring modern womanhood, ADHD, health, relationships, motherhood, career and personal growth."
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end bg-[hsl(45,30%,97%)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 70% 40%, hsl(0,30%,83%) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(35,20%,93%)] hidden lg:block" />

        <div className="relative container mx-auto px-6 lg:px-12 pb-20 pt-40 grid lg:grid-cols-2 gap-16 items-end">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-6 font-sans">
              Journalist · Storyteller · Adventurer
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-7xl lg:text-8xl text-[hsl(30,3%,17%)] leading-[0.95] mb-8">
              Lisa<br />Hollinshead
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[hsl(35,8%,40%)] leading-relaxed max-w-xl mb-10 font-sans font-light">
              Stories that help women see the world, and themselves, differently. Lisa writes, builds and creates at the intersection of travel, reinvention, media and real-world connection.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/journalism" className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors duration-300">
                Read My Work <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(30,3%,17%)] text-[hsl(30,3%,17%)] text-sm uppercase tracking-widest hover:bg-[hsl(30,3%,17%)] hover:text-[hsl(45,30%,97%)] transition-colors duration-300">
                Work With Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="w-full aspect-[3/4] bg-[hsl(40,20%,88%)] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: "linear-gradient(135deg, hsl(0,30%,85%) 0%, hsl(35,25%,80%) 50%, hsl(45,30%,90%) 100%)",
                }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="font-serif text-xl italic text-[hsl(30,3%,25%)] leading-relaxed">
                  "Curious about people. Restless for stories. Always ready to go."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IN */}
      <section className="border-t border-b border-[hsl(40,20%,85%)] py-10 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[hsl(35,8%,55%)] text-center mb-8 font-sans">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {publications.map((pub) => (
              <motion.span
                key={pub}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-serif text-base md:text-lg text-[hsl(35,8%,55%)] tracking-wide hover:text-[hsl(30,3%,17%)] transition-colors cursor-default"
              >
                {pub}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="aspect-square bg-[hsl(35,15%,90%)] relative overflow-hidden max-w-md"
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, hsl(35,20%,88%) 0%, hsl(0,25%,83%) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-12">
                <p className="font-serif text-3xl italic text-[hsl(30,3%,30%)] leading-tight">"20+ years of stories<br />that matter."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans">About Lisa</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)] leading-tight mb-8">
              I have never really fitted in one box
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed mb-6 font-light">
              I am a journalist who became a publicist. A publicist who became a founder. A founder who kept writing.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed mb-10 font-light">
              For more than 20 years, I have worked across media, communications and publishing in Australia and the UK. These days my work sits somewhere between journalism, publicity, community and curiosity. Sometimes I am interviewing someone. Sometimes I am getting them interviewed. Sometimes I am building the thing we are talking about.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Read More About Lisa <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL THEMES */}
      <section className="py-28 lg:py-36 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">What Lisa Writes</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Editorial Themes</motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(40,20%,85%)]">
            {themes.map((theme, i) => (
              <motion.div
                key={theme.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-10 group hover:bg-[hsl(30,3%,17%)] transition-colors duration-500"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[hsl(0,30%,60%)] mb-6 font-sans group-hover:text-[hsl(0,30%,75%)]">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl text-[hsl(30,3%,17%)] mb-4 group-hover:text-[hsl(45,30%,97%)] transition-colors">
                  {theme.title}
                </h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed group-hover:text-[hsl(35,8%,70%)] transition-colors font-light">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Selected Writing</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Featured Articles</motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/journalism" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                View All Work <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {articles.slice(0, 6).map((article, i) => (
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
                className="bg-[hsl(45,30%,97%)] p-8 md:p-10 group hover:bg-[hsl(0,30%,73%)]/5 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[hsl(35,8%,55%)] font-sans">{article.publication}</span>
                  <span className="text-xs text-[hsl(35,8%,60%)] font-sans">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[hsl(30,3%,17%)] leading-snug mb-4 group-hover:text-[hsl(0,30%,50%)] transition-colors">
                  {article.headline}
                </h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed mb-6 font-light">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] group-hover:text-[hsl(30,3%,17%)] transition-colors">
                  Read More <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(45,30%,97%)] italic leading-tight"
          >
            "Commission me. Send me somewhere. Give me a story. Put me in a room with someone interesting."
          </motion.blockquote>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans">Speaking & Commentary</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)] leading-tight mb-8">
              Speak with Lisa
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed mb-6 font-light">
              Lisa is available for media commentary, podcast interviews, panels, MC roles and speaking opportunities spanning reinvention, storytelling, ADHD, single motherhood, publicity, founder life and community.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {["Modern Womanhood", "ADHD", "Single Motherhood", "Reinvention", "Personal Branding", "Storytelling", "Kindness"].map(t => (
                <span key={t} className="text-xs px-3 py-1.5 border border-[hsl(40,20%,82%)] text-[hsl(35,8%,45%)] font-sans tracking-wide">{t}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors duration-300">
                Invite Lisa to Speak <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-px"
          >
            {["Media Commentary", "Podcast Interviews", "Panel Discussions", "Keynote Speaking", "Workshops & Events"].map((item, i) => (
              <div key={item} className="flex items-center gap-6 py-6 border-b border-[hsl(40,20%,85%)]">
                <span className="text-xs text-[hsl(0,30%,60%)] font-sans tabular-nums">0{i + 1}</span>
                <span className="font-serif text-xl text-[hsl(30,3%,17%)]">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-28 lg:py-36 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Founder Of</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Lisa's Brands</motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-[hsl(35,8%,45%)] font-light max-w-lg mx-auto">
              Publishing, publicity and community. Distinct ventures, connected by a belief in the power of a good story.
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {brands.map((brand, i) => (
              <motion.a
                key={brand.title}
                href={brand.url}
                target={brand.url.startsWith("http") ? "_blank" : undefined}
                rel={brand.url.startsWith("http") ? "noreferrer" : undefined}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-10 md:p-14"
              >
                <h3 className="font-serif text-2xl text-[hsl(30,3%,17%)] mb-4">{brand.title}</h3>
                <div className="w-10 h-px bg-[hsl(0,30%,65%)] mb-6" />
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{brand.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section className="py-28 lg:py-36 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,65%)] mb-5 font-sans">Coming Soon</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(45,30%,97%)] leading-tight mb-6">
              Not Backwards at Coming Forwards
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,65%)] leading-relaxed mb-10 font-light">
              First-person essays become bigger conversations about single motherhood, dating, reinvention, money, work, ageing and starting again.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(35,8%,45%)] text-[hsl(45,30%,97%)] text-xs uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Partnerships & Enquiries <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
