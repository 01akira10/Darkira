var height= document.body.clientHeight;
var width= document.body.clientWidth;

if (width<= 700){
  document.getElementsByClassName("experience")[0].classList.add("padding-decreaser");
  console.log(width);
}

if (width<= 300){
  document.getElementsByClassName("experience")[0].classList.add("padding-decreaser-ex");
  document.getElementsByClassName("experience")[1].classList.add("padding-decreaser-ex");
  document.getElementsByClassName("experience")[2].classList.add("padding-decreaser-ex");
  document.getElementsByClassName("skills")[0].classList.add("padding-decreaser-ex");
  document.getElementsByClassName("skills")[1].classList.add("padding-decreaser-ex");
  document.getElementsByClassName("bared")[0].classList.add("margin-decreaser-ex");
  document.getElementsByClassName("baredl")[0].classList.add("margin-decreaser-ex");

  document.getElementsByTagName("h2")[0].classList.add("font-decreaser-h2");
  document.getElementsByTagName("h2")[1].classList.add("font-decreaser-h2");
  document.getElementsByTagName("h2")[2].classList.add("font-decreaser-h2");
  document.getElementsByTagName("h2")[3].classList.add("font-decreaser-h2");
  document.getElementsByTagName("h2")[4].classList.add("font-decreaser-h2");

  document.getElementsByTagName("h3")[0].classList.add("font-decreaser-h3");
  document.getElementsByTagName("h3")[1].classList.add("font-decreaser-h3");
  document.getElementsByTagName("h3")[2].classList.add("font-decreaser-h3");
  document.getElementsByTagName("h3")[3].classList.add("font-decreaser-h3");
  document.getElementsByTagName("h3")[4].classList.add("font-decreaser-h3");

  document.getElementsByTagName("li")[6].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[7].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[8].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[9].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[10].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[11].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[12].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[13].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[14].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[15].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[16].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[17].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[18].classList.add("font-decreaser-li");
  document.getElementsByTagName("li")[19].classList.add("font-decreaser-li");

  document.getElementsByTagName("h4")[1].classList.add("font-decreaser-h4");
  document.getElementsByTagName("h4")[2].classList.add("font-decreaser-h4");
  document.getElementsByTagName("h4")[3].classList.add("font-decreaser-h4l");
  document.getElementsByTagName("h4")[4].classList.add("font-decreaser-h4l");

  console.log(width);
}
