# 🧪 Guía de Pruebas - Agenda Service

Este archivo contiene ejemplos de cómo probar la API de Agenda.

## 📋 Requisitos
El servidor debe estar ejecutándose en http://localhost:3000

Para iniciar el servidor:
```bash
npm start
```

---

## 🔍 Pruebas con PowerShell

### 1. Ver información de la API
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/" -Method Get
```

### 2. Listar todos los contactos (GET)
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Get
```

### 3. Agregar un nuevo contacto (POST)
```powershell
$body = @{
    nombre = "Ana"
    apellido = "Martínez"
    telefono = "809-123-4567"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Post -Body $body -ContentType "application/json"
```

### 4. Agregar otro contacto
```powershell
$body = @{
    nombre = "Carlos"
    apellido = "López"
    telefono = "829-987-6543"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Post -Body $body -ContentType "application/json"
```

### 5. Verificar que se agregaron (listar de nuevo)
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Get
```

### 6. Probar validación - Contacto sin nombre (debe fallar)
```powershell
$body = @{
    apellido = "Test"
    telefono = "809-000-0000"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Post -Body $body -ContentType "application/json"
```

---

## 🌐 Pruebas con curl (si tienes curl instalado)

### 1. Ver información de la API
```bash
curl http://localhost:3000/
```

### 2. Listar contactos
```bash
curl http://localhost:3000/agenda
```

### 3. Agregar contacto
```bash
curl -X POST http://localhost:3000/agenda -H "Content-Type: application/json" -d "{\"nombre\":\"Roberto\",\"apellido\":\"Sánchez\",\"telefono\":\"849-555-7777\"}"
```

---

## 🌍 Pruebas con navegador

### 1. Ver información de la API
Abrir en el navegador: http://localhost:3000/

### 2. Listar contactos
Abrir en el navegador: http://localhost:3000/agenda

---

## 📊 Respuestas Esperadas

### GET /agenda (exitoso)
**Status:** 200 OK
```json
[
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "telefono": "809-555-1234"
  },
  {
    "nombre": "María",
    "apellido": "García",
    "telefono": "829-555-5678"
  }
]
```

### POST /agenda (exitoso)
**Status:** 201 Created
```json
{
  "success": true,
  "message": "Contacto agregado exitosamente",
  "contacto": {
    "nombre": "Ana",
    "apellido": "Martínez",
    "telefono": "809-123-4567"
  }
}
```

### POST /agenda (error de validación)
**Status:** 400 Bad Request
```json
{
  "success": false,
  "errors": [
    "El campo \"nombre\" es requerido y debe ser un texto válido"
  ]
}
```

### Ruta no encontrada
**Status:** 404 Not Found
```json
{
  "success": false,
  "error": "Ruta no encontrada",
  "path": "/ruta-inexistente"
}
```

---

## 🔄 Script de Prueba Completo (PowerShell)

Guarda este script como `test-api.ps1` y ejecútalo:

```powershell
Write-Host "`n=== 1. Información de la API ===" -ForegroundColor Cyan
Invoke-RestMethod -Uri "http://localhost:3000/" -Method Get | ConvertTo-Json

Start-Sleep -Seconds 1

Write-Host "`n=== 2. Listar contactos iniciales ===" -ForegroundColor Cyan
Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Get | ConvertTo-Json

Start-Sleep -Seconds 1

Write-Host "`n=== 3. Agregar nuevo contacto ===" -ForegroundColor Cyan
$body = @{
    nombre = "Test"
    apellido = "Usuario"
    telefono = "809-999-9999"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Post -Body $body -ContentType "application/json" | ConvertTo-Json

Start-Sleep -Seconds 1

Write-Host "`n=== 4. Listar contactos actualizados ===" -ForegroundColor Cyan
Invoke-RestMethod -Uri "http://localhost:3000/agenda" -Method Get | ConvertTo-Json

Write-Host "`n=== Pruebas completadas ===" -ForegroundColor Green
```

Ejecutar:
```powershell
.\test-api.ps1
```
