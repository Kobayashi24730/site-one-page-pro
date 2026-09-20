import React from "react";
import { ReactDOM } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const queryCLient = new queryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            refreshInterval: 1000 * 60 *50,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
