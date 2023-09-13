const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active')
    burgerIcon.classList.toggle('active')
})

// działanie po kliknieciu w opis ofert i regulamiu
document.addEventListener("DOMContentLoaded", function() {
    const opisContainers = document.querySelectorAll(".opis-container");

    opisContainers.forEach(opisContainer => {
        const opis = opisContainer.querySelector(".opis");
        const downIcon = opisContainer.querySelector(".down");
        let isOpen = false;

        opisContainer.addEventListener("click", function() {
            isOpen = !isOpen;
            opis.style.maxHeight = isOpen ? opis.scrollHeight + "px" : "0";
            opisContainer.classList.toggle("active");
            downIcon.classList.toggle("active");
        });
    });
});



  // Funkcja do obsługi przewinięcia po kliknięciu na link z kotwicą
  function scrollToAnchor(anchor) {
    const targetElement = document.querySelector(anchor);

    if (targetElement) {
      const offset = -5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 5rem w pikselach
      const targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetOffsetTop + offset,
        behavior: 'smooth' // płynne przewinięcie
      });
    }
  }

  // Nasłuchuj kliknięcia na linki z kotwicami
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Zatrzymaj domyślne zachowanie kliknięcia
      const anchor = link.getAttribute('href');
      scrollToAnchor(anchor);
    });
  });

//logo na poczatku//


window.addEventListener('load', function() {
    const logoContainer = document.querySelector('.logo-container');
    const contentContainer = document.querySelector('.content-container');
    const body = document.body;

    setTimeout(function() {
        logoContainer.style.display = 'none';
        contentContainer.style.display = 'block';
        body.classList.add('loaded');
    }, 2000); // Czas w milisekundach, tutaj 2000 ms (2 sekundy)
});
