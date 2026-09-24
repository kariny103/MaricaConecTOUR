import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { mensagemErro } from '../services/api';
import { salvarUsuario } from '../services/usuario';
import {
  Button, Container, Erro, Footer, Form, Input, Marca, StyledLink, Title, Voltar,
} from '../components2/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (!email || !password) {
      setErro('Preencha todos os campos.');
      return;
    }

    setEnviando(true);
    try {
      const response = await api.post('/auth/login', {
        email: email.trim(),
        password,
      });

      salvarUsuario(response.data.user);
      navigate('/home');
    } catch (error) {
      setErro(mensagemErro(error, 'Email ou senha inválidos'));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container>
      <Marca to="/">Maricá ConecTOUR</Marca>
      <Form onSubmit={handleSubmit} noValidate>
        <Title>Entrar</Title>

        <Input
          type="email"
          placeholder="E-mail"
          autoComplete="email"
          aria-label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          autoComplete="current-password"
          aria-label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {erro && <Erro role="alert">{erro}</Erro>}

        <Button type="submit" disabled={enviando}>
          {enviando ? 'Entrando...' : 'Entrar'}
        </Button>

        <Footer>
          Não tem uma conta?
          <StyledLink to="/cadastro">Cadastre-se</StyledLink>
        </Footer>
      </Form>
      <Voltar to="/">Voltar para o site</Voltar>
    </Container>
  );
};

export default Login;
