export default function initServicesReadMoreToggle() {
  const toggleBtn = document.getElementById('js-services-read-more');
  const hiddenParagraph = document.getElementById('js-services-text-hidden');
  const btnText = document.getElementById('js-services-read-more-text');
  const btnIcon = document.getElementById('js-services-read-more-icon');

  if (!toggleBtn || !hiddenParagraph || !btnText || !btnIcon) return;

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const isCollapsed = !hiddenParagraph.classList.contains('services__paragraph--active');

    if (isCollapsed) {
      hiddenParagraph.classList.add('services__paragraph--active');
      btnText.textContent = 'Hide';
      btnIcon.classList.add('services__read-more-icon--rotated'); 
    } else {
      hiddenParagraph.classList.remove('services__paragraph--active');
      btnText.textContent = 'Read more';
      btnIcon.classList.remove('services__read-more-icon--rotated'); 
    }
  });
}
