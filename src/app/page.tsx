import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";

import { ExploreOfferings } from "@/components/ExploreOfferings";


import { KeyFeatures } from "@/components/KeyFeatures";
import { ZoioTech } from "@/components/ZoioTech";
import { Customer } from "@/components/Customer";
import { AboutZoio } from "@/components/AboutZoio";
import { GetInvolved } from "@/components/GetInvolved";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        title="Millions Affected by Eye Diseases, but Early Diagnosis Remains a Challenge"
      >
        ZOIO provides an innovative, accessible platform that simplifies fundus exam diagnostics and supports healthcare providers in preventing eye diseases.Committed to ethical AI practices, ZOIO places a high emphasis on sustainability and human rights.
        
      </SectionTitle>

       {/* Adicionando Key Features */}
      <SectionTitle title="Key Features">
        Discover the unique features that make ZOIO a leader in early eye disease detection and prevention.
      </SectionTitle>
      <KeyFeatures />

       <SectionTitle
        title="Millions Affected by Eye Diseases, but Early Diagnosis Remains a Challenge"
      >
        ZOIO provides an innovative, accessible platform that simplifies fundus exam diagnostics and supports healthcare providers in preventing eye diseases.Committed to ethical AI practices, ZOIO places a high emphasis on sustainability and human rights.
        
      </SectionTitle>
      <ZoioTech />
      <Customer />
      <SectionTitle
       
        title="Explore Our Offerings"
      >
       Get a glimpse of how our technology works, the value it brings, and the impact it can have on improving eye health globally.
      </SectionTitle>

      <ExploreOfferings />
      <AboutZoio />
      <SectionTitle
       
        title="Get Involved"
      >
       
      </SectionTitle>
      <GetInvolved />
    </Container>
  );
}
