export function validarTitulo(titulo) {
  const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s'-]{3,50}$/;
  return regex.test(titulo.trim());
}

export function validarDescripcion(descripcion) {
  const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s,.!?:;()\-'"]{10,500}$/;
  return regex.test(descripcion.trim());
}

export function validarNoBasura(texto) {
  // Verifica repeticiones excesivas de caracteres
  if (/(.)\1{4,}/.test(texto)) return false;
  
  // Verifica secuencias de teclado comunes
  if (/asdf|qwer|zxcv/i.test(texto)) return false;
  
  // Verifica la proporción de caracteres únicos
  const caracteresUnicos = new Set(texto).size;
  if (caracteresUnicos / texto.length < 0.25) return false;
  
  // Verifica la presencia de palabras reales (simplificado)
  const palabras = texto.split(/\s+/);
  if (palabras.some(palabra => palabra.length > 15)) return false;
  
  return true;
}