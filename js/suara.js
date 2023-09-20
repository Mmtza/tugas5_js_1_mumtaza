$(document).ready(function () {
  //---------------menampilkan gambar------------------
  $("div.hantu").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/hantu.jpg")',
    });
  });
  $("div.merak").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/merak.jpg")',
    });
  });
  $("div.pipit").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/pipit.jpg")',
    });
  });
  //---------------menampilkan suara------------------
  $("div.hantu").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-burung-hantu.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.merak").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-burung-merak.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.pipit").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-burung-pipit.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  //---------------menampilkan gambar hewan buas------------------
  $("div.singa").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/singa.jpg")',
    });
  });
  $("div.serigala").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/serigala.jpg")',
    });
  });
  $("div.ular").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/ular.jpg")',
    });
  });
  //---------------menampilkan suara hewan buas------------------
  $("div.singa").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanbuas-singa.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.serigala").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanbuas-serigala.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.ular").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanbuas-ular.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  //---------------menampilkan gambar hewan ternak------------------
  $("div.ayam").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/ayam.jpg")',
    });
  });
  $("div.sapi").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/sapi.jpg")',
    });
  });
  $("div.kambing").click(function () {
    $(this).css({
      "background-color": "white",
      border: "1px solid blue",
      "background-image": 'url("images/kambing.jpg")',
    });
  });
  //---------------menampilkan suara hewan ternak------------------
  $("div.ayam").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanternak-ayam.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.sapi").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanternak-sapi.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
  $("div.kambing").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/suara-hewanternak-kambing.mp3",
        volume: "0.5",
        autoplay: "autoplay",
      })
      .appendTo("div");
  });
});
