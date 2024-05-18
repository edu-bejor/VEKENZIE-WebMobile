const { NextResponse } = require("next/server");

export async function GET(req) {
    const request_query = req.nextUrl.searchParams
    const texto = request_query.get("texto")
    try {
        const res = await fetch(`https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${texto}`);
        const alimentosArrayRes = await res.json()
        return NextResponse.json(alimentosArrayRes);
    } catch (error) {
        console.log(error);
    }
}
