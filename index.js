const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      else {
          entry.target.classList.remove('show');
      }
  });
});


const hiddenElements = document.querySelectorAll('.hidden-left');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElement = document.querySelectorAll('.hidden-right');
hiddenElement.forEach((el) => observer.observe(el));