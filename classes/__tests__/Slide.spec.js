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
  describe('render', () => {
    it('wraps content in slide html', () => {
      // Assign
      const rawSlide = '<div><span>Hello world!</span></div>'
      const slide = fakeSlide(rawSlide)
  
      // Act
      const simulatedSlide = `<div class="oppo-slide" >
      ${rawSlide.outerHTML}
    </div>`

      // Assert
      expect(slide._slide).toEqual(simulatedSlide)
    })
  })
})