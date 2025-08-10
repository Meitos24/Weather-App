from fastapi import FastAPI, Query # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
import requests # type: ignore
import dotenv  # type: ignore
import os

app = FastAPI()
dotenv.load_dotenv()

API_KEY = os.getenv("API_KEY")

print(API_KEY)

# Configuración de CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# *!ENDPOINT
@app.get("/weather")
async def get_weather(location: str = Query(...)):
    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}?key={API_KEY}"
    response = requests.get(url)
    return response.json()
