function generarArbolDeNavidad(altura) {
  let arbolNavidad = "";
  
  const arbolNavidadObj = {
    Hojas: "*",
    BarritaBaja: " ",
    tronco: "| |",
  };
  
  const {Hojas, BarritaBaja, tronco} = arbolNavidadObj;
  
  for(let i = 1; i <= altura; i++){
    arbolNavidad = arbolNavidad.concat(BarritaBaja.repeat(altura - i), Hojas.repeat(i + i - 1), BarritaBaja.repeat(altura - i),'\n');
  }
  
  arbolNavidad = arbolNavidad.concat(BarritaBaja.repeat(altura - 2), tronco, BarritaBaja.repeat(altura - 1), '\n')
  arbolNavidad = arbolNavidad.concat(BarritaBaja.repeat(altura - 2), tronco, BarritaBaja.repeat(altura - 1))
  return arbolNavidad;
}

let fraseInicio = "Admiren la navidad en su máximo explendor"
console.log(fraseInicio.fontcolor('red'));
console.log(generarArbolDeNavidad(8));