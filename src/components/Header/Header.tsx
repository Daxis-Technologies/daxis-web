import React from 'react';
import { ThemeName } from '../../App';
import {
  HeaderBar,
  HeaderInner,
  LogoWrapper,
  Nav,
  NavLink,
  Controls,
  ToggleButton,
  FontButtons,
  LogoMark,
  LogoText,
} from './styles';

interface HeaderProps {
  theme: ThemeName;
  onToggleTheme: () => void;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onIncreaseFont,
  onDecreaseFont,
}) => {
  return (
    <HeaderBar>
      <HeaderInner>
        <LogoWrapper href="#top">
          <LogoMark>{'>{'}_</LogoMark>
          <LogoText>D-Axis</LogoText>
        </LogoWrapper>

        <Nav>
          <NavLink href="#about">Sobre nós</NavLink>
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#partners">Sócios</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </Nav>

        <Controls>
          <FontButtons>
            <button type="button" onClick={onDecreaseFont} aria-label="Reduzir fonte">
              A-
            </button>
            <button type="button" onClick={onIncreaseFont} aria-label="Aumentar fonte">
              A+
            </button>
          </FontButtons>

          <ToggleButton type="button" onClick={onToggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? '☀️' : '🌙'}
          </ToggleButton>
        </Controls>
      </HeaderInner>
    </HeaderBar>
  );
};