import { Slide } from './Slide'

export class Slider {
  constructor(element, data) {
    this._activeSlideIndex = 0
    this._data = data
    this._element = element
    this._slides = []
    this._initializeSlider()
  }

  _initializeSlider() {
    if (this._element.constructor.name !== "HTMLElement")
      throw new Error('this._element is should be of type: HTMLElement')

    this._slides = this._getSlides()
    this._setActiveSlideIndex(this._activeSlideIndex)

    console.log(this._slides)

    // Parse HTML to seprate slides

    // if (this._data.length < 1)
    //   throw new DataError('this._data should contain at least one element')
    
    // this._data.forEach((item, index) => {
    //   const slide = new Slide(item)
    //   this._slides.push(slide)
    //   this._element.insertAdjacentHTML('beforeend', slide.render(true))
    // })
  }

  /**
   * Breaks up slider content into several Slide instances
   * @private
   * 
   * @returns {array} - Array of Slide instances
   */
  _getSlides() {
    const slides = this._element.children
    const slideInstances = []

    if (slides.length < 1)
      throw new Error("Slider doensn't contain any HTML")

    for (let i = 0; i < slides.length; i++) {
      const content = slides[i]
      const slide = new Slide()
      slide.initializeSlide(content)
      slide.setValue('_slideIndex', i)
      content.outerHTML = slide._slide
      slideInstances.push(slide)
    }

    return slideInstances
  }

  _setActiveSlideIndex() {
    // 
  }
}