# 🌤️ WeatherApp - Aplicación Web del Clima con Next.js + FastAPI

Este proyecto es una aplicación web del clima construida con **Next.js** para el frontend y **FastAPI** como backend, conectados mediante una **API REST**. Permite buscar el clima actual de cualquier ciudad usando una API externa y muestra datos como temperatura, sensación térmica, humedad, viento y más, con una interfaz visual atractiva y dinámica.

---

## 📸 Vista previa

 ![preview png](https://github.com/user-attachments/assets/4d3f62c8-2faa-407a-be24-3969688f3840)

---

## 📦 Tecnologías usadas

### Frontend (Next.js)
- React (con Hooks y `useEffect`)
- Tailwind CSS (para estilos responsivos)
- Axios (para llamadas HTTP)
- Lucide-react (íconos del clima)
- Animaciones suaves con transiciones de clase

### Backend (FastAPI)
- FastAPI (para endpoints REST)
- CORS Middleware
- Pydantic (validación de datos)
- Requests / HTTPx (para consumir API externa de clima)

---

## 🚀 Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
https://github.com/Meitos24/Weather-App.git
cd weather-app
```

### 2. Correr el servidor Next.js

```bash
cd frontend
npm run dev
```

### 2. Correr el servidor Fastapi (Uvicorn)

```bash
cd backend
cd backend; cd myenv; ./Scripts/activate; cd ..; uvicorn main:app --reload
```
