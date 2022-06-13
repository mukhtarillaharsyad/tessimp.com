$(window).scroll(function(){
  if($(this).scrollTop() > 280){
    $('.topBtn').fadeIn();
  } else{
    $('.topBtn').fadeOut();
  }
});

$(".topBtn").click(function(){
  $('html, body').animate({scrollTop : 0}, 150);
});

$(".explore").click(function(){
  $('html, body').animate({scrollTop : 660}, 100);
});


const menu = document.getElementsByClassName('menu');
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function(){
    this.classList.toggle('active');
  });
}


const contactForm = document.getElementById('form-action');
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      loader.style.display = "none";
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("Error occured"));
});