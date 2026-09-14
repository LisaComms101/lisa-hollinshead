import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs">
          <div className="font-serif text-2xl tracking-tight mb-6">Lisa Hollinshead</div>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Journalist, publicist, founder and storyteller. Stories and strategies that help good ideas earn attention.
          </p>
          <a href="mailto:hello@lisahollinshead.com" className="text-primary hover:text-white transition-colors text-sm tracking-wide">
            hello@lisahollinshead.com
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-12 sm:gap-24">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link>
              <Link href="/journalism" className="text-sm hover:text-primary transition-colors">Journalism</Link>
              <Link href="/speaking" className="text-sm hover:text-primary transition-colors">Speaking</Link>
              <Link href="/publicity" className="text-sm hover:text-primary transition-colors">Publicity</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted mb-6">Social</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/lisa.hollinshead/" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/lisa-hollinshead-a0831461/" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://social101.com/author/lisa/" target="_blank" rel="noreferrer" className="text-sm hover:text-primary transition-colors">Social101</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Lisa Hollinshead. All rights reserved.</p>
      </div>
    </footer>
  );
}
