export class Point {
  constructor(x = null, y = null) {
    this.x = x
    this.y = y
  }

  /**
   * Sets the X and Y values for this Point instance
   * @public
   * 
   * @param {number} x 
   * @param {number} y 
   */
  set(x, y) {
    this.x = x
    this.y = y
  }

  /**
   * Get delta values relative to the anchorpoint
   * 
   * @param {number} x - Location of cursor on X-axis
   * @param {number} y - Location of cursor on Y-axis
   * @param {boolean} [absolute=false] - Whether or not to call Math.abs() on the delta values
   * 
   * @returns {Point}
   */
  getDelta(x, y, absolute = false) {
    console.log(y)
    const deltaX = this.x - x
    const deltaY = this.y - y

    if (absolute) {
      return new Point(Math.abs(deltaX), Math.abs(deltaY))
    } else {
      return new Point(deltaX, deltaY)
    }
  }
}