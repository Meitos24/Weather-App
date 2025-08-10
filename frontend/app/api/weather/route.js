export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");

    if (!location) {
        return new Response(
            JSON.stringify({ error: "Falta el parámetro 'lcoation" }),
            { status: 400 }
        );
    }

    const apiKey = process.env.API_KEY;

    try {
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log('Error al obtener el clima');
        return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
    }
}