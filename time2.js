document.getElementById("submit").onclick = function () {
    // Parse inputs as floats
    let Tm = parseFloat(document.getElementById("Tm").value);
    let T0 = parseFloat(document.getElementById("T0").value);
    let t0 = parseFloat(document.getElementById("t0").value);
    let T1 = parseFloat(document.getElementById("T1").value);
    let t1 = parseFloat(document.getElementById("t1").value);
    let T2 = parseFloat(document.getElementById("T2").value);

    console.log("Tm:", Tm, "T0:", T0, "t0:", t0, "T1:", T1, "t1:", t1, "T2:", T2);

    // Calculate constants
    let C = T0 - Tm; // Initial difference
    console.log("C:", C);

    // Calculate cooling/heating constant (k)
    let k = Math.log((T1 - Tm) / C) / (t1 - t0); // Correct formula for k
    console.log("k:", k);

    // Calculate the time (t) to reach T2
    let t = (1 / k) * Math.log((T2 - Tm) / (T0 - Tm)); // Corrected formula for t
    console.log("t:", t);

    // Output result
    document.querySelector(".showAnswer").innerHTML = 
        `<strong>C:</strong> ${C}<br>` +
        `<strong>k:</strong> ${k}<br>` +
        `<strong>Time (t):</strong> It will take ${t} or ${t.toFixed(2)} long time for the temperature to reach ${T2}.`;
};


