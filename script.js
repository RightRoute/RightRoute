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

// Job Descriptions (expand as needed)
const jobDescriptions = {
    'software engineer': 'As a software engineer, you will design, develop, and maintain software systems and applications. You will work with programming languages like Java, Python, or JavaScript to create solutions to various problems. The role often involves collaboration with other engineers, product managers, and designers to build products that users love.',
    'data scientist': 'As a data scientist, you will analyze large sets of data to uncover patterns, insights, and trends that can inform business decisions. Your work may involve using statistical methods, machine learning models, and data visualization tools to help companies make data-driven decisions.',
    'product manager': 'A product manager is responsible for the development and success of a product. You will work with cross-functional teams, including engineering, marketing, and sales, to define the vision and roadmap for a product. Your work ensures that the product meets market needs and delivers value to users.',
    'designer': 'As a designer, you will focus on the visual aspects of a product, whether it is a website, mobile app, or software interface. Your role involves creating user-friendly and aesthetically pleasing designs that provide a seamless user experience. You will collaborate with developers and product managers to bring designs to life.',
    'teacher': 'As a teacher, you will plan, implement, and evaluate educational lessons and activities. You will teach students, guide their development, and help them achieve educational goals. Teachers also engage with parents and staff to support student success and create a positive learning environment.',
};

// Mock Companies Hiring Data
const hiringCompanies = {
    'software engineer': {
        'indiana': {
            'indianapolis': ['Tech Innovators Inc.', 'IndySoft Solutions', 'CodeWorks Technologies'],
            'fort wayne': ['FortTech Labs', 'FortWayne Software Solutions'],
        },
        'pennsylvania': {
            'philadelphia': ['Philly Tech Co.', 'CodeCraft Enterprises'],
            'pittsburgh': ['Steel City Tech', 'Pittsburgh Software Partners'],
        }
    },
    'data scientist': {
        'indiana': {
            'indianapolis': ['DataMinds LLC', 'Innovative Analytics'],
            'fort wayne': ['Fort Data Solutions'],
        },
        'pennsylvania': {
            'philadelphia': ['Data Insights Inc.', 'Philly Analytics'],
            'pittsburgh': ['Steel City Analytics'],
        }
    },
    // Add other careers and companies similarly...
};

// Handle form submission
document.getElementById('plannerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get user input for career plan
    const age = parseInt(document.getElementById('age').value);
    const career = document.getElementById('career').value.trim().toLowerCase();
    const state = document.getElementById('state').value.trim();
    const town = document.getElementById('town').value.trim();

    // Get rent-related inputs
    const currentRent = parseFloat(document.getElementById('currentRent').value);
    const yearsAhead = parseInt(document.getElementById('yearsAhead').value);

    // Ensure all required fields are filled in
    if (isNaN(age) || !career || !state || !town || isNaN(currentRent) || isNaN(yearsAhead)) {
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
    let plan = generateCareerPlan(age, career, state, town);
    const planOutput = document.getElementById('planOutput');
    planOutput.innerHTML = `<ul>${plan.map(step => `<li><input type="checkbox"> ${step}</li>`).join('')}</ul>`;
    document.getElementById('planOutputSection').style.display = 'block'; // Show the plan section

    // Show Salary Section
    const salary = careerSalaries[career] || "N/A";
    const salarySection = document.getElementById('salarySection');
    const salaryOutput = document.getElementById('salaryOutput');
    salaryOutput.innerText = `Estimated annual salary: $${salary}`;
    salarySection.style.display = 'block'; // Show salary section

    // Show Job Description
    const jobDescriptionSection = document.getElementById('jobDescriptionSection');
    const jobDescriptionOutput = document.getElementById('jobDescriptionOutput');
    jobDescriptionOutput.innerText = jobDescriptions[career] || "No description available for this career.";
    jobDescriptionSection.style.display = 'block'; // Show job description section

    // Show Hiring Companies
    const companiesSection = document.getElementById('companiesSection');
    const companiesOutput = document.getElementById('companiesOutput');
    
    // Check if there are companies hiring for the selected career in the specified state and town
    const companies = hiringCompanies[career] && hiringCompanies[career][state.toLowerCase()] && hiringCompanies[career][state.toLowerCase()][town.toLowerCase()];
    
    if (companies && companies.length > 0) {
        companiesOutput.innerHTML = `<ul>${companies.map(company => `<li>${company}</li>`).join('')}</ul>`;
    } else {
        companiesOutput.innerHTML = `<p>No companies found hiring for this career in ${town}, ${state}.</p>`;
    }

    companiesSection.style.display = 'block'; // Show the companies section
});

// Dummy function for generating career plan based on age, career, state, and town
function generateCareerPlan(age, career, state, town) {
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
