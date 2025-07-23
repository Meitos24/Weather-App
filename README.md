# 🌤️ WeatherApp - Aplicación Web del Clima con Next.js + FastAPI

Este proyecto es una aplicación web del clima construida con **Next.js** para el frontend y **FastAPI** como backend, conectados mediante una **API REST**. Permite buscar el clima actual de cualquier ciudad usando una API externa y muestra datos como temperatura, sensación térmica, humedad, viento y más, con una interfaz visual atractiva y dinámica.

---

## 📸 Vista previa

![preview png](https://github.com/user-attachments/assets/4d3f62c8-2faa-407a-be24-3969688f3840)

---

## 📦 Tecnologías usadas

### Frontend (Next.js)
- Next.js (React)
- Tailwind CSS (estilos responsivos y utilitarios)
- Axios (para llamadas HTTP)
- Lucide-react (íconos SVG)
- Animaciones con clases `transition`, `ease`, `duration`

### Backend (FastAPI)
- FastAPI (endpoints RESTful)
- CORS Middleware (para permitir peticiones desde frontend)
- Pydantic (validación de datos)
- Requests o HTTPx (para consumir API externa de clima)

---

## 🚀 Cómo ejecutar el proyecto localmente

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Meitos24/Weather-App.git
cd Weather-App
```

### 2. Ejecutar el servidor Next.js (frontend)

```bash
cd frontend
npm install
npm run dev
```

### 2. Correr el servidor Fastapi (Uvicorn)

```bash
cd backend
cd backend; cd myenv; ./Scripts/activate; cd ..; uvicorn main:app --reload
```
