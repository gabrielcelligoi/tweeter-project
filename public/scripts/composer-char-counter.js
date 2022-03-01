$(document).ready(function() {  
  $("#tweet-text").on('input', function(element) {
    let totalCharacters = element.target.value.length;
    let counterNum = 140 - totalCharacters;
    $(".counter").val(counterNum);
    if (counterNum < 0) {
      document.getElementsByClassName("counter")[0].style.color = "#ff0000";
    } else {
      document.getElementsByClassName("counter")[0].style.color = "#545149";
    }
  });

  console.log("document is ready");  
});

