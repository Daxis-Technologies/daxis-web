import styled from "styled-components";

export const AboutGrid = styled.div<{ $visible: boolean }>`
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "16px")});
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  }
`;

export const AboutHighlight = styled.article`
  padding: 1.5rem 1.4rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.18s ease-out, box-shadow 0.18s ease-out,
    border-color 0.18s ease-out;
  background: radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.accentSoft},
      transparent 55%
    ),
    ${({ theme }) => theme.colors.surface};

  h3 {
    margin: 0 0 0.6rem;
    font-size: 1.15rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.95rem;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AboutItem = styled.article`
  padding: 1.2rem 1.1rem;
  border-radius: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  transition: transform 0.18s ease-out, box-shadow 0.18s ease-out,
    border-color 0.18s ease-out;
  h4 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
