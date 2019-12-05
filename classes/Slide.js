export class Slide {
  constructor(slide) {
    this.slide = slide
  }

  render() {
    const slide = this.slide

    return `<div class="slide">
      <picture>
        <img src="${slide.poster}">
      </picture>
      <h4>${slide.title}</h4>
    </div>`
  }
}