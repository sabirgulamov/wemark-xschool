import Container from './Container';
import Heading from './Heading';
import AboutSlider from './AboutSlider';
import { BrandLines, paragraphs } from '@/lib/utils';

export default function About({ title, description, images = [] }) {
  return (
    <section className="pt-10 lg:pt-20">
      <Container>
        <div className="flex items-end justify-between">
          <Heading><BrandLines text={title} /></Heading>
          <a href="#" className="hidden border-b border-[#1b1b1b] pb-0.5 text-sm lg:block">Go to xSchool</a>
        </div>
        <div className="mt-5 max-w-[880px] space-y-4 text-sm leading-normal lg:mt-10 lg:text-base">
          {paragraphs(description).map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Container>
      <AboutSlider images={images.map((i) => i.image)} />
    </section>
  );
}
