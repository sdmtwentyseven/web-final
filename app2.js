// made by Skakovskiy Dmitriy


// --------------------------------------------

$(document).ready(function() {

  var audioPlayer = $("#audio-player")[0];

  $("#main-button").click(function() {
    $(".button-options").toggleClass("show");
  });


  $("#play-button").on('click' , function() {
     // Get the audio element
    if (audioPlayer.paused) {
      audioPlayer.play(); // Play the audio
    }
      // Pause the audio
  });


  $("#stop-button").on('click' , function() {
  
    if (audioPlayer.paused != true) {
      audioPlayer.pause(); 
    }
  });

  $("#repeat-button").on('click' , function() {
    // Add functionality for Repeat button
    if(audioPlayer.currentTime != 0)
    {
      audioPlayer.currentTime = 0;
      audioPlayer.play()
    }
    // Play the audio
  });
});

// ----------------------------------------------------------

const test = document.getElementById("navbaritems");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.color = "grey";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "#0D6EFD";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
