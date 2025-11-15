import React from 'react';
import { Section, SectionSubtitle, SectionTitle } from '../../styles/layout';
import { useInView } from '../../hooks/useInView';
import { ServicesGrid, ServiceCard, ServiceIcon, ServiceTag } from './styles';

const SERVICES = [
  {
    title: 'Consultoria para implementação de software',
    description:
      'Apoiamos desde o discovery até o go-live: escolha de arquitetura, integrações entre sistemas, governança de APIs e boas práticas de engenharia.',
    icon: '🧭',
    tag: 'Estratégia + execução',
  },
  {
    title: 'Desenvolvimento de landing pages',
    description:
      'Landing pages leves, responsivas e focadas em conversão, prontas para rodar campanhas de mídia e experimentos de produto.',
    icon: '📈',
    tag: 'Performance & métricas',
  },
  {
    title: 'Serviços web & APIs',
    description:
      'Desenho e implementação de serviços REST/HTTP, integrações com ERPs e sistemas legados, autenticação e observabilidade.',
    icon: '🔗',
    tag: 'Integração',
  },
  {
    title: 'Aplicativos mobile',
    description:
      'Apps mobile com experiência fluida, alinhados à identidade visual da sua marca e integrados ao seu ecossistema atual.',
    icon: '📱',
    tag: 'Mobile-first',
  },
];

export const Services: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <Section id="services" ref={ref as React.RefObject<HTMLElement>}>
      <SectionTitle>Serviços</SectionTitle>
      <SectionSubtitle>
        Cada projeto é único, mas nossa forma de trabalhar é constante: entendimento profundo do
        contexto, arquitetura simples e código com padrão de produto, não de protótipo.
      </SectionSubtitle>

      <ServicesGrid $visible={isVisible}>
        {SERVICES.map((service) => (
          <ServiceCard key={service.title}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ServiceTag>{service.tag}</ServiceTag>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
};