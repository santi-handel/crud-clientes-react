import { useState } from "react";
import { db } from "../services/firebase";
import dbContext from "./context";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function FirestoreContext(props) {
    const {children} = props;

    const [clientes, setclientes] = useState([]);

    const addClient = async (n, a, d, t, c) => {
        await setDoc(doc(db, " clientes "), {
            nombre: n,
            apellido: a,
            domicilio: d,
            telefono: t,
            correo: c,   
        })
    }

    return(
        <dbContext.Provider value={{}}>{children}</dbContext.Provider>
    )   
}