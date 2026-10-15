import { Audience } from "@/components/home/Audience";
import { Cases } from "@/components/home/Cases";
import { Challenges } from "@/components/home/Challenges";
import { Contact } from "@/components/home/Contact";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Models } from "@/components/home/Models";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Testimonial } from "@/components/home/Testimonial";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Services />
      <Cases />
      <Process />
      <WhyUs />
      <Audience />
      <Models />
      <Testimonial />
      <Faq />
      <Contact />
    </>
  );
}
