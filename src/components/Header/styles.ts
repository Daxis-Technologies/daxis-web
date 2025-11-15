import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    to bottom,
    rgba(2, 6, 23, 0.92),
    rgba(2, 6, 23, 0.88),
    transparent
  );

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    background: linear-gradient(
      to bottom,
      rgba(249, 250, 251, 0.98),
      rgba(249, 250, 251, 0.92),
      transparent
    );
  `}

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0.9rem 2rem;
  }
`;

export const LogoWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const LogoMark = styled.span`
  font-family: monospace;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.35rem;
  line-height: 1;
`;

export const LogoText = styled.span`
  font-size: 1rem;
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  position: relative;
  opacity: 0.8;
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.35rem;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.18s ease-out;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-1px);

    &::after {
      width: 100%;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FontButtons = styled.div`
  display: inline-flex;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceMuted};

  button {
    padding: 0.15rem 0.55rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: background 0.15s ease-out, color 0.15s ease-out;

    &:hover {
      background: ${({ theme }) => theme.colors.accentSoft};
      color: ${({ theme }) => theme.colors.primary};
    }

    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export const ToggleButton = styled.button`
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 0.95rem;
  transition: background 0.2s ease-out, transform 0.15s ease-out;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.accentSoft};
  }
`;