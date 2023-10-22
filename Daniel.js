function dpage( ) {
  var naam = prompt("Wat is jou naam???")
  if (naam = "Daniel") {
    alert("HALLO DANIEL!!! Hier is 'n spesiale page net vir jou =)");
    document.getElementById("demo").innerHTML =
       "<a href=Net_vir_jou_Daniel.html>Jou spesiale page, Daniel </a>";
  }
  else {
    document.getElementById("demo").innerHTML =
       "Hallo, " + naam
  }
}
