// // Set the date we're counting down to
// let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// let x = setInterval(function () {
//     // Get today's date and time
//     let now = new Date().getTime();

//     // Find the distance between now and the count down date
//     let distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.querySelector(".demo").innerHTML =
//         days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.querySelector(".demo").innerHTML = "EXPIRED";
//     }
// }, 1000);

// //add svg animation
// anime({
//     targets: ".polymorph",
//     points: [
//         {
//             value: ["0,10 -25,30 25,40 50,10", "0,10 30,40 40,14 30,-10"],
//         },
//         {
//             value: "0,10 25,40 32,13 32,-5",
//         },
//         {
//             value: "0,10 10,30 60,30 40,10",
//         },
//         {
//             value: "0,10 10,50 40,40 30,10",
//             rotate: "1turn",
//         },
//     ],
//     easing: "easeOutQuad",
//     duration: 6000,
//     loop: true,
//     direction: "alternate",
// });
