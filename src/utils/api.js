import { useState, useEffect } from 'react';

export function useClient() {
    const [data, setData] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [texto, setTexto] = useState("");
    const [error, setError] = useState(null);

    const apiUrl = `https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${texto}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proxyUrl = 'https://cors.bridged.cc/';
                const response = await fetch(proxyUrl + apiUrl);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [apiUrl]);

    const Clicou = (data) => {  
        setSelectedData(data);
    };

    const handleInputChange = (event) => {
        setTexto(event.target.value);
    };

    return { data, selectedData, texto, handleInputChange, Clicou, error };
}

// -------------- CREATE --------------
export async function addQuote(quote){
    try {
        const response = await fetch("http://localhost:8000/quotes", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quote)
        });
        
        return response.status;
    } catch(error) {
        console.log("ERROR: " + error);
    }
}

// -------------- READ ----------------
export async function getQuotes(){
    try {
        const response = await fetch("http://localhost:8000/quotes");
        const data = await response.json();
        return data;
    } catch(error) {
        console.log("ERROR: " + error);
    }
}

export async function getQuotesByAuthor(author){
    try{
        let response = await fetch(`http://localhost:8000/quotes?author=${author}`)
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

export async function getQuoteById(id){
    try{
        let response = await fetch(`http://localhost:8000/quotes?id=${id}`)
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// ------------------- UPDATE -------------------
export async function updateQuote(quote){
    try{
        let response = await fetch("http://localhost:8000/quotes/" + quote.id, 
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quote)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}


// --------------------- DELETE ----------------------
export async function deleteQuote(id){
    try{
        let response = await fetch("http://localhost:8000/quotes/" + id, 
        {
            method: 'DELETE'
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}