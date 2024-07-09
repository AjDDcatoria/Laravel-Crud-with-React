import * as React from "react";
import apiServices from "../services/apiServices";

interface TaskData {
    id: string;
    title: string;
    description: string;
    completed: 0 | 1;
    created_at: string;
    updated_at: string;
}

interface TaskContextType {
    taskList: TaskData[];
    updateContext: () => void;
}

const TaskContext = React.createContext<TaskContextType>(undefined);

export const TaskProvider: React.FC = ({ children }) => {
    const [taskList, setTaskList] = React.useState<TaskData[]>([]);

    const fetchTaskList = () => {
        apiServices
            .get<{ data: TaskData[] }>("get-task")
            .then((res) => {
                setTaskList(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    React.useEffect(() => {
        fetchTaskList();
    }, []);

    const updateContextData = () => {
        fetchTaskList();
    };

    return (
        <TaskContext.Provider value={{ taskList, updateContextData }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = React.useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContex must be used with in a taskProvider");
    }
    return context;
};
