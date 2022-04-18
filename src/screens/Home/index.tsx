import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import Tasks from '../../components/Tasks';
import useTasks from '../../hooks/useTasks';
import * as Styled from "./styles";

interface ItaskList {
  id: string; 
  task: string;
}


export default function Home() {
  const {addTasks, getTasks} = useTasks();

  const [task, setTask] = useState('');
  const [myTasks, setMyTasks] = useState<ItaskList[]>([]);
  console.log(myTasks);

  const handleAddTask = async () => {
    try {
      const id = new Date().getTime().toString(); 
      await addTasks(id, task);
    } catch (error) {
      Alert.alert('Opa', 'Não foi possivel adicionar a tarefa');

    }
  }

   const getTaskList = async () => {
     try {
       const response = await getTasks();

       setMyTasks(response);
     } catch (error) {
      Alert.alert('Opa', 'Não foi possivel adicionar a tarefa');

    }
   }

   useEffect(() => {
    getTaskList();
   }, []);

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




