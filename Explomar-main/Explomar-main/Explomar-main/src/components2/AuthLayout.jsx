import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Peças visuais compartilhadas pelas telas de Login e Cadastro

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--mc-marinho) 0%, #164B73 55%, var(--mc-turquesa) 130%);
`;

export const Marca = styled(Link)`
  color: #fff;
  font-family: var(--mc-fonte-titulo);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
`;

export const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 380px;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--mc-borda);
  border-radius: var(--mc-raio-sm);
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline: 2px solid var(--mc-turquesa);
    border-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background: var(--mc-laranja);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--mc-laranja-escuro);
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

export const Erro = styled.p`
  color: #c0392b;
  background: #fdecea;
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

export const StyledLink = styled(Link)`
  color: var(--mc-turquesa);
  font-weight: 600;
  text-decoration: underline;
  margin-left: 0.3rem;

  &:hover {
    color: var(--mc-marinho);
  }
`;

export const Voltar = styled(Link)`
  color: #fff;
  text-decoration: underline;
`;
