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

    // Career: Graphic Designer
    else if (career === 'graphic designer') {
        if (age <= 22) {
            plan = [
                "Complete a degree in graphic design or take online design courses.",
                "Build a portfolio with your best work.",
                "Apply for internships or freelance work to gain experience."
            ];
        } else if (age <= 30) {
            plan = [
                "Get a full-time job at a design agency or as a freelancer.",
                "Continue building your portfolio with real-world projects.",
                "Stay updated on the latest design trends and tools."
            ];
        } else {
            plan = [
                "Consider specializing in a specific design area like UX/UI or motion graphics.",
                "Lead design projects and manage clients or teams."
            ];
        }
    }

    // Career: Marketing Specialist
    else if (career === 'marketing specialist') {
        if (age <= 22) {
            plan = [
                "Complete a degree in marketing or related field.",
                "Gain hands-on experience through internships and projects.",
                "Learn how to use popular marketing tools (e.g., Google Analytics, SEMrush)."
            ];
        } else if (age <= 30) {
            plan = [
                "Get a marketing role at a company to apply your skills.",
                "Start working on digital marketing strategies like SEO, content marketing, and social media.",
                "Consider pursuing certifications in Google Ads or social media marketing."
            ];
        } else {
            plan = [
                "Consider moving into a management role, leading marketing teams.",
                "Stay up-to-date with emerging trends like influencer marketing or AI-driven campaigns."
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

document.getElementById('saveProgressButton').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#planOutput input[type="checkbox"]');
    let progress = [];
    checkboxes.forEach((checkbox, index) => {
        progress.push({ step: checkbox.nextElementSibling.textContent, completed: checkbox.checked });
    });

    // Save progress to localStorage
    localStorage.setItem('careerProgress', JSON.stringify(progress));
    alert('Progress saved!');
});
