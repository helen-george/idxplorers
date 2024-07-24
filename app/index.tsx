import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


import  Header from '@/components/Header';
import styled from 'styled-components/native';

const Page = styled.View`
  display: flex;
  align-self: stretch;
  background-color: #FFFFFF;
  height: 100%;
`;

const Card = styled.View`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
`;

const MainCard = styled.View`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const Bold = styled.Text`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 38.4px;
`;

const HeavySm = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 650;
  line-height: 18.2px;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const StyledInput = styled.TextInput`
  display: flex;
  padding: 16px 12px;
  align-items: flex-start;
   
  align-self: stretch;
  border-radius: 5px;
  border: 2px solid #C7C7CA;
`;

const StyledPasswordContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const handlePasswordValidation = (password: string) => {
  console.log(password);
  if (password.length < 8) {
    return false;
  }
  return true;
}


const Index = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const onChangeText = (text: string) => {
    console.log(password);
    setPassword(text);
    setIsPasswordValid(handlePasswordValidation(password));
  };

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Page>
        <Header />
        <Card>
          <MainCard>
            <Bold>Add a username and password</Bold>
            <InputContainer>
              <HeavySm>Username</HeavySm>
              <StyledInput />
            </InputContainer>
            <StyledPasswordContainer>
              <HeavySm>Password</HeavySm>
              <StyledInput 
                secureTextEntry
                onChangeText={onChangeText}
                value={password}
              />
            </StyledPasswordContainer>
          </MainCard>
        </Card>
      </Page>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  
});

export default Index;
