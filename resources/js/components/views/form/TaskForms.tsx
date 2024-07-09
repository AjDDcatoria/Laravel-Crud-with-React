import React from "react";
import apiServices from "../../services/apiServices";
import { useTaskContext } from "../../context/TaskContext";

function TaskForms() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const { updateContextData } = useTaskContext();

    const handleSubmit = () => {
        apiServices
            .post("/save-task", {
                title,
                description,
            })
            .then((res) => {
                setTitle("");
                setDescription("");
                updateContextData();
            });
    };

    return (
        <div className="flex flex-col gap-3 w-[400px]">
            <input
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
                type="text"
                placeholder="Title"
                className="input input-bordered w-full "
            />
            <textarea
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                className="textarea textarea-bordered min-h-52"
                placeholder="Description"
            />
            <button onClick={handleSubmit} className="btn btn-secondary">
                Save Task
            </button>
        </div>
    );
}

export default TaskForms;
