import React, { useState } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../asyncStorage/Storage';

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cidade, setCidade] = useState('');

    const data = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cidade: cidade,
    };

    const onSubmit = async () => {
        await Storage.storeData(data.nome, data);
    };

    const onLog = async () => {
        await Storage.logData();
    };

    const onDelete = async () => {
        await Storage.deleteData();
    };

    return (
        <Container>
            <Content>
                <Form style={{margin: 30}}>
                    <Item>
                        <Input
                            placeholder="Nome"
                            value={nome}
                            onChangeText={v => setNome(v)}
                        />
                    </Item>
                    <Item>
                        <Input
                            placeholder="Sobrenome"
                            value={sobrenome}
                            onChangeText={v => setSobrenome(v)}
                        />
                    </Item>
                    <Item>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChangeText={v => setEmail(v)}
                        />
                    </Item>
                    <Item last>
                        <Input
                            placeholder="Cidade"
                            value={cidade}
                            onChangeText={v => setCidade(v)}
                        />
                    </Item>
                </Form>
                <Button
                    style={{margin: 10, marginLeft: 30}}
                    primary
                    onPress={onSubmit}
                >
                    <Text>
                        Salvar
              </Text>
                </Button>
                <Button
                    style={{margin: 10, marginLeft: 30}}
                    primary
                    onPress={onLog}
                >
                    <Text>
                        logar
              </Text>
                </Button>
                <Button
                    style={{margin: 10, marginLeft: 30}}
                    danger
                    onPress={onDelete}
                >
                    <Text>
                        excluir
              </Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Cadastro;