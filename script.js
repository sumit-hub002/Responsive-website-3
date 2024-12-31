// Menubar Responsive
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("hidden");
});




// Testimonail
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const carousel = document.getElementById('testimonialCarousel');
const colors = ['bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-pink-200', 'bg-purple-200' ];


function changeTestimonial(direction){
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');

}





