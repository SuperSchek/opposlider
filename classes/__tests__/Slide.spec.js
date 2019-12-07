import faker from 'faker'
import { Slide } from '../Slide'

function fakeSlide(content = '<div><span>Hello world!</span></div>', index = 0) {
  const slide = new Slide()
  slide.initializeSlide(content)
  slide.setValue('_slideIndex', index)

  return slide
}

describe('Slide class', () => {
  describe('Creating new instance', () => {
    it('initializeSlide', () => {
      // Assign
      const slide = fakeSlide()
      const content = faker.lorem.text()
      slide.render = jest.fn()
  
      // Act
      slide.initializeSlide(content)
  
      // Assert
      expect(slide.render).toHaveBeenCalledWith(content)
    })
  })
  describe('setValue', () => {
    it('Sets value', () => {
      // Assign
      const slide = fakeSlide()
      const value = faker.lorem.word()
      // const value = faker.random.number()

      // Act
      slide.setValue('_slideIndex', value)

      // Assert
      expect(slide._slideIndex).toBe(value)
    })
    it('Sets value for a key that is undefined', () => {
      // Assign
      const slide = fakeSlide()
      const key = faker.lorem.word()
      
      // Act & Assert
      expect(() => {
        slide.setValue(key, key)
      }).toThrowError(ReferenceError)
    })
    it('Sets without a value', () => {
      // Assign
      const slide = fakeSlide()
      const key = faker.lorem.word()
      
      // Act & Assert
      expect(() => {
        slide.setValue(key)
      }).toThrowError(Error)
    })
  })
  describe('render', () => {
    it('wraps content in slide html', () => {
      // Assign
      const rawSlide = '<div><span>Hello world!</span></div>'
      const slide = fakeSlide(rawSlide)
  
      // Act
      const simulatedSlide = `<div class="oppo-slide" >
      ${rawSlide}
    </div>`

      // Assert
      expect(slide._slide).toEqual(simulatedSlide)
    })
  })
})