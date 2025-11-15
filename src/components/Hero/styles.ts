import styled, { keyframes } from "styled-components";
import { Section } from "../../styles/layout";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled(Section)`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr);
  gap: 2.5rem;
  padding-top: 5.5rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    align-items: center;
    min-height: calc(100vh - 4rem);
  }
`;

export const HeroContent = styled.div<{ $visible: boolean }>`
  max-width: 640px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
`;

export const HeroKicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.75rem;

  &::before {
    content: "";
    width: 32px;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  margin: 0 0 1rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 0 0 1.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 520px;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
`;

export const PrimaryButton = styled.a`
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: transform 0.15s ease-out, box-shadow 0.15s ease-out,
    background 0.15s ease-out;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.5);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.65);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const SecondaryButton = styled.a`
  padding: 0.8rem 1.15rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  font-size: 0.9rem;
  cursor: pointer;
  opacity: 0.9;
  transition: background 0.15s ease-out, opacity 0.15s ease-out,
    transform 0.15s ease-out;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors.accentSoft};
    transform: translateY(-1px);
  }
`;

export const HeroTagline = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const HeroVisual = styled.div<{ $visible: boolean }>`
  display: grid;
  gap: 1rem;
  align-content: flex-start;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  animation: ${({ $visible }) => ($visible ? fadeUp : "none")} 0.6s ease-out
    0.15s forwards;

  @media (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const HeroBadge = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.9rem 1rem;
  background: radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.accentSoft},
      transparent 55%
    ),
    ${({ theme }) => theme.colors.surface};
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.28);

  span {
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
