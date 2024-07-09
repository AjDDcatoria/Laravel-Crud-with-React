import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { TaskProvider } from "./context/TaskContext";

function App() {
    return (
        <BrowserRouter>
            <TaskProvider>
                <Routes />
            </TaskProvider>
        </BrowserRouter>
    );
}

export default App;
