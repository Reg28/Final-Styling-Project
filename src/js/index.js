import '../scss/style.scss'

import initMobileBurgerMenu from './modules/burger-menu'
import initServicesReadMoreToggle from './modules/read-more'
import initMobileSliders from './modules/swiper'
import initBrandsToggle from './modules/brands-toggle'
import initRepairToggle from './modules/repair-toggle'

document.addEventListener('DOMContentLoaded', () => {
  initMobileBurgerMenu()
  initServicesReadMoreToggle()
  initMobileSliders()
  initBrandsToggle()
  initRepairToggle()
})
