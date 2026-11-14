import './globals.css';

export const metadata = { title: 'Wemark xSchool', description: 'Wemark xSchool' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#e4e4e4] font-sans text-[#1b1b1b] antialiased">{children}</body>
    </html>
  );
}
