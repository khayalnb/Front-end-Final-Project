
$('#simple_timer').syotimer({

  year: 2021,

  month: 10,

  day: 9,

  hour: 20,

  minute: 30

});

// let icon=document.querySelectorAll('.icon_hover')
// let change=document.querySelector('.menu-change')




// icon.forEach(element=>{
//   element.addEventListener('click', ()=>{
//     element.classList.toggle('rotateIcon');
//     let change=document.querySelector('.menu-change');
//     change.classList.toggle('menu-active')


// })})


$(".icon_hover").on("click", function () {
  $(".icon_hover").children().not($(this)).removeClass('rotateIcon');
  $(this).children().toggleClass("rotateIcon")
  $(this).on("click", ()=>{
    $(this).children().not($(this)).toggleClass('rotateIcon');
  })
  $(".icon_hover").next().not($(this).next()).removeClass('menu-active')
  $(this).next().toggleClass("menu-active")
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
