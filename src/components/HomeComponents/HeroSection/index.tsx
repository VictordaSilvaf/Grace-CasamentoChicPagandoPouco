import CardHero from "@/components/CardHero";
import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import Subtitle from "@/components/Subtitle";
import Text from "@/components/Text";
import TitleSection from "@/components/TitleSection";
import { ChartNoAxesColumnIncreasing, Paperclip } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
        <TitleSection title="CASAMENTO CHIC PAGANDO POUCO?" />
        <DescriptionSection>
          Te ensino a organizar um casamento chic, o casamento dos seus sonhos, gastando até 50% menos. Clique no botão “Eu vou casar”, que está abaixo e vamos juntas fazer o casamento mais incrível que você já viu.
        </DescriptionSection>
      </div>

      <Container>
        <div className="flex items-center justify-center mt-12">
          <CardHero
            title="PLANEJAMENTO"
            description="Ajudamos você a planejar cada detalhe do seu casamento, desde a escolha do local até os mínimos detalhes da decoração."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ECONOMIA"
            description="Estratégias inteligentes para reduzir custos sem comprometer a qualidade e elegância do seu grande dia."
          >
            <ChartNoAxesColumnIncreasing className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ASSESSORIA"
            description="Suporte completo com fornecedores, negociações e organização para realizar o casamento dos seus sonhos."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>
        </div>
      </Container>

      <div className="grid grid-cols-10 mt-14">
        <div data-aos="fade-right" className="col-span-4">
          <img
            className="object-cover w-full h-[450px]"
            src="https://images.unsplash.com/photo-1745503288223-47645e960468?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col bg-gray-100 col-span-6 px-11 py-10"
        >
          <div className="mb-5">
            <Subtitle className="mb-[25px]" text="WHAT WE DO." />
            <Text
              className="w-full max-w-2xl"
              text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent commodo arcu massa."
            />
          </div>

          <div className="mb-5">
            <Subtitle className="mb-[25px]" text="WHAT WE DO." />
            <Text
              className="w-full max-w-2xl"
              text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent commodo arcu massa."
            />
          </div>

          <div className="mb-5">
            <Subtitle className="mb-[25px]" text="WHAT WE DO." />
            <Text
              className="w-full max-w-2xl"
              text="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent commodo arcu massa."
            />
          </div>
        </div>
      </div>
    </div>

    // <div>HeroSection</div>
  );
};

export default HeroSection;
