
import React from 'react';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { TasksProvider } from './src/hooks/useTasks';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
         <Home/>
      </TasksProvider>
     
    </ThemeProvider>
    
  );
}

