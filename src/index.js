import './css/index.css'

const links = document.querySelectorAll('nav a')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    document.querySelector('nav a.active').classList.remove('active')
    link.classList.add('active')

    document.querySelectorAll('section').forEach((section) => section.id == link.href.split('#')[1] ? section.classList.add('active') : section.classList.remove('active'))
  })
})