import React from 'react';
import { StatusBar } from 'react-native';
import Tasks from '../../components/Tasks';
import * as Styled from "./styles";


export default function Home() {
  return (
   <Styled.Container>  
     <StatusBar
     barStyle="light-content"
     backgroundColor="red"
     />
    
       <Styled.Header>
         <Styled.AddTaskInput
           placeholder='Adicionar Tarefa'
           placeholderTextColor="#FFFFFF"
           returnKeyType='search'
           numberOfLines={1}
           maxLength={24}
         />
         <Styled.AddTaskButton>
           <Styled.ButtonTitle>Adicionar</Styled.ButtonTitle>
         </Styled.AddTaskButton>
       </Styled.Header>

       <Styled.BoxInfoTasks>
         <Styled.ListTasks>Lista de Tarefas</Styled.ListTasks>
         <Styled.ListTasks green>5 Tarefas</Styled.ListTasks>
       </Styled.BoxInfoTasks> 

       <Styled.TasksList>
         <Tasks/>
         <Tasks/>
         <Tasks/>
       </Styled.TasksList>

   </Styled.Container>
  );
}




