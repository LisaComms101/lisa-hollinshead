import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const brandsDetail = [
  {
    title: "Social101",
    founded: "Founded 2010",
    tagline: "Editorial platform and community for authentic storytelling.",
    description: "Social101 was founded in 2010 as an editorial platform and community dedicated to authentic storytelling and genuine connection. Over more than a decade, it has become a trusted home for voices that matter — building audiences, amplifying stories and creating community across digital media.",
    accentColor: "hsl(30, 15%, 75%)",
  },
  {
    title: "Comms101",
    founded: "PR & Communications",
    tagline: "Helping brands, people and organisations tell stories that matter.",
    description: "Comms101 is Lisa's PR and communications consultancy, bringing more than 20 years of media, publishing and brand storytelling experience to every client. The consultancy works with individuals, brands and organisations to craft narratives that build trust, authority and genuine connection with their audiences.",
    accentColor: "hsl(0, 25%, 78%)",
  },
  {
    title: "One Another",
    founded: "Kindness & Community",
    tagline: "A kindness-led community and volunteering platform.",
    description: "One Another is a purpose-led community and volunteering platform built on the belief that small acts of generosity have the power to change everything. It connects people who want to give their time, skills and kindness to those who need it most — creating ripples of impact in communities across Australia.",
    accentColor: "hsl(15, 20%, 75%)",
  },
];

export default function Brands() {
  return (
    <>
      <SEO
        title="Founder Of | Lisa Hollinshead — Social101, Comms101, One Another"
        description="Lisa Hollinshead is the founder of Social101, Comms101 and One Another — platforms spanning editorial media, PR communications and kindness-led community building."
      />

      {/* PAGE HEADER */}
      <section className="pt-40 pb-24 bg-[hsl(40,25%,94%)]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-[hsl(0,30%,60%)] mb-5 font-sans"
          >
            Founder Of
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[hsl(30,3%,17%)] leading-tight"
          >
            Lisa's<br />Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[hsl(35,8%,45%)] max-w-xl font-light"
          >
            Lisa's work spans publishing, publicity, production and purpose-led community building across three distinct platforms.
          </motion.p>
        </div>
      </section>

      {/* BRANDS DETAIL */}
      <section className="bg-[hsl(45,30%,97%)]">
        {brandsDetail.map((brand, i) => (
          <motion.div
            key={brand.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className={`py-28 lg:py-36 border-b border-[hsl(40,20%,85%)] ${i % 2 === 1 ? "bg-[hsl(40,25%,94%)]" : ""}`}
          >
            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-[hsl(35,8%,55%)] mb-4 font-sans">{brand.founded}</motion.p>
                <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-[hsl(30,3%,17%)] mb-6">{brand.title}</motion.h2>
                <motion.p variants={fadeUp} className="font-serif text-xl italic text-[hsl(35,8%,40%)] mb-6 leading-relaxed">{brand.tagline}</motion.p>
                <div className="w-12 h-px mb-8" style={{ background: brand.accentColor }} />
                <motion.p variants={fadeUp} className="text-[hsl(35,8%,40%)] leading-relaxed font-light">{brand.description}</motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`aspect-square relative overflow-hidden max-w-md ${i % 2 === 1 ? "order-1 lg:order-2" : ""}`}
                style={{ background: `linear-gradient(135deg, ${brand.accentColor} 0%, hsl(40,20%,88%) 100%)` }}
              >
                <div className="absolute inset-0 flex items-end p-10">
                  <div>
                    <p className="font-serif text-4xl text-[hsl(30,3%,20%)] opacity-40">{brand.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-[hsl(30,3%,17%)]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-[hsl(45,30%,97%)] mb-6">Work with Lisa</motion.h2>
            <motion.p variants={fadeUp} className="text-[hsl(35,8%,65%)] font-light mb-10 max-w-lg mx-auto">
              Whether it's a communications brief, a media opportunity or a community partnership, Lisa would love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-[hsl(35,8%,40%)] text-[hsl(45,30%,97%)] text-sm uppercase tracking-widest hover:bg-[hsl(0,30%,60%)] hover:border-[hsl(0,30%,60%)] transition-colors">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
