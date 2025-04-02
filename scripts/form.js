
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  console.log('Form element:', form); 

  if(form) {
      form.addEventListener('submit', function(e) {
          console.log('Form submitted'); 
          e.preventDefault();
          window.location.href = 'thank-you.html';
      });
  } else {
      console.error('Form not found!'); 
  }
});