document.getElementById("submit").onclick = function() {
    let t0 = parseFloat(document.getElementById("t0").value);
    let P0 = parseFloat(document.getElementById("P0").value);
    let t1 = parseFloat(document.getElementById("t1").value);
    let P1 = parseFloat(document.getElementById("P1").value);
    let P2 = parseFloat(document.getElementById("P2").value);

    console.log("t0:", t0, "P0:", P0, "t1:", t1, "P1:", P1, "P2:", P2);

    // Initial constant C
    let C = P0;
    let e = Math.E; // Euler's number
    let k = Math.log(P1 / C) / (t1 - t0); // Growth/decay constant

    // Population at time t2
    let t = Math.log(P2/C)/k;

    // Display the result in the HTML under "ANSWER"
    document.querySelector(".showAnswer").innerHTML = 
        `<strong>C:</strong> ${C}<br>` +
        `<strong>k:</strong> ${k}<br>` +
        `<strong>Time (t):</strong> It will take ${t} or ${t.toFixed(0)} long time for the population to reach ${P2}` ;
};

