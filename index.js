setInterval(() => {
  let hours = $("#hours")[0];
  let minutes = $(document.getElementById("minutes"));
  let seconds = $("#seconds")[0];
  let meridiem = $("#indicator")[0];

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  let hh = $("#hh")[0];
  let mm = $("#mm")[0];
  let ss = $("#ss")[0];

  // Conversion of 24hr to 12hr
  if (h > 12) {
    h = h - 12;
  }

  //Add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12; //Offset = Create Space
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  let hh_dot = document.querySelector(".hh_dot");
  let mm_dot = document.querySelector(".mm_dot");
  let ss_dot = $(".ss_dot")[0];

  hh_dot.style.transform = `rotate(${h * 30}deg)`;
  mm_dot.style.transform = `rotate(${m * 6}deg)`;
  ss_dot.style.transform = `rotate(${s * 6}deg)`;

  $(hours).text(h).append("<br><span>Hours</span>");
  $(minutes).text(m).append("<br><span>Minutes</span>");
  $(seconds).text(s).append("<br><span>Seconds</span>");
  $(meridiem).text(am);
});
