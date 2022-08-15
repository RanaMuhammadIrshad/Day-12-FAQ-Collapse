const toggleBtn = document.querySelectorAll('.faq-toggle');

let Content = document.querySelectorAll('.faq');

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    Content = e.target.closest('.faq');
    Content.classList.toggle('active');
  });
});
