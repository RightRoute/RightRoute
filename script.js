document.getElementById('plannerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the usual way

    const age = parseInt(document.getElementById('age').value);
    const career = document.getElementById('career').value.trim().toLowerCase();

    // Generate plan based on age and career
    const plan = generatePlan(age, career);

    // Display the plan
    displayPlan(plan);

    // Show the plan section
    document.getElementById('planOutputSection').style.display = 'block';
});

function generatePlan(age, career) {
    let plan = [];
    
    // Career: Software Engineer
    if (career === 'software engineer') {
        if (age <= 22) {
            plan = [
                "Complete a computer science degree or bootcamp.",
                "Start building small projects to gain experience.",
                "Apply for internships and entry-level developer positions."
            ];
        } else if (age <= 30) {
            plan = [
                "Get a full-time developer job.",
                "Work on building a portfolio with more complex projects.",
                "Start learning new technologies and frameworks."
            ];
        } else {
            plan = [
                "Consider transitioning into a senior or management role.",
                "Contribute to open-source projects or mentor junior developers."
            ];
        }
    }

    // Default message for unrecognized careers
    else {
        plan = [
            "Please consult a career advisor for a personalized plan."
        ];
    }

    return plan;
}

function displayPlan(plan) {
    const planOutput = document.getElementById('planOutput');
    planOutput.innerHTML = ''; // Clear previous plan
    plan.forEach((step, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="checkbox" id="step${index}">
            <label for="step${index}">${step}</label>
        `;
        planOutput.appendChild(div);
    });
}
