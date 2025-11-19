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

  /**
   * Valida que el contacto tenga todos los campos requeridos
   * @returns {Object} { valid: boolean, errors: string[] }
   */
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

  /**
   * Convierte el contacto a un objeto plano
   * @returns {Object}
   */
  toJSON() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono
    };
  }
}

module.exports = Contacto;
