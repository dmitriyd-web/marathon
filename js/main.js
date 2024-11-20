document.addEventListener('DOMContentLoaded', function(){
	var lazyLoadInstance = new LazyLoad({});
	
	const navbarToggler = document.querySelector(".navbar-toggler")
	const navbar = document.querySelector(".navbar")

	navbarToggler.addEventListener("click", () => {
		navbarToggler.classList.toggle("open")
		navbar.classList.toggle("open")
	})

	//	animation
	if ( window.innerWidth >= 1025 ) {

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true
		})
		let itemsMain = gsap.utils.toArray('h1')

		itemsMain.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-1150',
					end: '-1000',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsBottom = gsap.utils.toArray('.section-single')

		itemsBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: 200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-1050',
					end: '-300',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsLeft = gsap.utils.toArray('.section-flex .category, .section-grid .section-aside')

		itemsLeft.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: -200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
		let itemsRight = gsap.utils.toArray('.sidebar, .section-flex .section-aside, section.section-grid .category')

		itemsRight.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 200 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-850',
					end: '-600',
					scrub: true,
					once: true
				}
			})
		})
		
	}
})