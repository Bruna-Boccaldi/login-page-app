import { firebaseApp, auth } from "../../dataBase/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function connect() {
            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            window.location.href = "/home";
            
        }

    return (
        <div>
            <div>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div><button onClick={connect}>Login!</button></div>

            <div className='text-center'>
                <Link className="text2" to="/register">Register</Link>
            </div>

        </div>
    );
};

