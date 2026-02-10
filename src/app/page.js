import Image from "next/image";
import LuxurySlider from "../components/home_compo/hero_section/slide_show";
import About_section from "../components/home_compo/second_section/about"
import Third_section from "../components/home_compo/third_section"
import Fourth_section from "../components/home_compo/fourth_section"
import Testinomial from "../components/home_compo/testinomial"
import CTA from "../components/home_compo/CTA"
export default function Home() {
  return (
    <>
      <LuxurySlider />
      <About_section />
      <Third_section />
      <Fourth_section />
      <Testinomial />
      <CTA />
    </>

  );
}
