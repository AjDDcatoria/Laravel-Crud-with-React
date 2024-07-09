import React from "react";
import TaskForms from "./form/TaskForms";
import TaskList from "./form/tasks/TaskList";

function Main() {
    return (
        <div className="h-dvh flex items-center justify-center">
            <div className="flex items-center  gap-20">
                <div className="w-6/12">
                    <div className="mb-4">
                        <div className="text-4xl font-semibold tracking-wider text-gray-300 mb-1">
                            Hi Aj
                        </div>
                        <div className="text-sm tracking-wider leading-5 text-gray-300/50 font-lighter">
                            Welcome back to the workspace. We miss you!
                        </div>
                    </div>
                    <TaskForms />
                </div>
                <div className="w-full">
                    <TaskList />
                </div>
            </div>
        </div>
    );
}

export default Main;
