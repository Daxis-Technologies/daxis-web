import styled from 'styled-components';

export const FooterBar = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 1.5rem 2rem;
  margin-top: 2rem;
`;

export const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.span``;