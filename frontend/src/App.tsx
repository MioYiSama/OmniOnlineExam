import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios';

export default function App() {
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