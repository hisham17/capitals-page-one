function openCity(cityName, elmnt, color) {
  var i, tablinks, tabcontent;
  //hide all the elements in the class tabcontent
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //remove the background color from every tablinks/button
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  //
  document.getElementById(cityName).style.display = "block";
  //
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();
