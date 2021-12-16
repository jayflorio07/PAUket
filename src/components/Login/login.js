import React from 'react';

import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './loginElements';

import { Button } from "../ButtonElements4";


const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
              <FormH1>LOG IN WITH ECAMPUS:</FormH1>
              <FormLabel htmlFor='for'>USER:</FormLabel>
              <FormInput type='user' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Button Link to ={{ pathname: "https://class.adelphi.edu/account_tools/username.php"}} target="_blank" aria-label="password">Forgot Username?</Button>

              <Button Link to ={{ pathname: "https://portal.adelphi.edu/retrieve-password/?email="}} target="_blank" aria-label="password">Forgot password?</Button>

            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
