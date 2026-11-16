import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function initMobileSliders() {
  if (window.innerWidth < 768) {
    new Swiper('#js-brand-swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      pagination: { el: '.brand__pagination', clickable: true }
    })

    new Swiper('#js-repair-swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      pagination: { el: '.repair__pagination', clickable: true },
      on: {
        afterInit(swiper) {
          const bullets = swiper.pagination.bullets
          if (bullets && bullets.length >= 4) {
            bullets.forEach((b) =>
              b.classList.remove('swiper-pagination-bullet-active')
            )
            bullets[3].classList.add('swiper-pagination-bullet-active')
          }
        }
      }
    })

    new Swiper('#js-prices-swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      centerSlides: true,
      pagination: { el: '.prices__pagination', clickable: true }
    })
  }
}
