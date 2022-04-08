import React from "react";
import * as Styled from "./styles";
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";


export default function Tasks() {
  const theme = useTheme();
  return(
    <Styled.BoxAddTasks>
       <Feather name="alert-triangle" size={24} color={theme.colors.sucess} />
         <Styled.TitleTask>
           Lavar o carro
         </Styled.TitleTask>
         <Styled.TrashIcon>
         <Ionicons name="trash" size={24} color={theme.colors.love} />
         </Styled.TrashIcon>
       
       </Styled.BoxAddTasks>
  );
}