import React, { FormEvent, useState } from 'react';
import { Section, SectionSubtitle, SectionTitle } from '../../styles/layout';
import { useInView } from '../../hooks/useInView';
import {
  ContactGrid,
  ContactInfo,
  ContactForm,
  FieldGroup,
  Label,
  Input,
  TextArea,
  Select,
  SubmitButton,
  HelperText,
} from './styles';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useInView();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('Contato D-Axis:', Object.fromEntries(formData.entries()));
    setSent(true);
  };

  return (
    <Section id="contact" ref={ref as React.RefObject<HTMLElement>} aria-label="Contato">
      <SectionTitle>Contato</SectionTitle>
      <SectionSubtitle>
        Conte rapidamente o contexto do seu projeto e retornaremos com sugestões de próximos passos.
        Se preferir, você pode começar pequeno, com uma única landing page ou um serviço específico.
      </SectionSubtitle>

      <ContactGrid $visible={isVisible}>
        <ContactInfo>
          <h3>Vamos desenhar o próximo passo do seu produto?</h3>
          <p>
            Envie algumas linhas sobre o cenário atual, quais sistemas já existem, e qual o objetivo
            principal. A partir disso, conseguimos propor formatos de trabalho enxutos.
          </p>

          <ul>
            <li>Projetos ponta a ponta</li>
            <li>Squad complementar ao seu time</li>
            <li>Pacotes de horas mensais</li>
          </ul>

          <HelperText>
            Os dados enviados por este formulário não são compartilhados com terceiros.
          </HelperText>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" placeholder="Seu nome completo" required />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="voce@empresa.com"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="company">Empresa (opcional)</Label>
            <Input id="company" name="company" placeholder="Nome da empresa" />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="interest">Principal interesse</Label>
            <Select id="interest" name="interest" defaultValue="">
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="consulting">Consultoria para implementação de software</option>
              <option value="landing">Desenvolvimento de landing page</option>
              <option value="web_services">Serviços web & APIs</option>
              <option value="mobile">Aplicativo mobile</option>
              <option value="other">Outro</option>
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="message">Resumo do projeto</Label>
            <TextArea
              id="message"
              name="message"
              rows={4}
              placeholder="Conte rapidamente o contexto, objetivos e prazos desejados."
              required
            />
          </FieldGroup>

          <SubmitButton type="submit">
            {sent ? 'Recebido! Enviar novamente' : 'Enviar mensagem'}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </Section>
  );
};