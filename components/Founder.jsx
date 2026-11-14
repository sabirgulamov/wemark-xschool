import Container from './Container';
import Heading from './Heading';

export default function Founder({ founders = [] }) {
  return (
    <section className="pt-14 lg:pt-28">
      <Container>
        <Heading>FOUNDER</Heading>
        {founders.map((f, i) => (
          <div key={i} className={`flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-14 ${i === 0 ? 'mt-6 lg:mt-14' : 'mt-20'}`}>
            <div className="w-full shrink-0 lg:w-[250px]">
              <img src={f.image} alt={f.name} className="aspect-square w-full object-cover grayscale lg:h-[250px] lg:w-[250px]" />
              <small className="mt-1.5 block text-[10px]">{f.name} · {f.position}</small>
            </div>
            <div className="lg:max-w-[360px] lg:pt-9">
              <h3 className="mb-4 text-sm font-medium uppercase leading-snug">{f.title}</h3>
              <p className="text-sm leading-normal">{f.description}</p>
              <div className="mt-5 flex gap-4 text-[13px]">
                {f.linkedin_url && <a href={f.linkedin_url} target="_blank" rel="noreferrer" className="border-b border-[#1b1b1b]">LinkedIn</a>}
                {f.instagram_url && <a href={f.instagram_url} target="_blank" rel="noreferrer" className="border-b border-[#1b1b1b]">Instagram</a>}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
