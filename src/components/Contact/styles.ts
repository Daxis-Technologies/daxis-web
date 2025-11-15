import styled from "styled-components";

export const ContactGrid = styled.div<{ $visible: boolean }>`
  margin-top: 2.5rem;
  display: grid;
  gap: 1.5rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "18px")});
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
`;

export const ContactInfo = styled.aside`
  padding: 1.5rem 1.4rem;
  border-radius: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};

  h3 {
    margin: 0 0 0.7rem;
    font-size: 1.05rem;
  }

  p {
    margin: 0 0 0.9rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ul {
    margin: 0 0 0.9rem;
    padding-left: 1.1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};

    li + li {
      margin-top: 0.2rem;
    }
  }
`;

export const HelperText = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.8;
`;

export const ContactForm = styled.form`
  padding: 1.5rem 1.4rem;
  border-radius: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: grid;
  gap: 0.95rem;
`;

export const FieldGroup = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const baseField = `
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid var(--border-color);
  padding: 0.7rem 0.8rem;
  font-size: 0.9rem;
  background: var(--bg-color);
  color: inherit;
  outline: none;
  transition: border-color 0.16s ease-out, box-shadow 0.16s ease-out, background 0.16s ease-out;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 1px var(--primary-color);
    background: var(--bg-focus);
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  --border-color: ${({ theme }) => theme.colors.border};
  --bg-color: ${({ theme }) => theme.colors.surfaceMuted};
  --bg-focus: ${({ theme }) => theme.colors.surfaceMuted};
  --primary-color: ${({ theme }) => theme.colors.primary};

  ${baseField}
`;

export const TextArea = styled.textarea`
  --border-color: ${({ theme }) => theme.colors.border};
  --bg-color: ${({ theme }) => theme.colors.surfaceMuted};
  --bg-focus: ${({ theme }) => theme.colors.surfaceMuted};
  --primary-color: ${({ theme }) => theme.colors.primary};

  resize: vertical;
  min-height: 6rem;

  ${baseField}
`;

export const Select = styled.select`
  --border-color: ${({ theme }) => theme.colors.border};
  --bg-color: ${({ theme }) => theme.colors.surfaceMuted};
  --bg-focus: ${({ theme }) => theme.colors.surfaceMuted};
  --primary-color: ${({ theme }) => theme.colors.primary};

  ${baseField}
`;

export const SubmitButton = styled.button`
  margin-top: 0.3rem;
  border-radius: 999px;
  border: none;
  padding: 0.8rem 1.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  justify-self: flex-start;
  transition: transform 0.15s ease-out, box-shadow 0.16s ease-out,
    opacity 0.16s ease-out;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.45);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.6);
    opacity: 0.96;
  }
  @media (max-width: 900px) {
    justify-self: center;
    width: 100%;
    max-width: 240px;
  }
`;
