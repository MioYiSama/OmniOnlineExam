import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
    const [count, setCount] = useState(0)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        // Define the fetch function inside useEffect
        const fetchData = async () => {
            const response = await axios.get('http://192.168.0.198:8080/');
            setMsg(response.data)
        }

        fetchData();
    }, []);
    return (
        <>
            <p>{msg}</p>
        </>
    )
}

export default App
