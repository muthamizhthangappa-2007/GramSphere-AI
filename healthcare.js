function checkHealth() {

    let name =
        document.getElementById("name").value;

    let age =
        document.getElementById("age").value;

    let symptom =
        document.getElementById("symptom").value;

    let advice = "";

    if (symptom === "Fever") {
        advice =
            "Possible viral infection. Drink water and consult a doctor.";
    }

    else if (symptom === "Cough") {
        advice =
            "Possible cold or allergy. Monitor symptoms.";
    }

    else if (symptom === "Headache") {
        advice =
            "Take rest and stay hydrated.";
    }

    else if (symptom === "Body Pain") {
        advice =
            "Rest and consult a healthcare professional if pain persists.";
    }

    else if (symptom === "Breathing Difficulty") {
        advice =
            "Immediate medical attention recommended.";
    }

    document.getElementById("healthResult")
        .innerHTML =
        `
        <h3>AI Health Report</h3>
        <p><b>Patient:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Symptom:</b> ${symptom}</p>
        <p>${advice}</p>
        `;
}