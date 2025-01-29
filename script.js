 <!-- JavaScript Section -->
    <script>
        // Salary estimation function based on career and state
        function getSalary(career, state) {
            const salaryData = {
                "software engineer": {
                    "Indiana": 75000,
                    "Pennsylvania": 85000
                },
                "data scientist": {
                    "Indiana": 70000,
                    "Pennsylvania": 90000
                },
                "graphic designer": {
                    "Indiana": 45000,
                    "Pennsylvania": 52000
                },
                // Add more career and state data as needed
            };

            if (salaryData[career.toLowerCase()] && salaryData[career.toLowerCase()][state]) {
                return salaryData[career.toLowerCase()][state];
            } else {
                return "Salary data not available";
            }
        }

        // Rent calculation function
        function calculateRentCost(currentRent, years) {
            const annualIncrease = 0.03; // 3% annual increase
            const futureRent = currentRent * Math.pow((1 + annualIncrease), years);
            return futureRent.toFixed(2); // Round to two decimal places
        }

        // Handle form submission
        document.getElementById('plannerForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally

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
                return;
            }

            // Calculate future rent
            const futureRent = calculateRentCost(currentRent, yearsAhead);
            const rentCostOutput = document.getElementById('rentCostOutput');
            rentCostOutput.innerHTML = `In ${yearsAhead} years, your estimated rent will be: $${futureRent}`;

            // Show the rent cost section
            document.getElementById('rentCostSection').style.display = 'block';

            // Calculate and show the salary
            const salary = getSalary(career, state);
            const salarySection = document.getElementById('salarySection');
            const salaryOutput = document.getElementById('salaryOutput');
            if (salary !== "Salary data not available") {
                salaryOutput.innerText = `Estimated yearly salary for a ${career} in ${state}: $${salary}`;
            } else {
                salaryOutput.innerText = salary; // Show error message if salary data is not available
            }
            salarySection.style.display = 'block';

            // Generate Career Plan (this part should remain as in your existing code)
            let plan = generateCareerPlan(age, career, state);
            const planOutput = document.getElementById('planOutput');
            planOutput.innerHTML = `<ul class="checklist">${plan.map(step => `<li><input type="checkbox"> ${step}</li>`).join('')}</ul>`;
            document.getElementById('planOutputSection').style.display = 'block'; // Show the plan section
        });

        // Example career plan generation function (you can modify as needed)
        function generateCareerPlan(age, career, state) {
            let plan = [];
            
            if (career.toLowerCase() === "software engineer") {
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
            else {
                plan = [
                    "Please consult a career advisor for a personalized plan."
                ];
            }

            return plan;
        }
    </script>
</body>
</html>
