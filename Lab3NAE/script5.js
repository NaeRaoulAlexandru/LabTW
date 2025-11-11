var nr1;
var nr2;
var nr3;

if((nr1 + nr2 > nr3) && (nr1 + nr3 > nr2) && (nr2 + nr3 > nr1)) {
    console.log("Cele 3 numere nu pot reprezenta laturile unui triunghi.");
}
else if((nr1 == nr2 && nr2 != nr3) || (nr2 == nr3 && nr3 != nr1) || (nr1 == nr3 && nr1 != nr2)){
    console.log("triunghiul este isoscel.");
}
else if((nr1 == nr2 && nr2 == nr3) || (nr2 == nr3 && nr3 == nr1) || (nr1 == nr3 && nr1 == nr2)){
    console.log("triunghiul este echilateral.");
}
else {
    console.log("triunghiul este oarecare.");
}
