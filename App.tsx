import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text ,Alert} from 'react-native';

function Cadastro () {
  const [Name, onChangeName] = React.useState('');
  const [Gender, onChangeGender] = React.useState('');
  const [Birthday, onChangeBirthday] = React.useState('');
  const [User, onChangeUser] = React.useState('');
  const [Password, onChangePassword] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [ConfirmEmail, onChangeConfirmEmail] = React.useState('');
  const [CPF, onChangeCPF] = React.useState('');
  const [Language, onChangeLanguage] = React.useState('');



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        value={Name}
        onChange={e => {
          setName({
            ...Name,
            firstName: e.target.value
          });
        }}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeGender}
        value={Gender}
        placeholder="Gênero (masculino ou feminino)"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeBirthday}
        value={Birthday}
        placeholder="Data de nascimento"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUser}
        value={User}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Senha"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmEmail}
        value={ConfirmEmail}
        placeholder="Confirmar e-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCPF}
        value={CPF}
        placeholder="CPF"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeLanguage}
        value={Language}
        placeholder="Idioma do Currículo"
      />
      <Button
      onPress={() => Alert.alert('Dados enviados com sucesso!')}
      title="Enviar"
      color="purple"
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: "10%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10,
  },
});

export default Cadastro;