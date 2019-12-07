import faker from 'faker'
import { Point } from '../Point'

function fakePoint(x = faker.random.number(), y = faker.random.number()) {
  return new Point(x, y)
}

describe('Point class', () => {
  describe('Creating new instance', () => {
    it('new Point', () => {
      // Assign
      const x = faker.random.number()
      const y = faker.random.number()
      
      // Act
      const point = fakePoint(x, y)
  
      // Assert
      expect(point.x).toBe(x)
      expect(point.y).toBe(y)
    })
  })
  describe('set', () => {
    it ('sets X and Y values for a Point', () => {
      // Assign
      const x = faker.random.number()
      const y = faker.random.number()
      const point = fakePoint()
      
      // Act
      point.set(x, y)
  
      // Assert
      expect(point.x).toBe(x)
      expect(point.y).toBe(y)
    })
  })
  describe('getDelta', () => {
    function fakeCoordinates() {
      return {
        x: faker.random.number(),
        y: faker.random.number(),
        cursorX: faker.random.number(),
        cursorY: faker.random.number()
      }
    }
    it('returns an instance of Point', () => {
      // Assign
      const coordinates = fakeCoordinates()
      const point = fakePoint(coordinates.x, coordinates.y)

      // Act
      const delta = point.getDelta(coordinates.cursorX, coordinates.cursorY)

      // Assert
      expect(delta.constructor.name).toBe('Point')
    })
    it('gets raw delta values', () => {
      // Assign
      const coordinates = fakeCoordinates()
      const point = fakePoint(coordinates.x, coordinates.y)

      // Act
      const delta = point.getDelta(coordinates.cursorX, coordinates.cursorY)

      // Assert
      expect(delta.x).toEqual(coordinates.x - coordinates.cursorX)
      expect(delta.y).toEqual(coordinates.y - coordinates.cursorY)
    })
    it('gets absolute delta values', () => {
      // Assign
      const coordinates = fakeCoordinates()
      const point = fakePoint(coordinates.x, coordinates.y)

      // Act
      const delta = point.getDelta(coordinates.cursorX, coordinates.cursorY, true)

      // Assert
      expect(delta.x).toEqual(Math.abs(coordinates.x - coordinates.cursorX))
      expect(delta.y).toEqual(Math.abs(coordinates.y - coordinates.cursorY))
    })
  })
})