const input = document.getElementById("inputDiagonal");

function calc() {
  const content = input.value;
  const val = content.split(" ");
  let ver = true;

  for (var i = 0; i < val.length; i++) {
    if (val[i].length != val.length) {
      ver = false;
      break;
    }
  }

  if (ver) {
    var principal = 0
     var secondary = 0;
    for (var i = 0; i < val.length; i++) {
      for (var j = 0; j < val.length; j++) {
        if (i == j) principal += parseInt(val[i][j]);

        if (i + j == val.length - 1) secondary += parseInt(val[i][j]);
      }
    }

    const abs = Math.abs(principal - secondary);
    console.log(principal);
    console.log(secondary);
    alert("El resultado es " + abs);
  } else {
    alert("La matriz no es cuadrada");
  }
}

export default calc();