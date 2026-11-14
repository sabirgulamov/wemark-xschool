import Container from './Container';

const cols = [
  ['Sitemap', ['Case Studies', 'Services', 'About', 'Career', 'Blog', 'News', 'Vacancies']],
  ['Follow Us On', ['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'Twitter']],
  ['Office', ['Nitiqyov Sok.Bakhtiari 22,', 'Sulutuli, Sulutuli Residence']],
  ['For Partnerships:', ['partnership@wemark.az', '+994 51 555 55 55']],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#15151b] pb-6 pt-12 text-white">
      <Container>
        <div className="flex flex-col gap-8 text-xs lg:flex-row lg:gap-24">
          {cols.map(([h, l]) => (
            <div key={h}>
              <h5 className="mb-4 text-xs font-medium">{h}</h5>
              <ul>{l.map((x) => <li key={x} className="mb-2 text-[#b9b9c0]">{x}</li>)}</ul>
            </div>
          ))}
          <a href="#" aria-label="Back to top" className="ml-auto hidden h-10 w-10 place-items-center rounded-full border border-[#555] lg:grid">↑</a>
        </div>
        <div className="mt-10 text-center text-[clamp(80px,16vw,230px)] font-semibold leading-none tracking-[-0.05em] text-[#26262e] lg:mt-14">wemark</div>
        <div className="mt-6 flex flex-col gap-2 text-[10px] text-[#8a8a93] lg:flex-row lg:justify-between">
          <span>COPYRIGHT © WEMARK</span>
          <span>PRIVACY POLICY</span>
          <span>WEMARK © {year}</span>
        </div>
      </Container>
    </footer>
  );
}