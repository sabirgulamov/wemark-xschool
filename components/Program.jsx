import Container from './Container';
import Heading from './Heading';
import { BrandLines, cleanHtml, richClass } from '@/lib/utils';

export default function Program({ programs = [] }) {
  return (
    <section className="pt-14 lg:pt-28">
      <Container>
        {programs.map((p, i) => (
          <div key={i}>
            <Heading><BrandLines text={p.title} /></Heading>
            <div className={`mt-6 max-w-[880px] lg:mt-14 ${richClass}`} dangerouslySetInnerHTML={{ __html: cleanHtml(p.description) }} />
          </div>
        ))}
      </Container>
    </section>
  );
}
