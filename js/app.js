/**
 * Define Global Variables
 * 
*/
const nav =document.getElementsByClassName('navbar-menu');
const navList=document.getElementById('navbar-list');
const sections =document.querySelectorAll('section');
///* Determining if element is in viewport */ 
var isInViewport = function (el) {
	var distance = el.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
// create Nav Elements
sections.forEach(el => {
    const navlistElements = `<li class='menu_link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`
    navList.insertAdjacentHTML('beforeend', navlistElements)
  })

// create EventListener on Navbar items 
navList.addEventListener('click', event => {
    event.preventDefault()
    const parent = event.target.hasAttribute('data-link') ? event.target : event.target.parentElement
    const elementToScrollTo = document.getElementById(parent.dataset.link)
    window.scroll({top:elementToScrollTo.offsetTop-50,behavior: 'smooth'})
  })

  // Activation sections while scrolling 
  window.addEventListener('scroll', function (event)  {
  sections.forEach(el=>{
    const navLink = document.querySelector( `a[href="#${el.getAttribute("id")}"]`);
    if(isInViewport(el)){
        el.classList.add("active")
        navLink.classList.add("link_active")
  }
  else {
    el.classList.remove("active");
    navLink.classList.remove("link_active");
  }
})
  })
  // Hide and Show Navbar while scrolling 
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }


