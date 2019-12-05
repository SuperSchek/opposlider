import { IDLE, USER_DRAGGING } from '../constants/states'
import { Point } from './Point'

export class InteractionManager {
  constructor(element) {
    this._anchorpoint = new Point()
    this._currentState = IDLE
    this._initializeListeners(element)
  }

  /**
   * Sets the currentState
   * @private
   * 
   * @param {string} newState - New value for state
   */
  _setState(newState) {
    this.currentState = newState
  }

  /**
   * Initializes the eventListeners to support interaction
   * @private
   * 
   * @param {HTMLDivElement} element - Element the events should be applied to
   */
  _initializeListeners(element) {
    this._listenForSwipes(element)
  }

  _listenForSwipes(element) {
    console.log(element)
    
    element.addEventListener('mousedown', e => {
      this._setState(USER_DRAGGING)
      this._anchorpoint.set(e.x, e.y)
      console.log(this)
    })
    element.addEventListener('mousemove', e => {
      if (this.currentState === USER_DRAGGING) {
        const delta = this._anchorpoint.getDelta(e.x, e.y)
      }
    })
    element.addEventListener('mouseup', e => {
      if (this.currentState === USER_DRAGGING) {
        this._setState(IDLE)
      }
    })
  }
}