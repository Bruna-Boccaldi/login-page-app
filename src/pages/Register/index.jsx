import { firebaseApp } from "../../dataBase/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseApp);
    const usersCollectionRef = collection(db, "users");

    async function criarDado() {
        try {
            const user = await addDoc(collection(db, "users"), {
                birthDate,
                email,
                firstName,
                lastName,
                password,
            });

            console.log("dados salvos com sucessos", user);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <div>
                <input
                    type="date"
                    placeholder="Birth date (yyyy-mm-dd)"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </div>

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
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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

            <div><button onClick={criarDado}>Register!</button></div>

            <div className='text-center'>
                <Link className="text2" to="/login">Return</Link>
            </div>

        </div>
    );
};
