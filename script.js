function convert(degree){
  var x ;
  if (degree == "C"){

    x =
    document.getElementById("cell").value * 9/5 + 32;
     document.getElementById("fell").value = Math.round(x);
  } else{
    x =
    document.getElementById("fell").value  -32 * 5/9;
    document.getElementById("cell").value = Math.round(x);
  }
}