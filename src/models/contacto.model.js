/**
 * Modelo de Contacto
 * Representa la estructura de un contacto en la agenda
 */

class Contacto {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
  validar() {
    const errors = [];
    if (!this.nombre || this.nombre.trim() === '') {
      errors.push('El campo "nombre" es requerido');
    }
    if (!this.apellido || this.apellido.trim() === '') {
      errors.push('El campo "apellido" es requerido');
    }
    if (!this.telefono || this.telefono.trim() === '') {
      errors.push('El campo "telefono" es requerido');
    }
    return {
      valid: errors.length === 0,
      errors
    };
  }
  toJSON() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono
    };
  }
}
module.exports = Contacto;
