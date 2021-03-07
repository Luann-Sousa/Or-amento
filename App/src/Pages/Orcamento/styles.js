import styled from 'styled-components/native';


export const Container =  styled.SafeAreaView`
    flex: 1;
    justify-content:flex-start;
    padding: 15px;
    background-color: #FFF;
`;

export const TitileInput = styled.Text`
    padding: 1px;
    color: #111;
    font-size:22px;


`;

export const Inputform = styled.TextInput`
    width:100%;
    padding:10px;
    margin:10px;
    border-color: #171941;
    border-width: 1px;
    border-radius:8px;
    background-color: #fff;
    font-size:18px;
    color:#222;

`;

export const BtnSubmintForm = styled.TouchableOpacity`
    width:100%;
    height:45px;
    border-radius:8px;
    background-color: #050CD3;
    align-items: center;
    justify-content:center;
    
`;

export const TxtSubmintForm = styled.Text`
    color: #FFF;
    font-size:22px;
`;

export const LoadingArea = styled.View`
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.6);
    align-items:center;
    justify-content:center;
`;