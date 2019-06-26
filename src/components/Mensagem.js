import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

const moment = require('moment');
import 'moment/locale/pt-br';
moment.locale('pt-BR');

export default class Mensagem extends Component {
    render() {
        const { item } = this.props;

        return (
            <View style={item.fromWS ? styles.mensagemRecebida : styles.mensagemEnviada}>
                {item.fromWS ? <Text style={styles.mensagemTitle}>Parrot</Text> : <Text style={styles.mensagemTitle}>Eu</Text>}
                <Text>{this.props.item.mensagem}</Text>
                <View style={styles.mensagemHora}>
                    <Text style={{fontSize: 11}}>{moment(this.props.item.hora).format('LT')}</Text>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    mensagemEnviada: {
        flex: 1,
        padding: 10,
        maxWidth: '65%',
        backgroundColor: '#39a1f4',
        elevation: 4,
        borderRadius: 10,
    }, 
 
    mensagemRecebida: {
        flex: 1,
        maxWidth: '65%',
        padding: 10, 
        backgroundColor: '#d5d9de',
        elevation: 4,
        borderRadius: 10, 

    },
    mensagemTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    mensagemHora: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    }
})