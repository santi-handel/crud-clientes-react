import { useState,useContext } from "react"
import context from "../context/context";
export default function ButtonActualizar(){

    const {updateUser,getUsers} = useContext(context)

    const [user, setUser] = useState({
        id:"",
        nombre: "",
        apellido: "",
        direccion:"",
        numero:"",
        correo:""
    });

    const handleChange = ({target:{name,value}}) => setUser({...user,[name]:value})

    const handleActualizar = async(e) =>{
        e.preventDefault()
        try {
            await updateUser(user.id,user.nombre,user.apellido,user.direccion,user.numero,user.email)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalActualizar">
            Actualizar
            </button>


            <div className="modal fade" id="exampleModalActualizar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar cliente</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="text-center my-5">
                            <div className="form-signin w-25 m-auto">
                                <form  onSubmit={handleActualizar}>
                                <input className="form-control my-1" name="id"  onChange={handleChange} placeholder="id"></input>
                                <input className="form-control my-1" name="nombre"  onChange={handleChange} placeholder="nombre"></input>
                                <input className="form-control my-1" name="apellido" onChange={handleChange} placeholder="apellido"></input>
                                <input className="form-control my-1" name="direccion" onChange={handleChange}placeholder="direccion" ></input>
                                <input className="form-control my-1" name="numero" onChange={handleChange}placeholder="numero"></input>
                                <input className="form-control my-1" type="email" name="correo" onChange={handleChange} placeholder="email"></input>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" >Actualizar Cliente</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}