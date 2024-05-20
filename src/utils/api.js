<<<<<<< HEAD
// -------------- CREATE --------------
export async function addQuote(quote) {
    try {
        const response = await fetch("http://localhost:8000/comidas", {
=======

// -------------- CREATE --------------
export async function addQuote(quote) {
    try {
        const response = await fetch("http://localhost:5000/comidas", {
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
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
<<<<<<< HEAD
export async function getComidas() {
    try {
        const response = await fetch("http://localhost:8000/comidas");
=======
export async function getcomidas() {
    try {
        const response = await fetch("http://localhost:5000/comidas");
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR: " + error);
<<<<<<< HEAD
        throw new Error('Erro ao buscar comidas');
=======
    }
}

export async function getcomidasByAuthor(author) {
    try {
        let response = await fetch(`http://localhost:5000/comidas?author=${author}`)
        let data = await response.json()
        return data
    } catch (error) {
        console.log("ERROR: " + error)
    }
}

export async function getQuoteById(id) {
    try {
        let response = await fetch(`http://localhost:5000/comidas?id=${id}`)
        let data = await response.json()
        return data
    } catch (error) {
        console.log("ERROR: " + error)
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
    }
}

// ------------------- UPDATE -------------------
export async function updateQuote(quote) {
    try {
<<<<<<< HEAD
        let response = await fetch("http://localhost:8000/comidas/" + quote.id,
=======
        let response = await fetch("http://localhost:5000/comidas/" + quote.id,
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
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

<<<<<<< HEAD
// --------------------- DELETE ----------------------
export async function deleteQuote(id) {
    try {
        let response = await fetch("http://localhost:8000/comidas/" + id,
=======

// --------------------- DELETE ----------------------
export async function deleteQuote(id) {
    try {
        let response = await fetch("http://localhost:5000/comidas/" + id,
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
            {
                method: 'DELETE'
            })
        return response.status
    } catch (error) {
        console.log("ERROR: " + error)
    }
}