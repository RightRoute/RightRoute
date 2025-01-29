document.getElementById('plannerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the usual way

    const age = parseInt(document.getElementById('age').value);
    const career = document.getElementById('career').value.trim().toLowerCase();

    // Get the rent-related inputs
    const currentRent = parseFloat(document.getElementById('currentRent').value);
    const yearsAhead = parseInt(document.getElementById('yearsAhead').value);

    // Ensure the rent and years fields are valid
    if (isNaN(currentRent) || isNaN(yearsAhead)) {
        alert('Please enter valid rent and number of years!');
        return;
    }

    // Calculate the future rent
    const futureRent = calculateRentCost(currentRent, yearsAhead);

    // Display the future rent
    displayFutureRent(futureRent, yearsAhead);

    // Generate plan based on age and career
    const plan = generatePlan(age, career);

    // Display the plan
    displayPlan(plan);

    // Show the plan and rent sections
    document.getElementById('planOutputSection').style.display = 'block';
    document.getElementById('rentCostSection').style.display = 'block';
});

// Rent calculation function
function calculateRentCost(currentRent, years) {
    const annualIncrease = 0.03; // 3% annual increase
    const futureRent = currentRent * Math.pow((1 + annualIncrease), years);
    return futureRent.toFixed(2); // Round to two decimal places
}

// Function to display the future rent
function displayFutureRent(futureRent, yearsAhead) {
    const rentCostOutput = document.getElementById('rentCostOutput');
    rentCostOutput.innerHTML = `In ${yearsAhead} years, your estimated rent will be: $${futureRent}`;
}

// Function to generate the career plan
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

// Function to display the career plan
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
