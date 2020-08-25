import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
