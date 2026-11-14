const splitLines = (text = '') => String(text).split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

// "\r\n" ilə ayrılmış mətni <br> ilə sətirlərə bölür
export function Lines({ text }) {
  const lines = splitLines(text);
  return lines.map((l, i) => (
    <span key={i}>{l}{i < lines.length - 1 && <br />}</span>
  ));
}

export function BrandLines({ text }) {
  const lines = splitLines(text);
  return lines.map((l, i) => (
    <span key={i}>
      {/^x[A-Za-z]/.test(l) ? <><span className="normal-case">x</span>{l.slice(1).toUpperCase()}</> : l}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}
// Mətni boş sətirlərlə paraqraflara bölür
export function paragraphs(text = '') {
  return String(text).split(/\r?\n[ \t]*\r?\n/).map((p) => p.replace(/\r?\n/g, ' ').trim()).filter(Boolean);
}
// Admin paneldən gələn HTML-dəki boş paraqraf və siyahıları təmizləyir
export function cleanHtml(html = '') {
  return String(html)
    .replace(/<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '')
    .replace(/<ul>\s*<\/ul>/gi, '')
    .replace(/(<br\s*\/?>\s*)+(?=<\/li>)/gi, '')
    .trim();
}
// API-dən gələn HTML üçün Tailwind stilləri
export const richClass =
  'text-sm lg:text-base leading-relaxed [&_p]:mb-4 [&_strong]:font-semibold [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-sm [&_ul]:leading-[1.7] [&_li]:mb-2';
