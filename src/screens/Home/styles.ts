
import styled, {css} from "styled-components/native";

interface TitleProps {
    green?: boolean;
}


export const Container = styled.View`
flex: 1;
padding: 20px;
background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
flex-direction: row;
margin-top: 65px;
width: 100%;
`;

export const AddTaskInput =  styled.TextInput`
background-color: ${({theme}) => theme.colors.cloudy};
width: 70%;
border-radius: 10px;
height: 45px;
color: ${({theme}) => theme.colors.love};
padding: 10px;
`;

export const AddTaskButton = styled.TouchableOpacity`
width: 30%;
background-color: ${({theme}) => theme.colors.sucess};
border-radius: 10px;
justify-content: center;
align-items: center;
`;

export const ButtonTitle = styled.Text`
color: ${({theme}) => theme.colors.peace};
font-weight: 600;
font-style: italic;
font-size: 15px;
//font-family
`;

export const BoxInfoTasks = styled.View`
justify-content: space-between;
flex-direction: row;
height: 50px;
margin-top: 10px;
border-radius: 10px;
align-items: center;
`;

export const ListTasks = styled.Text<{green?: boolean}>`
padding: 10px;
color: ${({theme}) => theme.colors.peace};

${({green})=> green && css`
color: ${({theme}) => theme.colors.sucess};
`}
`;

export const TasksList = styled.View``;


