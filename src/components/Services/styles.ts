import styled from 'styled-components';

export const ServicesGrid = styled.div<{ $visible: boolean }>`
  margin-top: 2.5rem;
  display: grid;
  gap: 1.3rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '16px')});
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ServiceCard = styled.article`
  padding: 1.4rem 1.3rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.18s ease-out, box-shadow 0.18s ease-out, border-color 0.18s ease-out;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ServiceIcon = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.9rem;
  background: ${({ theme }) => theme.colors.accentSoft};
  display: grid;
  place-items: center;
  font-size: 1.3rem;
`;

export const ServiceTag = styled.span`
  align-self: flex-start;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
`;