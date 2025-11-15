import styled from 'styled-components';

export const PartnersGrid = styled.div<{ $visible: boolean }>`
  margin-top: 2.5rem;
  display: grid;
  gap: 1.4rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '18px')});
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PartnerCard = styled.article`
  padding: 1.5rem 1.4rem;
  border-radius: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const PartnerAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accentSoft};
  display: grid;
  place-items: center;
  margin-bottom: 0.35rem;
`;

export const Placeholder = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PartnerRole = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.textMuted};
`;