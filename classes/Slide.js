import { Base } from './Base'

export class Slide extends Base {
  constructor() {
    super()
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
      ${content.outerHTML}
    </div>`
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