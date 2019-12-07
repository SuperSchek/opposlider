import { movieData } from './movies'
// import { Slide } from './classes/Slide'
// import { InteractionManager } from './classes/InteractionManager'
import { Slider } from './classes/Slider'

const slider = document.querySelector('.slider')

new Slider(slider, movieData)

// new InteractionManager(slider)