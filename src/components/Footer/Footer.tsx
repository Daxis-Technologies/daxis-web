import React from 'react';
import { FooterBar, FooterInner, FooterText } from './styles';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterBar>
      <FooterInner>
        <FooterText>© {currentYear} D-Axis. Todos os direitos reservados.</FooterText>
        <FooterText>Desenvolvido por D-Axis.</FooterText>
      </FooterInner>
    </FooterBar>
  );
};