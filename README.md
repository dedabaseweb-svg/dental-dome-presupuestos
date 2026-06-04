# Dental Dome L.a.b.
## Asistente técnico de presupuestos y protocolos clínico-laboratorio

Última actualización: Junio 2026

---

# Estado actual del proyecto

La aplicación ya dispone de:

## Navegación principal

- Nuevo presupuesto / pedido
- Caso clínico
- Protocolos
- Lista de precios

---

# Presupuestos

## Funcionalidades implementadas

### Datos del caso

- Clínica
- Doctor/a
- Paciente / referencia
- Fecha prevista

### Categorías de trabajo

- Corona
- Puente
- Rehabilitación completa
- Adhesiva
- Provisionales
- Mock-up
- Férulas
- Guías quirúrgicas
- Auxiliares / modelos

### Presupuesto

- Añadir líneas
- Editar líneas
- Eliminar líneas
- Recalcular
- Vaciar presupuesto
- Total automático

### Avisos automáticos

- Consultar siempre fecha con laboratorio antes de citar al paciente.
- Requerimiento estético → solicitar fotografías y registros completos.
- Casos implantológicos → solicitar referencia de componentes.

---

# Lista de precios

La tarifa ya está organizada por categorías.

## Zirconio sobre tallado

- Corona monolítica Standard
- Corona monolítica personalizada
- Corona estratificada anterior
- Corona estratificada posterior
- Corona Cr-Co metal-cerámica anterior
- Corona Cr-Co metal-cerámica posterior

## Zirconio sobre implante

- Corona monolítica Standard
- Corona estratificada anterior
- Corona estratificada posterior
- Corona Cr-Co metal-cerámica anterior
- Corona Cr-Co metal-cerámica posterior

## Disilicato de litio

- Corona maquillada Standard
- Corona maquillada personalizada
- Corona estratificada anterior
- Corona estratificada posterior

## Metal-cerámica

- Tallado anterior
- Tallado posterior
- Implante anterior
- Implante posterior

## Adhesiva / estética

- Carilla feldespática
- Carilla e.max maquillada
- Carilla e.max estratificada
- Carilla IPS Empress
- Inlay / Onlay / Table Top
- Maryland e.max
- Maryland metal-cerámica

---

# Caso clínico

## Implementado

Odontograma interactivo.

### Restauraciones

- Corona
- Carilla
- Inlay / Onlay / Table Top
- Implante
- Póntico
- Ausente

### Materiales

- Zirconio monolítico Standard
- Zirconio monolítico personalizado
- Carilla feldespática
- Carilla e.max maquillada
- Carilla e.max estratificada
- Inlay / Onlay / Table Top disilicato

### Funciones

- Selección de pieza
- Guardar restauración
- Resumen del caso
- Generar presupuesto desde odontograma

---

# Cambios recientes

## Pónticos diferenciados visualmente

Pendiente de implementar.

Objetivo:

- Corona = verde corporativo actual.
- Póntico = mismo tono pero más claro.

Ejemplo:

```css
.tooth-btn.pontic{
  background:#9ea694;
  color:white;
}
```

---

## Ampliación del odontograma

Pendiente de implementar.

Actualmente:

Superior:
11-16 y 21-26

Inferior:
31-36 y 41-46

Debe ampliarse a:

Superior:
17 16 15 14 13 12 11 | 21 22 23 24 25 26 27

Inferior:
47 46 45 44 43 42 41 | 31 32 33 34 35 36 37

---

# Protocolos integrados

## Disponibles

### Implantes metal-cerámica

Basado en:

Protocolo_Implantes_Metal_Ceramica_V2.pdf

Incluye:

- Primera visita
- Pasividad
- Rodetes
- Prueba estética
- Bizcocho
- Terminación
- Colocación

### BOPT

Basado en:

PC25-BOPT-CONCEPTO-ANTECEDENTES-HISTORICOS-Y-PRINCIPIOS-BASICOS-CLINICOS.pdf

### Zirconio Katana

Basado en:

2023-033-KN-ES-KATANA_Zirconia_Sistema_brochure_V_web_2.pdf

### Cerabien MiLai

Basado en:

CERABIEN MiLai TECHNICAL GUIDE LR.pdf

---

# PDF

Estado actual:

Funciona.

Problemas detectados:

- Diseño básico.
- Sin logotipo.
- Sin identidad corporativa.
- El total mostrado en PDF parece no coincidir con la suma de líneas en algunos casos.
- El protocolo ocupa demasiado espacio.

---

# Próxima fase (prioridad máxima)

## Rediseño completo PDF

### Página 1

Cabecera corporativa

- Logo Dental Dome
- Presupuesto protésico
- Número de presupuesto
- Fecha

Datos:

- Clínica
- Doctor
- Paciente

Resumen:

- Piezas restauradas
- Tipo de trabajo
- Material principal

Mini odontograma coloreado.

---

### Página 2

Tabla económica profesional

Columnas:

- Pieza
- Restauración
- Material
- Importe

Bloque total destacado.

Observaciones automáticas:

- Modelos
- Scanbodies
- Encía impresa
- Agenda del laboratorio

Pie corporativo.

---

# Identidad visual

Colores corporativos

```css
--olive-dark:#4f594c;
--olive:#7a8372;
--paper:#f7f5ec;
--ink:#252722;
```

---

# Pendiente inmediato

1. Añadir 17, 27, 37 y 47 al odontograma.
2. Diferenciar visualmente los pónticos.
3. Localizar función JavaScript de generación PDF.
4. Corregir discrepancia de totales.
5. Incorporar logotipo Dental Dome al PDF.
6. Crear PDF corporativo en dos páginas.
7. Añadir odontograma al PDF.
8. Añadir observaciones inteligentes según tipo de trabajo.

---

# Recordatorios de laboratorio

## Estética

Preguntar siempre:

¿El caso tiene alto requerimiento estético?

Si la respuesta es sí:

Solicitar:

- Fotografías clínicas de calidad.
- Escaneado o modelos pretratamiento.
- Color guía VITA.
- Información clínica completa.

---

## Digital implantes

Solicitar siempre:

Unidad:

- Scanbody antirrotatorio.
- Marca.
- Referencia.

Puentes:

- Scanbody rotatorio.
- Marca.
- Referencia.

---

## Agenda

Siempre indicar:

"Consultar la fecha con el laboratorio antes de citar al paciente."
