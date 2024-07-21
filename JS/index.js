"use strict";

//================>>side bar
$(".openIcon").on("click", () => {
  $(".open").css("left", "0px");
});
$(".close").on("click", () => {
  $(".open").css("left", "-270px");
});

//================>> accordion

$(".accordion").on("click", (e) => {
  $(".accordion").removeClass(".activeAccordion");
  $(e.target).next().slideToggle();
  $(".panel").not($(e.target).next()).slideUp();
});

//===================>> Counter
let time = setInterval(() => {
  let now = new Date().getTime();
  let countDownDate = new Date("2024-07-30 GMT+0200").getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#Day").html(`${days} D`);
  $("#Hour").html(`${hours} h`);
  $("#Min").html(`${minutes} m`);
  $("#sec").html(`${seconds} s`);
}, 1000);

// $("textArea").on("keyup", (e) => {
//   console.log($(e.target).val().length);
//   $("#remainCharacters").text(100 - length <=0 ? "Not allowedCharacyer Reamining" :100 -length);
// });


$("textArea").on("keyup", (e) => {
     let myLength=($(e.target).val().length);
     console.log(myLength);
      $("#remainCharacters").text(
        100 - myLength <=0 ? "Not allowedCharacyer Reamining" :100 -myLength);
    });
    