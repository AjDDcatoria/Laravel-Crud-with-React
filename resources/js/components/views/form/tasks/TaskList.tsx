import React from "react";
import { useTaskContext } from "../../../context/TaskContext";
import { truncateText } from "../../../utils/stirngs";
import apiServices from "../../../services/apiServices";

interface TaskType {
    title: string;
    id: string;
    description: string;
}

function TaskList() {
    const { taskList, updateContextData } = useTaskContext();

    const markAsDone = (id: string) => {
        apiServices
            .patch(`/update-task/${id}`)
            .then(() => {
                updateContextData();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deleteTask = (id: string) => {
        apiServices
            .delete(`/delete-task/${id}`)
            .then(() => {
                updateContextData();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderList = (task: TaskType) => {
        const { title, id, description } = task;
        return (
            <div className="rounded-xl bg-base-100/60 p-6" key={id}>
                <div className="flex justify-between">
                    <div>
                        <div className="text-xl">{title}</div>
                        <div className="text-sm">
                            {truncateText(description, 25)}
                        </div>
                    </div>
                    <div>
                        <ul className="menu menu-horizontal bg-base-200/40 menu-xs rounded-box p-2">
                            <li>
                                <div
                                    className="tooltip"
                                    data-tip="Mark as Done"
                                >
                                    <svg
                                        onClick={() => markAsDone(id)}
                                        width={15}
                                        height={15}
                                        fill="none"
                                        className="stroke-current"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="tooltip" data-tip="Delete">
                                    <svg
                                        onClick={() => deleteTask(id)}
                                        width={15}
                                        height={15}
                                        className="stroke-current"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card bg-slate-700 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-gray-300 text-3xl">Task</h2>
                <p className="text-gray-300/60">
                    Stay on top of your to-dos and boost productvity with ease.
                </p>
                <div className="flex flex-col gap-2 mt-5 max-h-[25rem] overflow-y-auto py-5">
                    {taskList.map(renderList)}
                </div>
            </div>
        </div>
    );
}

export default TaskList;
