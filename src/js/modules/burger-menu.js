export default function initMobileBurgerMenu() {
  const openBtn = document.getElementById('js-menu-open')
  const closeBtn = document.getElementById('js-menu-close')
  const sidebar = document.getElementById('js-sidebar')
  const overlay = document.querySelector('.sidebar-overlay')

  if (!openBtn || !sidebar) return

  const openMenu = () => {
    sidebar.classList.add('sidebar--open')
    if (overlay) overlay.classList.add('sidebar-overlay--visible')
  }

  const closeMenu = () => {
    sidebar.classList.remove('sidebar--open')
    if (overlay) overlay.classList.remove('sidebar-overlay--visible')
  }

  openBtn.addEventListener('click', openMenu)
  if (closeBtn) closeBtn.addEventListener('click', closeMenu)
  if (overlay) overlay.addEventListener('click', closeMenu)
}
