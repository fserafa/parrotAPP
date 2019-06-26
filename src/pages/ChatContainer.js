import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Mensagens from '../components/Mensagens';



export default class ChatContainer extends Component {

    state = {
        mensagensEnviadas: [],
        mensagensRecebidas: [],
        mensagens: []
    }

    handleSendMsg = (msg) => {
        const ws = new WebSocket('ws://echo.websocket.org');

        ws.onopen = () => {
            msg = {
                fromWS: false,
                hora: Date.now(),
                mensagem: msg
            }
            this.setState({ mensagens: [...this.state.mensagens, msg ] });

            ws.send(msg.mensagem);

        };

        ws.onmessage = (e) => {
            let mensagem = {
                fromWS: true,
                hora: e.timeStamp,
                mensagem: e.data
            }
            this.setState({ mensagens: [...this.state.mensagens, mensagem ] });
        };

        ws.onerror = (e) => {
            console.error(e.message);
        };

        ws.onclose = (e) => {
            console.error(e.code, e.reason);
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerMensagens}>
                    <Mensagens mensagens={this.state.mensagens} />
                </View>
                <Input handleSendMsg={this.handleSendMsg} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb' 
    },
    containerMensagens: { 
        flex: 1,  
        padding: 15
    } 
})  