document.getElementById("submit").onclick = function () {
    // Parse inputs as floats
    let Tm = parseFloat(document.getElementById("Tm").value);
    let T0 = parseFloat(document.getElementById("T0").value);
    let t0 = parseFloat(document.getElementById("t0").value);
    let T1 = parseFloat(document.getElementById("T1").value);
    let t1 = parseFloat(document.getElementById("t1").value);
    let t2 = parseFloat(document.getElementById("t2").value);

    console.log("Tm:", Tm, "T0:", T0, "t0:", t0, "T1:", T1, "t1:", t1, "t2:", t2);

    // formula
    let C = T0 - Tm;
    console.log(C);
    let k = Math.log((T1 - Tm) / C) / (t1 - t0); // para sa k
    console.log(k);
    // Calculate the temperature at time t2
    let T = Tm + C * Math.exp(k * (t2 - t0));

    // output
    document.querySelector(".showAnswer").innerHTML =
        `<strong>C:</strong> ${C}<br>` +
        `<strong>k:</strong> ${k}<br>` +
        `<strong>Temperature (T):</strong> At time = ${t2}, the temperature would reach ${T.toFixed(2)} units`;
};
