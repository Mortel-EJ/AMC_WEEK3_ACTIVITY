import React from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeText0] = React.useState('NAME:');
  const [age, onChangeText1] = React.useState('AGE:');
  const [address, onChangeText2] = React.useState('ADDRESS:');
  const [school, onChangeText3] = React.useState('SCHOOL:');
  const [course, onChangeText4] = React.useState('COURSE:');
  const [email, onChangeText5] = React.useState('EMAIL:');
  const [conNo, onChangeText6] = React.useState('CONTACT NO:');
  const [aboutMe, onChangeText] = React.useState('ABOUT ME:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.RG5CE5LpaefvcNh-p-vA_AHaKV?w=203&h=284&c=7&r=0&o=5&pid=1.7',
        }}
      />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText0}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText4}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText5}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText6}
          value={conNo}
        />

        <TextInput
          editable
          multiline
          numberOfLines={5}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={aboutMe}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    marginLeft: 150,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    marginLeft: 150,
    padding: 10,
    borderWidth: 1,
    margin: 12,
  },
  logo: {
    flexDirection: 'left',
    flexWrap: 'flex',
    width: 130,
    height: 130,
  },
});

export default TextInputExample;
