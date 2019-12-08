import faker from 'faker'
import { Base } from '../Base'

function fakeBase() {
  return new Base()
}

describe('setValue', () => {
  it('Sets value', () => {
    // Assign
    const baseInstance = fakeBase()
    const key = faker.lorem.word()
    const value = faker.lorem.word()
    baseInstance[key] = null

    // Act
    baseInstance.setValue(key, value)

    // Assert
    expect(baseInstance[key]).toBe(value)
  })
  it('Sets value for a key that is undefined', () => {
    // Assign
    const baseInstance = fakeBase()
    const key = faker.lorem.word()
    
    // Act & Assert
    expect(() => {
      baseInstance.setValue(key, key)
    }).toThrowError(ReferenceError)
  })
  it('Sets without a value', () => {
    // Assign
    const baseInstance = fakeBase()
    const key = faker.lorem.word()
    
    // Act & Assert
    expect(() => {
      baseInstance.setValue(key)
    }).toThrowError(Error)
  })
})