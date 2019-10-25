import React, { useState } from 'react';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { storiesOf } from '@storybook/react';

import Input from '../../src/components/Input';

storiesOf('Components|Input', module)
  .add('default', () => (
    <Input autoComplete="off" label="Nome completo" name="name" />
  ))
  .add('with icon', () => (
    <Input icon="MdEmail" label="Seu email" name="email" />
  ))
  .add('toggle password', () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    function changeState() {
      setPasswordVisible(!passwordVisible);
    }

    return (
      <Input
        icon="MdLock"
        name="password"
        type={passwordVisible ? 'text' : 'password'}
      >
        <button
          className="btn__transparent"
          type="button"
          onClick={changeState}
          tabIndex="-1"
        >
          {passwordVisible ? (
            <MdVisibility size={18} fill="#5E5C66" />
          ) : (
            <MdVisibilityOff size={18} fill="#fff" />
          )}
        </button>
      </Input>
    );
  });
