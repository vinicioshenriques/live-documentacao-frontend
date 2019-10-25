import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import { FaCheckCircle } from 'react-icons/fa';

import Input from '../../src/components/Input';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';

storiesOf('Components|Modal', module).add(
  'with sucess message and icon',
  () => (
    <Modal
      open={true}
      icon={<FaCheckCircle size={48} color="#04D361" />}
      title={`Bem-vindo a Rocketseat`}
      success
      closeAction={() => {}}
    >
      <p>
        Seu usuário de acesso é: <em>Vinicios</em> e agora só falta confirmar
        seu email (
        <a href={`mailto:vinicios@hotmail.com`}>vinicios@gmail.com</a>).
      </p>
      <footer>
        <p>
          Confira sua caixa de entrada pelo email que enviamos contendo o link
          de confirmação.
        </p>
      </footer>
    </Modal>
  ),
  {
    info: {
      text: 'O modal utiliza dois childrens, sendo o segundo sempre um footer',
    },
  }
);
