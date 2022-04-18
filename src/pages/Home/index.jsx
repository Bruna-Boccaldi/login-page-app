import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDilsAZGZrhoMFXsBXAKlbUWG7cKLlwpFY",
    authDomain: "login-page-app-2ff48.firebaseapp.com",
    projectId: "login-page-app-2ff48",
});

export const Home = () => {
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

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    async function deleteUser(id) {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    return (
        <div>
            <ul>
                {users.map((user) => {
                    return (
                        <>
                            <li>{user.birthDate}</li>
                            <li>{user.email}</li>
                            <li>{user.firstName}</li>
                            <li>{user.lastName}</li>
                            <li>{user.password}</li>
                            <button onClick={() => deleteUser(user.id)}>Deletar</button>
                        </>
                    );
                })}
            </ul>
            <div className='text-center'>
                <Link to="/login">Return</Link>
            </div>

        </div>
    );
};
