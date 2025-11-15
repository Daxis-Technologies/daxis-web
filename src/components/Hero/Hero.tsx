import React from 'react';
import { useInView } from '../../hooks/useInView';
import {
  HeroSection,
  HeroContent,
  HeroKicker,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroVisual,
  HeroBadge,
  HeroTagline,
} from './styles';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <HeroSection id="top" ref={ref as React.RefObject<HTMLElement>}>
      <HeroContent $visible={isVisible}>
        <HeroKicker>Consultoria & Desenvolvimento sob medida</HeroKicker>
        <HeroTitle>
          Tecnologia enxuta,
          <br />
          resultados concretos.
        </HeroTitle>
        <HeroSubtitle>
          A D-Axis nasce para conectar estratégia de produto, arquitetura de software e experiência
          digital em um só fluxo — da primeira linha de código ao deploy em produção.
        </HeroSubtitle>

        <HeroActions>
          <PrimaryButton href="#contact">Fale com a D-Axis</PrimaryButton>
          <SecondaryButton href="#services">Ver serviços</SecondaryButton>
        </HeroActions>

        <HeroTagline>
          › Implementação de software • Landing pages • APIs e serviços web • Apps mobile
        </HeroTagline>
      </HeroContent>

      <HeroVisual $visible={isVisible}>
        <HeroBadge>
          <span>+10 anos</span>
          <small>em engenharia de software</small>
        </HeroBadge>
        <HeroBadge>
          <span>Stack moderna</span>
          <small>React · Node · Cloud</small>
        </HeroBadge>
        <HeroBadge>
          <span>Parceria</span>
          <small>do discovery ao go-live</small>
        </HeroBadge>
      </HeroVisual>
    </HeroSection>
  );
};