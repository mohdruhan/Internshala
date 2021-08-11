function slideshow() {
  let slider = [
    "images/first.PNG",
    "images/second.PNG",
    "images/third.PNG",

  ];

  let div = document.getElementById("slider");
  let div_1 = document.getElementById("dot");

  let img = document.createElement("img");
  let dot1 = document.getElementById("button2");

  let add = document.createElement("div");
  let add1 = document.createElement("div");
  let add2 = document.createElement("div");

  add.id = "five";

  let i = 0;

  img.src = slider[0];
  img.setAttribute("id", "carasol");

  div.insertBefore(img, dot1);
  if (i == 0) {
    div_1.append(add, add1, add2);
  }

  setInterval(function () {
    img.src = slider[i];
    if (i == 0) {
      div_1.append(add, add1, add2);
    }

    if (i == 1) {
      div_1.append(add1, add, add2);
    }
    if (i == 2) {
      div_1.append(add1, add2, add);
    }


    i++;

    if (i == 3) {
      i = 0;
    }
  }, 3000);
}
slideshow();
