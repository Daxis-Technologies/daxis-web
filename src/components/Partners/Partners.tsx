import React from "react";
import { useInView } from "../../hooks/useInView";
import { Section, SectionSubtitle, SectionTitle } from "../../styles/layout";
import {
  PartnerAvatar,
  PartnerAvatarImg,
  PartnerCard,
  PartnerRole,
  PartnersGrid,
} from "./styles";

export const Partners: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <Section id="partners" ref={ref as React.RefObject<HTMLElement>}>
      <SectionTitle>Sócios</SectionTitle>
      <SectionSubtitle>
        A D-Axis é liderada por profissionais com trajetória sólida em
        desenvolvimento de software, arquitetura de sistemas e produtos
        digitais. Em breve, este espaço trará um pouco mais dessas histórias.
      </SectionSubtitle>

      <PartnersGrid $visible={isVisible}>
        <PartnerCard>
          <PartnerAvatar>
            <PartnerAvatarImg src={"https://github.com/dougb60.png"} />
          </PartnerAvatar>
          <h3>Douglas de Oliveira</h3>
          <PartnerRole>Co-fundador · Engenharia & Arquitetura</PartnerRole>
          <p>
            Texto de apresentação do Douglas. Aqui você pode destacar áreas de
            especialidade, tempo de mercado e tipos de projetos que costuma
            liderar.
          </p>
        </PartnerCard>

        <PartnerCard>
          <PartnerAvatar>
            <PartnerAvatarImg src={"https://github.com/cesarmenchao.png"} />
          </PartnerAvatar>
          <h3>Cesar Gabriel Menchão</h3>
          <PartnerRole>Co-fundador · Produto & Engenharia</PartnerRole>
          <p>
            Texto de apresentação do Cesar. Espaço para falar sobre perfil, foco
            de atuação e a forma como contribui nos projetos da D-Axis.
          </p>
        </PartnerCard>
      </PartnersGrid>
    </Section>
  );
};
