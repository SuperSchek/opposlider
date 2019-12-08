export class Base {
  setValue(key, value) {    
    if (key in this && value !== undefined) {
      this[key] = value
    } else if (value === undefined) {
      throw new Error('setValue: no value was passed')
    } else {
      throw new ReferenceError(`setValue: ${key} is not declared in the ${this.constructor.name} constructor and cannot be assigned.`)
    }
  }
} 