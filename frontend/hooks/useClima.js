"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer, Gauge, Search, Snowflake, Circle, SunSnow } from "lucide-react"

const fahrenheitACelsius = (f) => ((parseFloat(f) - 32) * 5) / 9;

export function useClima() {

    const [searchCity, setSearchCity] = useState('');
    const [currentCity, setCurrentCity] = useState('Ciudad de México');
    const [condition, setCondition] = useState('');
    const [temperatura, setTemperatura] = useState('28');
    const [feelsLike, setFeelsLike] = useState('28');
    const [humedad, setHumedad] = useState('15');
    const [viento, setViento] = useState('5');
    const [visibilidad, setVisibilidad] = useState('10');
    const [currentCondition, setCurrentCondition] = useState('Cooling down with a chance of rain multiple days');
    const [localizacionExacta, setLocalizacionExacta] = useState('America/Mexico_City')
    const [colorFondo, setColorFondo] = useState('calido');

    const iconosPorClima = {
        muyCaliente: <Sun className="w-16 h-16 text-yellow-300" />,
        calor: <Circle className="w-16 h-16 text-yellow-300 rounded-full bg-yellow-300" />,
        frio: <SunSnow className="w-16 h-16 text-white" />,
        muyFrio: <Snowflake className="w-16 h-16 text-white" />
    }

    const sendData = async e => {
        if (!searchCity) {
            alert('Por favor, ingrese una ciudad');
        } else if (e.key === 'Enter') {
            try {
                const response = await axios.get('http://127.0.0.1:8000/weather', {
                    params: { location: searchCity }
                });
                const tempCelsius = fahrenheitACelsius(response.data.days[0].temp);
                setCurrentCity(searchCity);
                setCurrentCondition(response.data.description);
                setTemperatura(tempCelsius);
                setFeelsLike(fahrenheitACelsius(response.data.days[0].feelslike));
                setHumedad(response.data.days[0].humidity);
                setViento(response.data.days[0].windspeed);
                setVisibilidad(response.data.days[0].visibility);
                setLocalizacionExacta(response.data.resolvedAddress);
            } catch (error) {
                console.log('Error al enviar la solicitud', error);
                alert('No se encontró esa ciudad');
            }
        }
    };

    useEffect(() => {
        const temp = parseFloat(temperatura);
        if (temp < 10) {
            setColorFondo("frio");
        } else if (temp >= 10 && temp < 20) {
            setColorFondo("templado");
        } else if (temp >= 20 && temp < 35) {
            setColorFondo("calido");
        } else if (temp >= 35) {
            setColorFondo("muyCalido");
        }
    }, [temperatura]);


    const fondosPorClima = {
        muyCalido: "from-[#0b090a] to-[#a4161a]",
        calido: "from-[#faa307] to-[#d00000]",
        templado: "from-[#34a0a4] to-[#001d3d]",
        frio: "from-[#61a5c2] to-[#10002b]"
    }

    const handleInput = e => {
        setSearchCity(e.target.value);
    } 

    return {
        temperatura,
        feelsLike,
        humedad,
        viento,
        visibilidad,
        currentCity,
        currentCondition,
        searchCity,
        setSearchCity,
        sendData,
        colorFondo,
        localizacionExacta,
        handleInput,
        iconosPorClima,
        fondosPorClima,
    }
};