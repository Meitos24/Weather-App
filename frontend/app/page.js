"use client";

import { motion } from "framer-motion";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Thermometer, Gauge, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios";
import { use, useEffect, useState } from "react";


export default function HomePage() {

  // const CurrentIcon = weatherData.current.icon;
  const [searchCity, setSearchCity] = useState('');
  const [currentCity, setCurrentCity] = useState('Ciudad de México');
  const [condition, setCondition] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [humedad, setHumedad] = useState('');
  const [viento, setViento] = useState('');
  const [visibilidad, setVisibilidad] = useState('');
  const [currentCondition, setCurrentCondition] = useState('Cooling down with a chance of rain multiple days');

  const [colorFondo, setColorFondo] = useState('templado');

  const handleInput = e => {
    setSearchCity(e.target.value);
  } 

  const fondosPorClima = {
    calido: "from-[#faa307] to-[#d00000]",
    templado: "from-[#34a0a4] to-[#001d3d]",
  }

  useEffect(() => {
    const numTemp = parseFloat(temperatura);
    const numTempCelsius = (numTemp - 32) * (5 / 9);
    if (numTempCelsius >= 25 && numTempCelsius < 40) {
      setColorFondo("calido")
    } else {
      setColorFondo("templado")
    }
  }, [temperatura])

  // Función para mandar los datos al back
  const sendData = async e => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get('http://127.0.0.1:8000/weather', {
          params: { location: searchCity }
        });
        setCurrentCity(searchCity)
        setCurrentCondition(response.data.description);
        setTemperatura(response.data.days[0].temp);
        setFeelsLike(response.data.days[0].feelslike);
        setHumedad(response.data.days[0].humidity);
        setViento(response.data.days[0].windspeed);
        setVisibilidad(response.data.days[0].visibility);
        console.log('Viento', response.data.days[0].windspeed)
        console.log('Info obtenida', response)
        console.log('Ciudad enviada al back: ', searchCity)
        // setCurrentCondition(condition);
      } catch (error) {
        console.log('Error al enviar la solicitud', error);
      }
    }
  }


  return (
    // <div className="min-h-screen bg-gradient-to-br from-[#faa307] to-[#d00000]">
    <div className={`min-h-screen bg-gradient-to-br transition-colors duration-700 ${fondosPorClima[colorFondo]}`}>
    {/* // <div className="min-h-screen bg-[#9a031e]"> */}
      <motion.div className="max-w-7xl mx-auto space-y-6" initial="hidden" animate="visible">
        {/* Header */}
        <motion.div className="text-center py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">WeatherApp</h1>
          <p className="text-white/80 text-lg">Pronóstico del tiempo en tiempo real</p>
        </motion.div>

        {/* Sección para cambiar de tema y buscar ciudad */}
        <motion.div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5"></Search>
              <Input 
                type="text"
                placeholder="Buscar ciudad"
                value={searchCity}
                onChange={handleInput}
                onKeyPress={sendData}
                className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Card principal */}
        <motion.div>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{currentCity}</h2>
                  <p className="text-white/80">{currentCondition}</p>
                </div>
                <motion.div
                  // Ícono clima
                  animate={{ rotate: 360 }}
                  transition={{duration: 20, ease: "linear", repeat: Infinity}}
                >
                  <Sun className="w-16 h-16 text-yellow-300"></Sun>
                </motion.div>
              </div>

              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className="text-7xl font-light"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{type: "spring", stiffness: 100}}
                >
                  {Math.round((temperatura - 32) * (5 / 9))}°
                </motion.div>
              </div>

              {/* Cards secundarias del main card */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{type: "spring", stiffness: 300}}
                >
                  <Thermometer className="w-6 h-6 mx-auto mb-2 text-red-300" />
                  <p className="text-white/80 text-sm">Sensación</p>
                  <p className="font-semibold">{feelsLike}°</p>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{type: "spring", stiffness: 300}}
                >
                  <Droplets className="w-6 h-6 mx-auto mb-2 text-white" />
                  <p className="text-white/80 text-sm">Humedad</p>
                  <p className="font-semibold">{humedad}%</p>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Wind className="w-6 h-6 mx-auto mb-2 text-white" />
                  <p className="text-white/80 text-sm">Viento</p>
                  <p className="font-semibold">{viento} km/h</p>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Eye className="w-6 h-6 mx-auto mb-2 text-white" />
                  <p className="text-white/80 text-sm">Visibilidad</p>
                  <p className="font-semibold">{visibilidad} km</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}