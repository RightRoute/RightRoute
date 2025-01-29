 // Rent calculation function
function calculateRentCost(currentRent, years) {
    const annualIncrease = 0.03; // 3% annual increase
    const futureRent = currentRent * Math.pow((1 + annualIncrease), years);
    return futureRent.toFixed(2); // Round to two decimal places
}

// Career Salary Data (For demo purposes, you can expand this dataset)
const careerSalaries = {
    'software engineer': 85000,
    'data scientist': 95000,
    'product manager': 110000,
    'designer': 65000,
    'teacher': 45000,
};

// Handle form submission
document.getElementById('plannerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get user input for career plan
    const age = parseInt(document.getElementById('age').value);
    const career = document.getElementById('career').value.trim().toLowerCase();
    const state = document.getElementById('state').value.trim();

    // Get rent-related inputs
    const currentRent = parseFloat(document.getElementById('currentRent').value);
    const yearsAhead = parseInt(document.getElementById('yearsAhead').value);

    // Ensure all required fields are filled in
    if (isNaN(age) || !career || !state || isNaN(currentRent) || isNaN(yearsAhead)) {
        alert('Please fill in all the fields!');
        return;
    }

    // Calculate future rent
    const futureRent = calculateRentCost(currentRent, yearsAhead);
    const rentCostOutput = document.getElementById('rentCostOutput');
    rentCostOutput.innerHTML = `In ${yearsAhead} years, your estimated rent will be: $${futureRent}`;

    // Show the rent cost section
    document.getElementById('rentCostSection').style.display = 'block';

    // Generate Career Plan
    let plan = generateCareerPlan(age, career, state);
    const planOutput = document.getElementById('planOutput');
    planOutput.innerHTML = `<ul class="checklist">${plan.map(step => `<li><input type="checkbox"> ${step}</li>`).join('')}</ul>`;
    document.getElementById('planOutputSection').style.display = 'block'; // Show the plan section

    // Show Salary Section
    const salary = careerSalaries[career] || "N/A";
    const salarySection = document.getElementById('salarySection');
    const salaryOutput = document.getElementById('salaryOutput');
    salaryOutput.innerText = `Estimated annual salary: $${salary}`;
    salarySection.style.display = 'block'; // Show salary section
});

// Dummy function for generating career plan based on age and career
function generateCareerPlan(age, career, state) {
    let plan = [];
    
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

    return plan;
}
