// Animate the header text
const headerText = document.querySelector('header h1');
headerText.style.opacity = 0;
headerText.style.transform = 'translateY(-20px)';

const headerSubtitle = document.querySelector('header h2');
headerSubtitle.style.opacity = 0;
headerSubtitle.style.transform = 'translateY(-20px)';

window.addEventListener('load', () => {
  headerText.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  headerText.style.opacity = 1;
  headerText.style.transform = 'translateY(0)';

  headerSubtitle.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  headerSubtitle.style.opacity = 1;
  headerSubtitle.style.transform = 'translateY(0)';
});

// Add a scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.classList.add('scroll-to-top-button');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// fine tune the header font size and color
document.querySelector('header h1').style.fontSize = '40px';
document.querySelector('header h1').style.color = 'navy';

// fine tune the main section font size and color
document.querySelector('main').style.fontSize = '18px';
document.querySelector('main').style.color = 'gray';

// fine tune the "About Me" section background color
document.querySelector('main h3:first-of-type').style.backgroundColor = 'lightblue';

// fine tune the list of interests by adding a margin
document.querySelector('main ul:nth-of-type(2)').style.marginBottom = '30px';

// fine tune the "Contact Me" section by adding a border
document.querySelector('main h3:last-of-type').style.borderBottom = '2px solid navy';
