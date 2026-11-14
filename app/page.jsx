import { getPageData } from '@/lib/api';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Founder from '@/components/Founder';
import Program from '@/components/Program';
import Marquee from '@/components/Marquee';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default async function Page() {
  const data = await getPageData();
  return (
    <main>
      <Header />
      <Banner title={data.banner_title} image={data.banner_image} />
      <About title={data.about_title} description={data.about_description} images={data.about_images} />
      <Founder founders={data.founders} />
      <Program programs={data.programs} />
      <Marquee textSlider={data.text_slider} />
      <Faq title={data.faq_title} items={data.xschool_faq} />
      <Footer />
    </main>
  );
}
