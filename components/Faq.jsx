'use client';
import { useState } from 'react';
import Container from './Container';
import Heading from './Heading';
import { Lines, cleanHtml } from '@/lib/utils';

export default function Faq({ title, items = [] }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-14 lg:pb-24 lg:pt-28">
      <Container>
        <Heading><Lines text={title} /></Heading>
        <div className="mt-6 border-t border-[#c9c9c9] lg:mt-14">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[#c9c9c9]">
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left text-sm lg:text-base"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{it.question}</span>
                  <span className={`shrink-0 text-[22px] font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div
                      className="max-w-[880px] pb-7 text-sm leading-[1.6] text-[#8d8d8d] lg:text-base [&_p]:mb-2"
                      dangerouslySetInnerHTML={{ __html: cleanHtml(it.answer) }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
