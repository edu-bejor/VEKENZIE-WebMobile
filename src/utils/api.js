// -------------- CREATE --------------
export async function addQuote(quote) {
    try {
        const response = await fetch("http://localhost:8000/comidas", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quote)
        });

        return response.status;
    } catch (error) {
        console.log("ERROR: " + error);
    }
}

// -------------- READ ----------------
export async function getComidas() {
    try {
        const response = await fetch("http://localhost:8000/comidas");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR: " + error);
        throw new Error('Erro ao buscar comidas');
    }
}

// ------------------- UPDATE -------------------
export async function updateQuote(quote) {
    try {
        let response = await fetch("http://localhost:8000/comidas/" + quote.id,
            {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(quote)
            })
        return response.status
    } catch (error) {
        console.log("ERROR: " + error)
    }
}

// --------------------- DELETE ----------------------
export async function deleteQuote(id) {
    try {
        let response = await fetch("http://localhost:8000/comidas/" + id,
            {
                method: 'DELETE'
            })
        return response.status
    } catch (error) {
        console.log("ERROR: " + error)
    }
}