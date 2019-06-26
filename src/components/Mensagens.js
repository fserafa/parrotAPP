import React, { Component } from 'react';

import { View, FlatList, StyleSheet } from 'react-native';


import Mensagem from './Mensagem';


export default class Mensagens extends Component {
    render() {
        
        return (
            <View>
                <FlatList
                    data={this.props.mensagens}
                    ref = "flatList"
                    onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={item.fromWS ? styles.mensagemRecebida : styles.mensagemEnviada}>
                            <Mensagem item={item} />
                        </View>
                    )}
                />

            </View > 
        )
    }
} 

const styles = StyleSheet.create({
    mensagemRecebida: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    mensagemEnviada: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10

    }
})