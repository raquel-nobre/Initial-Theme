import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import Tasks from '../../components/Tasks';
import useTasks from '../../hooks/useTasks';
import * as Styled from "./styles";


export default function Home() {
  const {addTasks} = useTasks();

  const [task, setTask] = useState('');

  const handleAddTask = () => {
    try {
      addTasks('fl23b4', task);
      Alert.alert('Opa', 'Deu certo');
    } catch (error) {
      Alert.alert('Opa', 'Não foi possivel adicionar a tarefa');

    }
  }

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
           onChangeText={setTask}
           
         />
         <Styled.AddTaskButton onPress={handleAddTask}>
           <Styled.ButtonTitle>Adicionar</Styled.ButtonTitle>
         </Styled.AddTaskButton>
       </Styled.Header>

       <Styled.BoxInfoTasks>
         <Styled.ListTasks>Lista de Tarefas</Styled.ListTasks>
         <Styled.ListTasks green>5 Tarefas</Styled.ListTasks>
       </Styled.BoxInfoTasks> 

       <Styled.TasksList>
         <Tasks/>
       </Styled.TasksList>

   </Styled.Container>
  );
}




