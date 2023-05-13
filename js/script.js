$( function() {
  $(".draggable").draggable({
    start: function(event, ui) {
      $(this).css("zIndex", "1000"); // set zIndex to 1000 when dragging starts
      $(".draggable").not(this).css("zIndex", "auto"); // reset zIndex for all other draggables
    }
  });

  $(".stacked").on("mousedown", function() {
    $(this).css("zIndex", "1000"); // set zIndex to 1000 when element is clicked
    $(".stacked").not(this).css("zIndex", "auto"); // reset zIndex for all other stacked elements
  });
});


// change background
const images = [
  "/img/bg/bg-2.jpeg",
  "/img/bg/bg-3.jpeg",
  // add more file paths here
];
let currentIndex = 0;

function changeBackground() {
  const container = document.querySelector('.body');
  container.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

document.getElementById('change-bg').addEventListener('click', changeBackground);
