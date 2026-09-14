import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { featuredArticles, brands } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const publishedBy = [
  "Mamamia",
  "Nine / 9Honey",
  "SBS Food",
  "Daily Mail",
  "Mumbrella",
  "HR Leader",
  "Kidspot",
  "MiNDFOOD"
];

const publicityExperience = [
  "SBS",
  "FIFA",
  "Culture Kings x San Francisco 49ers",
  "The Fourth Wall",
  "FINNS Bali",
  "Pour Sport"
];

const selectedPublicityWork = [
  {
    title: "SBS Entertainment, Sport & Factual",
    role: "Including Who Do You Think You Are?, Sean Micallef’s Origin Odyssey, Cup Fever!, FIFA and Plating Locally.",
  },
  {
    title: "Culture Kings x San Francisco 49ers",
    role: "Earned-media strategy and campaign publicity surrounding the Australian activation.",
  },
  {
    title: "The Fourth Wall",
    role: "Launch positioning, founder profiling, media strategy and publicity for the performing-arts publication.",
  },
  {
    title: "FINNS Bali",
    role: "Additional recent work.",
  },
  {
    title: "Pour Sport",
    role: "Additional recent work.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Lisa Hollinshead | Journalist, Publicist, Founder & Storyteller"
        description="Lisa Hollinshead is a senior journalist, publicist and founder. She tells stories that make people feel something, and helps good ideas get noticed."
      />

      {/* 1. HERO */}
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
              Journalist · Publicist · Founder · Storyteller
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-[1.05] mb-8">
              I tell stories that make people feel something.<br />
              <span className="text-[hsl(35,8%,40%)]">And help good ideas get noticed.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[hsl(35,8%,40%)] leading-relaxed max-w-xl mb-10 font-sans font-light">
              For more than 20 years, Lisa Hollinshead has worked on both sides of the media, writing stories, creating campaigns, building platforms and helping good ideas earn attention.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/journalism" className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] transition-colors duration-300">
                Explore Lisa’s Journalism <ArrowRight size={14} />
              </Link>
              <Link href="/publicity" className="inline-flex justify-center items-center gap-3 px-8 py-4 border border-[hsl(30,3%,17%)] text-[hsl(30,3%,17%)] text-sm uppercase tracking-widest hover:bg-[hsl(30,3%,17%)] hover:text-[hsl(45,30%,97%)] transition-colors duration-300">
                Publicity & Strategy <ArrowRight size={14} />
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
              <img
                src={`${import.meta.env.BASE_URL}images/lisa-hero-beach.webp`}
                alt="Lisa Hollinshead on the beach"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DUAL CREDIBILITY STRIP */}
      <section className="border-t border-b border-[hsl(40,20%,85%)] py-16 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[hsl(35,8%,55%)] mb-8 font-sans">Published By</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {publishedBy.map((pub) => (
                <span key={pub} className="font-serif text-lg md:text-xl text-[hsl(35,8%,55%)] tracking-wide hover:text-[hsl(30,3%,17%)] transition-colors cursor-default">
                  {pub}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[hsl(35,8%,55%)] mb-8 font-sans">Publicity Experience</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {publicityExperience.map((exp) => (
                <span key={exp} className="font-serif text-lg md:text-xl text-[hsl(35,8%,55%)] tracking-wide hover:text-[hsl(30,3%,17%)] transition-colors cursor-default">
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE PROFESSIONAL PILLARS */}
      <section className="py-28 lg:py-36 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="bg-[hsl(45,30%,97%)] p-10 lg:p-14 group">
              <h3 className="font-serif text-3xl text-[hsl(30,3%,17%)] mb-6">PUBLICITY</h3>
              <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light mb-10 min-h-[96px]">
                Publicity, earned media and strategic counsel through Comms 101. Lisa works across entertainment, sport, culture, travel, consumer brands and founder-led businesses.
              </p>
              <Link href="/publicity" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Explore Publicity <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="bg-[hsl(45,30%,97%)] p-10 lg:p-14 group">
              <h3 className="font-serif text-3xl text-[hsl(30,3%,17%)] mb-6">JOURNALISM</h3>
              <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light mb-10 min-h-[96px]">
                Commissioned features, first-person essays, travel writing, interviews and cultural commentary.
              </p>
              <Link href="/journalism" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Read Lisa’s Journalism <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="bg-[hsl(45,30%,97%)] p-10 lg:p-14 group">
              <h3 className="font-serif text-3xl text-[hsl(30,3%,17%)] mb-6">FOUNDER</h3>
              <p className="text-[hsl(35,8%,45%)] leading-relaxed font-light mb-10 min-h-[96px]">
                Social101, OneAnother and the platforms Lisa has built around stories, culture and real-world connection.
              </p>
              <a href="#founder-ecosystem" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Explore Lisa’s World <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED PUBLICITY WORK */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Comms 101</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)] mb-6">Selected Publicity Work</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[hsl(35,8%,45%)] font-light max-w-2xl">
                More than 20 years of turning programmes, people, brands and ideas into stories the media wants to tell.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/publicity" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                View Publicity & Strategy <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {selectedPublicityWork.map((work, i) => (
              <motion.div
                key={work.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="bg-[hsl(45,30%,97%)] p-8 md:p-10 group"
              >
                <h3 className="font-serif text-xl md:text-2xl text-[hsl(30,3%,17%)] leading-snug mb-4">
                  {work.title}
                </h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{work.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED JOURNALISM */}
      <section className="py-28 lg:py-36 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Selected Writing</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[hsl(30,3%,17%)]">Featured Journalism</motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/journalism" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                View All Journalism <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(40,20%,85%)]">
            {featuredArticles.map((article, i) => (
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
                className="bg-[hsl(45,30%,97%)] p-8 md:p-10 group hover:bg-[hsl(0,30%,73%)]/5 transition-colors duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[hsl(35,8%,55%)] font-sans">{article.publication}</span>
                  {article.date && <span className="text-xs text-[hsl(35,8%,60%)] font-sans">{article.date}</span>}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[hsl(30,3%,17%)] leading-snug mb-4 group-hover:text-[hsl(0,30%,50%)] transition-colors">
                  {article.headline}
                </h3>
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed mb-8 font-light flex-grow">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[hsl(35,8%,55%)] group-hover:text-[hsl(30,3%,17%)] transition-colors mt-auto">
                  Read Article <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT LISA */}
      <section className="py-28 lg:py-36 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="aspect-square bg-[hsl(35,15%,90%)] relative overflow-hidden max-w-md"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/lisa-about-beach.webp`}
              alt="Lisa Hollinshead by the beach"
              className="absolute inset-0 h-full w-full object-cover"
            />
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

      {/* 7. FOUNDER ECOSYSTEM */}
      <section id="founder-ecosystem" className="py-28 lg:py-36 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-4 font-sans">Founder Ecosystem</motion.p>
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
                className="bg-[hsl(45,30%,97%)] p-10 md:p-14 group hover:bg-[hsl(45,35%,95%)] transition-colors"
              >
                <h3 className="font-serif text-2xl text-[hsl(30,3%,17%)] mb-4">{brand.title}</h3>
                <div className="w-10 h-px bg-[hsl(0,30%,65%)] mb-6" />
                <p className="text-sm text-[hsl(35,8%,45%)] leading-relaxed font-light">{brand.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPEAKING AND PODCAST */}
      <section className="py-28 lg:py-36 bg-[hsl(30,3%,17%)] text-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,65%)] mb-5 font-sans">Speaking & Podcast</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Speak with Lisa
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,65%)] leading-relaxed mb-6 font-light">
              Lisa is available for media commentary, podcast interviews, panels, MC roles and speaking opportunities spanning reinvention, storytelling, ADHD, single motherhood, publicity, founder life and community.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,65%)] leading-relaxed mb-10 font-light">
              Also coming soon: <em>Not Backwards at Coming Forwards</em>, a podcast where first-person essays become bigger conversations about single motherhood, dating, reinvention, money, work, ageing and starting again.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/speaking" className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(45,30%,97%)] text-[hsl(30,3%,17%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] hover:text-white transition-colors duration-300">
                Speaking Formats & Topics <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/lisa-podcast-studio.webp`}
              alt="Lisa Hollinshead recording in a podcast studio"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CONTACT CTA */}
      <section className="py-24 bg-[hsl(45,30%,97%)]">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[hsl(30,3%,17%)] italic leading-tight mb-12"
          >
            "Commission me. Send me somewhere. Give me a story. Put me in a room with someone interesting."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[hsl(30,3%,17%)] border-b border-[hsl(30,3%,17%)] pb-1 hover:text-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
