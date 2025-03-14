const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

emailjs.init("Tbu6cHcf2DOLhdDl2");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_zkatdjb', 'template_31i0yck', '#contact-form')
    .then(() => {
      contactMessage.textContent = 'Message sent successfully';
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      contactForm.reset();
    })
    .catch((error) => {
      contactMessage.textContent = 'Oops! Something went wrong, please try again later.';
      console.error('Error sending email:', error);
    });
};

contactForm.addEventListener('submit', sendEmail);




const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                   : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

 
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; 
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector(`.nav__list a[href*=${sectionId}]`); 

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  });

  sr.reveal('.perfil, .contact__form');
  sr.reveal('.info', { origin: 'left', delay: 800 });
  sr.reveal('.skills', { origin: 'left', delay: 1000 });
  sr.reveal('.about', { origin: 'right', delay: 1200 });
  sr.reveal('.projects__card, .services__card, .experience__card', { interval: 1000 });
});