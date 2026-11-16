export default function initBrandsToggle() {
  const brandList = document.querySelector('.brand__list');
  const showMoreBtn = document.getElementById('brand__show-more-btn');
  const btnText = document.getElementById('brand__btn-text');
  const btnIcon = document.getElementById('brand__btn-icon');

  if (!brandList || !showMoreBtn || !btnText || !btnIcon) return;

  showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const isExpanded = brandList.classList.contains('expanded');

    if (!isExpanded) {
      brandList.classList.add('expanded');
      btnText.textContent = 'Hide';
      btnIcon.classList.add('rotate-arrow'); 
    } else {
      brandList.classList.remove('expanded');
      btnText.textContent = 'Show all';
      btnIcon.classList.remove('rotate-arrow');
    }
  });
}
