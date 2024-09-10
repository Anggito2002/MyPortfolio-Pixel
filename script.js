let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
const textAbout = ' I\'m a Computer Science student at Universitas Negeri Semarang with a strong passion for digital media and UI/UX design. I enjoy creating intuitive and visually appealing interfaces that provide great user experiences. Known for being creative, innovative, and a good team player, I work well under pressure and communicate clearly. I\'m always eager to learn more and not afraid to try new things.';
const typewriterAbout = document.querySelector('.typewriter.about');

let i = 0;
let timer = setInterval(() => {
  typewriterAbout.textContent += textAbout[i];
  i++;
  if (i >= textAbout.length) {
    clearInterval(timer);
    typewriterWork.textContent = '';
    let j = 0;
    let timerWork = setInterval(() => {
      typewriterWork.textContent += textWork[j];
      j++;
      if (j >= textWork.length) {
        clearInterval(timerWork);
      }
    }, 50);
  }
}, 50);

const textWork = 'Here are some of the projects I\'ve worked on, showcasing my work across different areas with a focus on quality and great results.';
const typewriterWork = document.querySelector('.typewriter.work');

//EmailJS//
  function sendEmail(event) {
    event.preventDefault();

    emailjs.init('xzVbqKBCwHw5eID49');

    const form = document.getElementById('contact-form');

    const templateParams = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      user_message: form.user_message.value
    };

    emailjs.sendForm('service_5ga0fvq', 'template_r9l5n17', '#contact-form', 'xzVbqKBCwHw5eID49')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Error sending message. Please try again.');
      });
  }