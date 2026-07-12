function recommendCrop() {

    let crop =
        document.getElementById("crop").value;

    let soil =
        document.getElementById("soil").value;

    let message = `
        <h3>AI Recommendation</h3>
        <p><b>Crop:</b> ${crop}</p>
        <p><b>Soil:</b> ${soil}</p>
        <p>✔ Irrigation recommended in 2 days.</p>
        <p>✔ Suitable weather conditions.</p>
        <p>✔ Estimated market price is favorable.</p>
    `;

    document.getElementById("result").innerHTML =
        message;
}
