import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { mensagemErro } from '../services/api';
import { salvarUsuario } from '../services/usuario';
import {
  Button, Container, Erro, Footer, Form, Input, Marca, StyledLink, Title, Voltar,
} from '../components2/AuthLayout';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    if (!nome.trim() || !email.trim() || !password) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (password.length < 6) {
      setErro('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmar) {
      setErro('As senhas não conferem.');
      return;
    }

    setEnviando(true);
    try {
      await api.post('/auth/register', {
        nome: nome.trim(),
        email: email.trim(),
        password,
      });

      // Já entra direto depois de cadastrar
      const login = await api.post('/auth/login', { email: email.trim(), password });
      salvarUsuario(login.data.user);
      navigate('/home');
    } catch (error) {
      setErro(mensagemErro(error, 'Erro ao cadastrar usuário'));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container>
      <Marca to="/">Maricá ConecTOUR</Marca>
      <Form onSubmit={handleSubmit} noValidate>
        <Title>Criar conta</Title>
        <Input
          type="text"
          placeholder="Nome"
          autoComplete="name"
          aria-label="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          autoComplete="email"
          aria-label="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha (mínimo 6 caracteres)"
          autoComplete="new-password"
          aria-label="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmar senha"
          autoComplete="new-password"
          aria-label="Confirmar senha"
          value={confirmar}
          onChange={e => setConfirmar(e.target.value)}
        />

        {erro && <Erro role="alert">{erro}</Erro>}

        <Button type="submit" disabled={enviando}>
          {enviando ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
        <Footer>
          Já tem uma conta?
          <StyledLink to="/login">Entrar</StyledLink>
        </Footer>
      </Form>
      <Voltar to="/">Voltar para o site</Voltar>
    </Container>
  );
};

export default Cadastro;
