<script>
    // Rent calculation function
    function calculateRentCost(currentRent, years) {
        const annualIncrease = 0.03; // 3% annual increase
        const futureRent = currentRent * Math.pow((1 + annualIncrease), years);
        return futureRent.toFixed(2); // Round to two decimal places
    }

    // Handle form submission
    document.getElementById('plannerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        console.log("Form submitted");

        // Get user input for career plan
        const age = parseInt(document.getElementById('age').value);
        const career = document.getElementById('career').value.trim();
        const state = document.getElementById('state').value.trim();

        // Get rent-related inputs
        const currentRent = parseFloat(document.getElementById('currentRent').value);
        const yearsAhead = parseInt(document.getElementById('yearsAhead').value);

        // Ensure all required fields are filled in
        if (isNaN(age) || !career || !state || isNaN(currentRent) || isNaN(yearsAhead)) {
            alert('Please fill in all the fields!');
            console.log("Invalid input data");
            return;
        }

        console.log("All inputs are valid");

        // Calculate future rent
        const futureRent = calculateRentCost(currentRent, yearsAhead);
        const rentCostOutput = document.getElementById('rentCostOutput');
        rentCostOutput.innerHTML = `In ${yearsAhead} years, your estimated rent will be: $${futureRent}`;

        // Show the rent cost section
        document.getElementById('rentCostSection').style.display = 'block';

        // Generate Career Plan (this part should remain as in your existing code)
        let plan = generateCareerPlan(age, career, state);
        const planOutput = document.getElementById('planOutput');
        planOutput.innerHTML = `<ul class="checklist">${plan.map(step => `<li><input type="checkbox"> ${step}</li>`).join('')}</ul>`;
        document.getElementById('planOutputSection').style.display = 'block'; // Show the plan section

        // Show Salary Section (this should be integrated with your existing code as well)
        const salary = getSalary(career, state);
        const salarySection = document.getElementById('salarySection');
        const salaryOutput = document.getElementById('salaryOutput');
        salaryOutput.innerText = `Estimated annual salary: $${salary}`;
        salarySection.style.display = 'block'; // Show salary section
    });
</script>
