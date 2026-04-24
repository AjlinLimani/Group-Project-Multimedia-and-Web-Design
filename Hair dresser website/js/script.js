window.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('.home .content');
    const h3 = homeSection.querySelector('h3');

   
    document.body.style.overflow = 'hidden';

   
    homeSection.style.opacity = 0;
    homeSection.style.transform = 'translateY(50px)';
    homeSection.style.transition = 'all 1s ease';

   
    setTimeout(() => {
        homeSection.style.opacity = 1;
        homeSection.style.transform = 'translateY(0)';

       
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 1000);
    }, 200);

   
    let i = 0;
    let text = "Your Style. Our Passion. Since 2026.";
    let speed = 30;

    h3.innerHTML = '';
    function typeEffect() {
        if (i < text.length) {
            h3.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }

   
    setTimeout(typeEffect, 400);
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('visitForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.box button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const price = button.closest('.box').querySelector('.amount').innerText;
      alert(`You booked a visit for $${price}`);
    });
  });
});