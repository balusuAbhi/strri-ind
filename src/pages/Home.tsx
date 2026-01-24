import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { TrustedBy } from '../components/TrustedBy';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Clients } from '../components/Clients';

export function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <TrustedBy />
      <WhyChooseUs />
      <Clients />
    </>
  );
}
