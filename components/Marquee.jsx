
export default function Marquee({ textSlider = {} }) {
  const texts = Object.values(textSlider).filter(Boolean);
  const list = [...texts, ...texts, ...texts];
  return (
    <div aria-hidden="true" className="group mt-12 flex select-none overflow-hidden lg:mt-24">
      {[0, 1].map((k) => (
        <div key={k} className="flex min-w-full shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {list.map((t, i) => (
            <span key={i} className="flex items-center whitespace-nowrap py-3 font-display text-xl font-medium uppercase before:mx-8 before:text-[#e5483a] before:content-['*'] lg:text-[28px]">
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
