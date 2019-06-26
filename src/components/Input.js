import React, { Component } from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Input extends Component {
  state = {
    mensagem: ''
  }


  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.mensagemInput}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Mensagem' 
          placeholderTextColor='#999'
          value={this.state.mensagem}
          onChangeText={mensagem => this.setState({ mensagem })}
        /> 

        <TouchableOpacity style={styles.buttonEnviar} onPress={() => {
          this.props.handleSendMsg(this.state.mensagem)
          this.setState({ mensagem: '' });
        }}>
          <Text style={styles.textEnviar}>Enviar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,

  },
  mensagemInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,  
    marginRight: 5,
    fontSize: 15
 
  }, 
  buttonEnviar: {
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 10,   
   
  },
  textEnviar: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
})

