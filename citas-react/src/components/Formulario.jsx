import { useState, useEffect} from 'react'
import Error from './Error'

function Formulario({pacientes, setPacientes}) {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return;
        }
        setError(false)
        //objeto para añador a pacientes
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        //Se crea una copia de pacientes y se retorna con el nuevo paciente cada que se envie el
        //formulario, pacientes es un array
        setPacientes([...pacientes, objetoPaciente]);
        //Vaciar las variables cada que se envie el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {' '}
                <span className="text-indigo-600 font-bold">administralos</span>
            </p>

            <form   onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-lg py-10 px-5 mb-20 mx-5">
                {error && <Error/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input 
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(content) => setNombre(content.target.value)
                                    /* Evenlistener en js, espera a que escriba en el formulario
                                    y va guardando todo en la variable nombre, onChange=react event*/}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre del Propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(content) => setPropietario(content.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email propietario"
                        className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
                        value={email}
                        onChange={(content) => setEmail(content.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input 
                        id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(content) => setFecha(content.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas" 
                        placeholder="Describle los sintomas"
                        className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(content) => setSintomas(content.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                        hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
                    value="Agregar paciente"
                />
            </form>
        </div>
    )
    }

export default Formulario
