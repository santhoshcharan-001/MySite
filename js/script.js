const root = document.querySelector(":root");

if ("serviceWorker" in navigator) {
  console.log("CLIENT: service worker registration in progress.");
  navigator.serviceWorker.register("/service-worker.js").then(
    function () {
      console.log("CLIENT: service worker registration complete.");
    },
    function () {
      console.log("CLIENT: service worker registration failure.");
    }
  );
} else {
  console.log("CLIENT: service worker is not supported.");
}

$(window).on("load", function () {
  $(".loader-container").fadeOut("slow");
});

$(".nav-link").click(function () {
  $("nav").removeClass("show-nav");
  $(".card").removeClass("card-active");
  $(".nav-link").removeClass("nav-link-active");
  $(this).addClass("nav-link-active");
  if ($(this).attr("data-name") === "about") {
    $("#signature").addClass("anim");
    setTimeout(function () {
      $("#signature").removeClass("anim");
    }, 2200);
  }
  if ($(this).attr("data-name") != "home") {
    location.hash = $(this).attr("data-name");
  } else {
    location.hash = "";
  }

  $(".card." + $(this).attr("data-name")).addClass("card-active");
});

$(".toggle-nav").click(function () {
  $("nav").toggleClass("show-nav");
});

new TypeIt(".typeit", {
  cursor: true,
  waitUntilVisible: true,
  loop: true,
})
  .type("Web Developer")
  .pause(2000)
  .delete(13)
  .type("Freelancer")
  .pause(2000)
  .delete(10)
  .type("Python Developer")
  .pause(2000)
  .delete(16)
  .type("UI/UX Designer")
  .pause(2000)
  .go();
