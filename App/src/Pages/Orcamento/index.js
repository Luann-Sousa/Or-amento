import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native'
import { Container, TitileInput, Inputform, BtnSubmintForm, TxtSubmintForm, LoadingArea } from './styles';
import api from '../../config/api'
export default function Orcamento() {
    //vamos pegar dados dos campos input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsApp, setWatsApp] = useState("");
    const [projeto, setProjeto] = useState("");
    const [loading, setLoading] = useState(false)

    const addOrcamento = async () => {
        setLoading(true)
        await api.post('/orcamento', {
            name,
            email,
            phone,
            whatsApp,
            projeto,
        }).then((response) => {
            Alert.alert("", response.data.message)
            setLoading(false);

        }).catch((err) => {
            if (err = response.data.message) {
                Alert.alert("", response.data.message);
                setLoading(false);

            } else {
                Alert.alert("", "Error: por favor tente mais tarde ou entre em contato com a admin !")
                setLoading(false);
            }
        })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <TitileInput>Nome :</TitileInput>
                <Inputform
                    placeholder=" Nome Completo"
                    autoCorret={false}
                    autoCapitalize="none"
                    value={name}
                    onChangeText={text => setName(text)}
                />

                <TitileInput>E-mail :</TitileInput>
                <Inputform
                    placeholder=" Informe seu email mais utilizado"
                    autoCorret={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />


                <TitileInput>Telefone :</TitileInput>
                <Inputform
                    placeholder="  (xx) xxxx-xxxx"
                    autoCorret={false}
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />



                <TitileInput>WhatsApp :</TitileInput>
                <Inputform
                    placeholder=" (xx) xxxx-xxxx"
                    autoCorret={false}
                    value={whatsApp}
                    onChangeText={text => setWatsApp(text)}
                />


                <TitileInput>Projeto :</TitileInput>
                <Inputform
                    placeholder=" Fale um pouco sobre seu projeto amigo"
                    autoCorret={false}
                    value={projeto}
                    onChangeText={text => setProjeto(text)}
                />
                <BtnSubmintForm disabled={loading} onPress={addOrcamento}>
                    <TxtSubmintForm>Orçamento</TxtSubmintForm>
                </BtnSubmintForm>

                {loading &&
                    <LoadingArea>
                        <ActivityIndicator size="large" color="#FFF"/>

                    </LoadingArea>}
            </Container>

        </ScrollView>
    )
}