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
   * @param {HTMLElement} element - Element the events should be applied to
   */
  _initializeListeners(element) {
    this._listenForMovement(element)
  }

  _listenForMovement(element) {
    // element.addEventListener('mousedown', e => {
    //   this._moveStart(e)
    //   element.style.transform = `translateY(100px)`
    // })
    // element.addEventListener('touchstart', e => {
    //   this._moveStart(e)
    // })
    // element.addEventListener('touchmove', e => {
    //   if (this.currentState === USER_DRAGGING) {
    //     const delta = this._anchorpoint.getDelta(e.changedTouches[0].screenX, e.changedTouches[0].screenY)
    //     element.style.transform = `translateY(${delta}px)`
    //   }
    // })
    // element.addEventListener('mouseup', e => {
    //   if (this.currentState === USER_DRAGGING) {
    //     this._setState(IDLE)
    //   }
    // })
  }

  _moveStart($event) {
    // this._setState(USER_DRAGGING)
    // this._anchorpoint.set($event.changedTouches[0].screenX, $event.changedTouches[0].screenY)
    // // this._anchorpoint.set($event.x, $event.y)
    // console.log($event)
  }
}