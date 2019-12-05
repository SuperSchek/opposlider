import { movieData } from './movies'
import { Slide } from './classes/Slide'
import { InteractionManager } from './classes/InteractionManager'

const slider = document.querySelector('.slider')

movieData.forEach(movie => {
  const slide = new Slide(movie).render()

  slider.insertAdjacentHTML('beforeend', slide)
})

new InteractionManager(slider)