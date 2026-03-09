// ============ CONFIGURACIÓN SIMPLE ============
let consultasRestantes = 3;

// ============ FUNCIÓN PRINCIPAL ============
function enviarMensaje() {
    const input = document.getElementById('userInput');
    const pregunta = input.value.trim();
    
    // Validar que no esté vacío
    if (!pregunta) {
        alert('Por favor escribe algo');
        return;
    }

    // Verificar consultas restantes
    if (consultasRestantes <= 0) {
        alert('Has usado tus 3 consultas gratuitas. Actualiza a plan PRO.');
        return;
    }

    // Mostrar mensaje del usuario
    agregarMensaje(pregunta, 'user');
    
    // Limpiar input
    input.value = '';

    // Simular respuesta del bot (después conectaremos con OpenAI)
    setTimeout(() => {
        const respuesta = generarRespuestaSimple(pregunta);
        agregarMensaje(respuesta, 'bot');
        
        // Reducir consultas
        consultasRestantes--;
        document.getElementById('consultas').textContent = consultasRestantes;
    }, 1500);
}

// ============ AGREGAR MENSAJES AL CHAT ============
function agregarMensaje(texto, tipo) {
    const chat = document.getElementById('chat');
    const mensaje = document.createElement('div');
    mensaje.className = `message ${tipo}`;
    mensaje.innerHTML = `<p>${texto}</p>`;
    chat.appendChild(mensaje);
    
    // Scroll automático
    chat.scrollTop = chat.scrollHeight;
}

// ============ GENERAR RESPUESTA SIMPLE (SIMULADA) ============
function generarRespuestaSimple(pregunta) {
    // Detectar palabras clave
    pregunta = pregunta.toLowerCase();
    
    if (pregunta.includes('nevera') || pregunta.includes('refrigerador')) {
        if (pregunta.includes('no enfría') || pregunta.includes('no congela')) {
            return `
                🔍 DIAGNÓSTICO: Nevera que no enfría
                
                ⚠️ Causas probables:
                1. Compresor dañado (70% probabilidad)
                2. Falta de gas refrigerante (20%)
                3. Termostato descalibrado (10%)
                
                ✅ SOLUCIÓN:
                1. Verifica que el compresor funcione (debe hacer ruido)
                2. Revisa si hay fugas de gas
                3. Limpia las bobinas traseras
                
                💰 Costo estimado: $80-$200 USD
                ⏱️ Tiempo: 1-2 horas
                
                ⚡ ACTUALIZA A PRO para:
                - Análisis por foto
                - Guías en video
                - Compra de repuestos
            `;
        }
    }
    
    if (pregunta.includes('lavadora')) {
        return `
            🔍 DIAGNÓSTICO: Lavadora
            
            ⚠️ Problema común:
            1. Bomba de drenaje obstruida
            2. Correa desgastada
            3. Motor defectuoso
            
            ✅ Revisa primero:
            - Filtro de drenaje
            - Mangueras de desagüe
            - Nivel de carga
            
            💰 Costo: $50-$150
        `;
    }
    
    if (pregunta.includes('microondas')) {
        return `
            🔍 DIAGNÓSTICO: Microondas
            
            ⚠️ PELIGRO: Alto voltaje - Solo técnicos
            
            Causas probables:
            1. Magnetrón dañado
            2. Capacitor averiado
            3. Fusible quemado
            
            💰 Costo: $60-$200
            
            ⚡ Recomiendo llamar a un técnico certificado
        `;
    }
    
    // Respuesta genérica
    return `
        🔍 He recibido tu consulta: "${pregunta}"
        
        Para darte un diagnóstico más preciso, por favor indica:
        1. ¿Qué electrodoméstico es? (nevera, lavadora, etc.)
        2. ¿Qué síntomas tiene? (no enciende, hace ruido, etc.)
        3. ¿Cuándo empezó el problema?
        
        🚀 ACTUALIZA A PRO ($14.99/mes) para:
        ✓ Diagnósticos ilimitados
        ✓ Análisis por foto con IA
        ✓ Guías en video
        ✓ Descuentos en repuestos
    `;
}

// ============ ENTER PARA ENVIAR ============
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});

// ============ MENSAJE DE BIENVENIDA ============
console.log('SmartVerdict AI cargado correctamente ✅');