/**
 * Define Global Variables
 * 
*/
const nav =document.getElementsByClassName('navbar-menu');
const navList=document.getElementById('navbar-list');
const sections =document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// create Nav Elements
sections.forEach(el => {
    const navlistElements = `<li class='menu_link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`
    navList.insertAdjacentHTML('beforeend', navlistElements)
  })

// create EventListener
navList.addEventListener('click', event => {
    event.preventDefault()
    const parent = event.target.hasAttribute('data-link') ? event.target : event.target.parentElement
    const elementToScrollTo = document.getElementById(parent.dataset.link)
    elementToScrollTo.scrollIntoView({ behavior: 'smooth'})
  })

  // Activation 
  window.addEventListener('scroll', function (event)  {
  sections.forEach(el=>{
      sectionID=document.getElementById(el.id)
      if(el.classList.contains('active')){
          el.classList.remove('active')
      }
      else{
        el.classList.add('active')
      }
  })})

 /* const callback = entries => {
    entries.forEach(entry => {
      const navListElement = document.querySelector(`.menu_link[data-link='${entry.target.id}']`)
      const section = document.getElementById(entry.target.id)

      if (entry && entry.isIntersecting) {
        navListElement.classList.add('active')
        section.classList.add('active')
      } else {
        if (navListElement.classList.contains('active')) {
          navListElement.classList.remove('active')
        }
  
        if (section.classList.contains('active')) {
          section.classList.remove('active')
        }
      }
    })
  }
  
  // Options for the observer. Most important is the threshold
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  }
  
  // Setting an observer with options and a callback which checks if the navelement should be active
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  const observer = new IntersectionObserver(callback, options)
  sections.forEach(el => {
    observer.observe(document.getElementById(el.id))
  })
  */

