'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

const side = 'pl-[max(24px,calc((100vw-1440px)/2+24px))] scroll-pl-[max(24px,calc((100vw-1440px)/2+24px))] lg:pl-[max(64px,calc((100vw-1440px)/2+64px))] lg:scroll-pl-[max(64px,calc((100vw-1440px)/2+64px))]';
const sideX = 'px-[max(24px,calc((100vw-1440px)/2+24px))] lg:px-[max(64px,calc((100vw-1440px)/2+64px))]';

export default function AboutSlider({ images = [] }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const go = (dir) => {
    const el = ref.current;
    const w = el.firstElementChild?.offsetWidth ?? 300;
    el.scrollBy({ left: dir * (w + 12), behavior: 'smooth' });
  };

  const btn = 'grid h-10 w-10 place-items-center rounded-full border border-[#1b1b1b] text-lg transition hover:bg-[#1b1b1b] hover:text-[#e4e4e4] disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit';

  return (
    <div className="mt-8 lg:mt-14">
      <div ref={ref} onScroll={update} className={`flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${side}`}>
        {images.map((src, i) => (
          <div key={i} className="aspect-square w-[62vw] shrink-0 snap-start overflow-hidden lg:aspect-[1.45] lg:w-[34vw] lg:max-w-[500px]">
            <img src={src} alt="" draggable={false} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className={`mt-5 flex gap-2 ${sideX}`}>
        <button className={btn} onClick={() => go(-1)} disabled={edge.start} aria-label="Previous">←</button>
        <button className={btn} onClick={() => go(1)} disabled={edge.end} aria-label="Next">→</button>
      </div>
    </div>
  );
}
