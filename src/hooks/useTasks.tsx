import React, { createContext, useCallback, useContext } from 'react';
import api from "../services/api/api";



interface ITasksContext {
    addTasks: (id:string, task:string) =>  Promise<any>;
    getTasks: () => Promise<any>;
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FC = ({ children }) => {

    const addTasks = useCallback(async(id: string, task:string) => {
        const response = await api.post('tasks', { id, task });

        return response.data;
    }, []);

    const getTasks = useCallback (async() => {
        const response = await api.get('tasks');

        return response.data;
    }, []);

    return (
        <TasksContext.Provider
            value={{
                addTasks,
                getTasks
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