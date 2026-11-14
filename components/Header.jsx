import Container from './Container';

const links = ['About', 'Services', 'Case Studies', 'Career', 'Blog', 'xSchool'];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 text-white">
      <Container className="flex items-center justify-between py-6">
        <span className="text-2xl font-semibold tracking-[-0.04em]">wemark</span>
        <nav className="hidden gap-8 text-sm lg:flex">
          {links.map((n) => <a key={n} href="#">{n}</a>)}
        </nav>
        <a href="#" className="hidden border-b border-white pb-0.5 text-sm lg:block">Let’s Talk</a>
        <button className="text-[13px] lg:hidden" aria-label="Menu">Menu</button>
      </Container>
    </header>
  );
}
