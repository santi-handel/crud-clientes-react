import { useContext,useEffect } from "react";
import context from "../context/context";
import DataTable from "react-data-table-component";

export default function Tabla(){
    const {getUsers,lstClientes} = useContext(context);

    useEffect( () => {
        getUsers();
    }, []);

    const columns = [{
      name : "id",
      selector: row => row.id,
      sortable: true},
      {
      name : "nombre",
      selector: row => row.nombre,
      sortable: true
    },{
      name : "apellido",
      selector: row => row.apellido,
      sortable: true
    },{
      name : "direccion",
      selector: row => row.direccion,
      sortable: true
    },{
      name : "telefono",
      selector: row => row.telefono,
      sortable: true
    },{
      name : "correo ",
      selector: row => row.correo,
      sortable: true
    }]


    return(
      <>
      <DataTable columns={[columns]} data={lstClientes}></DataTable>
      </>

    )
}
    

