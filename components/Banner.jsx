import Container from './Container';
import { Lines } from '@/lib/utils';

export default function Banner({ title, image }) {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[linear-gradient(115deg,#3f8f9b_0%,#c8d4cf_30%,#e8a468_55%,#c4421f_80%,#3a5a63_100%)] pb-16 text-white lg:min-h-[900px] lg:items-center lg:pb-0">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent to-40%" />
      <Container className="relative z-10">
        <h1 className="font-display text-4xl font-normal uppercase leading-[1.05] lg:pt-20 lg:text-[96px]">
          <Lines text={title} />
        </h1>
      </Container>
    </section>
  );
}
