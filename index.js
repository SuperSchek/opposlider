import { movieData } from './movies'
import { Slider } from './classes/Slider'

const slider = document.querySelector('.slider')

new Slider(slider, movieData)