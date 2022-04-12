import React, { createContext, useCallback, useContext } from 'react';
import apiTasks from "../services/api/apiTasks";



interface ITasksContext {
    addTasks: (id:string, task:string) =>  Promise<any>;
    
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FC = ({ children }) => {

const addTasks = useCallback (async (id:string, task:string) => {
    
const response = await apiTasks.post("tasks", {id,task});
return response.data;

},[]);  

    return (
        <TasksContext.Provider
            value={{
                addTasks
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

const useTasks = (): ITasksContext => {
    return useContext(TasksContext);
};

export default useTasks;