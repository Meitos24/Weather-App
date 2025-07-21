from fastapi import FastAPI, Query # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
import requests # type: ignore

app = FastAPI()

# Configuración de CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Cambia si usas otro dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = 'EYSKT6E8LZQR6Q8A46SPQHBVG'  # Cambia por tu API Key real

# *!ENDPOINT
@app.get("/weather")
async def get_weather(location: str = Query(...)):
    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}?key={API_KEY}"
    response = requests.get(url)
    return response.json()

@app.get("/prueba")
async def mensaje():
    return 'CTM'