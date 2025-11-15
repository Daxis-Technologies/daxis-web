import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const Section = styled.section<{ $centered?: boolean }>`
  padding: 4rem 1.5rem;
  max-width: 1120px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  ${({ $centered }) =>
    $centered &&
    `
    text-align: center;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionSubtitle = styled.p`
  max-width: 640px;
  margin: 0 auto 2.5rem;
  opacity: 0.8;
`;
