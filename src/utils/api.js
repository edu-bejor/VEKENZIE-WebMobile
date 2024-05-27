// -------------- CREATE --------------
export async function addComida(comida){
    try{
        let response = await fetch("http://localhost:8000/comidas", 
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comida)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// -------------- READ ----------------
export async function getComidas(){
    try{
        let response = await fetch("http://localhost:8000/comidas")
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// ------------------- UPDATE -------------------
export async function updateComida(comida){
    try{
        let response = await fetch("http://localhost:8000/comidas/" + comida.timestamp, 
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comida)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// --------------------- DELETE ----------------------
export async function deleteComida(timestamp){
    try {
        const response = await fetch(`http://localhost:8000/comidas?id.timestamp=${timestamp}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        });

        return response.status;
    } catch(error) {
        console.error("ERROR: ", error);
        throw error;
    }
}