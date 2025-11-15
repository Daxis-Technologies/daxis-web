import React from 'react';
import { useInView } from '../../hooks/useInView';
import { Section, SectionSubtitle, SectionTitle } from '../../styles/layout';
import { AboutGrid, AboutHighlight, AboutItem } from './styles';

export const About: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <Section id="about" ref={ref as React.RefObject<HTMLElement>}>
      <SectionTitle>Sobre a D-Axis</SectionTitle>
      <SectionSubtitle>
        Somos uma boutique de tecnologia focada em transformar requisitos de negócio em produtos
        digitais simples, performáticos e escaláveis — sempre com uma comunicação direta com o
        time decisor.
      </SectionSubtitle>

      <AboutGrid $visible={isVisible}>
        <AboutHighlight>
          <h3>Da arquitetura ao pixel final</h3>
          <p>
            Atuamos tanto no back quanto no front: desde definição de integrações, serviços web e
            segurança até a construção de interfaces que convertem, com foco em clareza e
            performance.
          </p>
        </AboutHighlight>

        <AboutItem>
          <h4>Consultoria aplicada</h4>
          <p>
            Nada de apresentações infinitas: mergulhamos no contexto, desenhamos juntos o fluxo
            ideal e entregamos código que pode ir para produção.
          </p>
        </AboutItem>

        <AboutItem>
          <h4>Stack moderna</h4>
          <p>
            React, Node.js, TypeScript e ecosistema cloud. Escolhemos ferramentas modernas, mas
            sempre equilibrando inovação com manutenção de longo prazo.
          </p>
        </AboutItem>

        <AboutItem>
          <h4>Parceria contínua</h4>
          <p>
            Apoiamos desde MVPs e landing pages até integrações entre sistemas e evolução de
            produtos digitais já existentes.
          </p>
        </AboutItem>
      </AboutGrid>
    </Section>
  );
};