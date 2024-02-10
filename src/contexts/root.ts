import { createContext } from "react";

const RootContext = createContext({
    auth: {
        isAuthenticated: false
    }
});