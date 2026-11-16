export default function initRepairToggle() {
  const repairList = document.querySelector('.repair__list')
  const showMoreBtn = document.getElementById('repair__show-more-btn')
  const btnText = document.getElementById('repair__btn-text')
  const btnIcon = document.getElementById('repair__btn-icon')

  if (!repairList || !showMoreBtn || !btnText || !btnIcon) return

  showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const isExpanded = repairList.classList.contains('repair__list--expanded')

    if (!isExpanded) {
      repairList.classList.add('repair__list--expanded')
      btnText.textContent = 'Hide'
      btnIcon.classList.add('repair__toggle-icon--rotated')
    } else {
      repairList.classList.remove('repair__list--expanded')
      btnText.textContent = 'Show all'
      btnIcon.classList.remove('repair__toggle-icon--rotated')
    }
  })
}
