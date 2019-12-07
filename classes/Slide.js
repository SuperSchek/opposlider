export class Slide {
  constructor(index) {
    this._activeSlideIndex = null
    this._slideIndex = null
    this._slide = null
  }

  initializeSlide(content) {
    this._slide = this.render(content)
  }

  /**
   * @private
   * 
   * @param {HTMLElement} - HTML content of the slide
   * @param {boolean} [active=false] - Wheter the slide should be active or not
   */
  render(content, active = false) {
    return `<div class="oppo-slide" ${active ? 'data-active="true"' : ''}>
      ${content}
    </div>`
  }
  
  setValue(key, value) {
    if (key in this && value !== undefined) {
      this[key] = value
    } else if (value === undefined) {
      throw new Error('setValue: no value was passed')
    } else {
      throw new ReferenceError(`setValue: ${key} is not declared in the ${this.constructor.name} constructor and cannot be assigned.`)
    }
  }

  /**
   * Sets this._activeSlideIndex to the passed value
   * @public
   * 
   * @param {number} newIndex - new value for this._activeSlideIndex
   */
  setActiveSlideIndex(newIndex) {
    this.activeSlideIndex = newIndex
  }
}