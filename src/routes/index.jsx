/**
 * @author Bruna Boccaldi
 * @description Rota inicial do sistema
 * @version 1.0.0
 * @lastUpdate 07/04/2022
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/home" exact element={<Home />} />
            </Routes>
        </Router>
    );
}
