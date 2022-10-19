import { useState } from "react";
import { db } from "../services/firebase";
import dbContext from "./context";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function FirestoreContext(props) {
    const { children } = props;

    const [clientes, setclientes] = useState([]);

    const getUsers = async () => {
        const snap = await getDocs(collection(db, "clientes"))
        const lstUsers = []
        snap.forEach((i) => {
            lstUsers.push({ ...i.data(), id: i.id })
        })
        setclientes(lstUsers)
    }

    const addClient = async (n, a, d, t, c) => {
        await setDoc(doc(db, " clientes "), {
            nombre: n,
            apellido: a,
            domicilio: d,
            telefono: t,
            correo: c,
        })
    }
    const updateClient = async (id, n, a, d, t, c) => {
        await updateDoc(doc(db, "clientes", id), {
            nombre: n,
            apellido: a,
            direccion: d,
            telefono: t,
            correo: c,
        })
    }
    const deleteClient = async(id)=> {
        await deleteDoc(doc(db,"clientes",id))
    }
    return (
        <dbContext.Provider value={{ lstClientes:clientes, getUsers, addClient, updateClient, deleteClient }}>{children}</dbContext.Provider>
    )
}