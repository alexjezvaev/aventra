import { Audience } from "@/components/home/Audience";
import { Workwear } from "@/components/home/Workwear";
import { Challenges } from "@/components/home/Challenges";
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
      <Workwear />
      <Process />
      <WhyUs />
      <Audience />
      <Models />
      <Testimonial />
      <Faq />
    </>
  );
}
