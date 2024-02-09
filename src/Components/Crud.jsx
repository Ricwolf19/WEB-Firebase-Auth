import { Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
//añadir funcion de firebase para poder agregar un elemento a la base de datos con addDoc


export function Crud() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [id, setId] = useState('');

    const [show, setShow] = useState(false)

    const [val, setVal] = useState([])

    const value = collection(db, "patients")

    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    });

    //Funcion para crear un usuario con los parametros que elegimos
    const handleCreate = async () => {
        await addDoc(value, { firstName: fname, lastName: lname })
    };

    //Funcion para borrar un usuario con parametro de id
    const handleDelete = async (id) => {
        const deleteVal = doc(db, "patients", id)
        await deleteDoc(deleteVal)
    };

    //Funcion para poder reactualizar el formulario y con reutilizar el mismo, asi no teniendo que crear otro
    //Asignando a la vez el id y los nombres a los mismos inputs para corregir y cambiando el boton de crear por update
    const handleEdit = async (id, firstName, lastName) => {
        setFName(firstName);
        setLName(lastName);
        setId(id);
        setShow(true);
    };

    const handleUpdate = async () => {
        const updateData = doc(db, "patients", id);
        await updateDoc(updateData, { firstName: fname, lastName: lname });
        setShow(false);
    };

    return (
        <div className="text-center">
            <Input
                type="text"
                color="warning"
                label="First Name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                className="max-w-[220px] pb-2"
            />

            <Input
                type="text"
                color="warning"
                label="Last name"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                className="max-w-[220px] pb-5"
            />

            {!show ? <Button onClick={handleCreate} radius="full" className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Create Patient
            </Button>
                :
                <Button onClick={handleUpdate} radius="full" className=" bg-gradient-to-tr  from-blue-500 text-white shadow-lg">
                    Update Patient
                </Button>}

            <h1 className="pb-5 pt-5 text-2xl text-red-700">The patients are: </h1>
            {
                val.map(values =>
                    <div key={values.id}>
                        <h1 className="pb-2">{values.firstName}, {values.lastName}</h1>
                        <Button color="danger" variant="bordered" onClick={() => handleDelete(values.id)}> {/*Si quitas el () se ejecuta automaticamente la instruccion que se tenga al lado, por todo el mapeado*/}
                            Delete user
                        </Button>
                        <Button color="primary" variant="bordered" onClick={() => handleEdit(values.id, values.firstName, values.lastName)}> {/**/}
                            Edit user
                        </Button>
                        <br /><br />
                    </div>
                )
            };
        </div>
    );
};