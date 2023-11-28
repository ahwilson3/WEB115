

function togglePersonalInfoDisplay(displayValue) {
    document.getElementById('personalInfo').style.display = displayValue;
  }
  
  document.getElementById('mondayButton').addEventListener('click', function() {
    showDay('monday');
    togglePersonalInfoDisplay('none'); // Hide personal info when Monday is clicked
  });
  
  document.getElementById('tuesdayButton').addEventListener('click', function() {
    showDay('tuesday');
    togglePersonalInfoDisplay('none'); // Hide personal info when Tuesday is clicked
  });
  
  // Add similar event listeners for other days
  
  let personalInfo = {
    name: '',
    email: '',
    goal: ''
  };
  
  function savePersonalInfo() {
    personalInfo.name = document.getElementById('name').value;
    personalInfo.email = document.getElementById('email').value;
    personalInfo.goal = document.getElementById('goal').value;
  }
  
  function showDay(day) {
    const days = ['monday', 'tuesday', /*...add other days here*/];
    const mealOptions = document.getElementById('mealOptions');
  
    days.forEach(day => {
      const dayOptions = document.getElementById(day + 'Options');
      if (dayOptions) dayOptions.style.display = 'none';
    });
  
    const selectedDay = document.getElementById(day + 'Options');
    if (selectedDay) selectedDay.style.display = 'block';
  
    populateMealPlan(day);
  }
  
  function populateMealPlan(day) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let mealPlanContent = `
      <h2>Weekly Meal Plan</h2>
      <h3>Name: ${personalInfo.name}</h3>
      <p>Email: ${personalInfo.email}</p>
      <p>Weekly Goal: ${personalInfo.goal}</p>
    `;
  
    days.forEach(day => {
      const dayName = day.charAt(0).toUpperCase() + day.slice(1);
      // Adjust the IDs to match your input fields for each day
      const breakfast = document.getElementById(day + 'Breakfast').value;
      const snack1 = document.getElementById(day + 'Snack1').value;
      const lunch = document.getElementById(day + 'Lunch').value;
      const snack2 = document.getElementById(day + 'Snack2').value;
      const dinner = document.getElementById(day + 'Dinner').value;
  
      mealPlanContent += `
        <h3>${dayName}</h3>
        <p>Breakfast: ${breakfast}</p>
        <p>Snack: ${snack1}</p>
        <p>Lunch: ${lunch}</p>
        <p>Snack: ${snack2}</p>
        <p>Dinner: ${dinner}</p>
      `;
    });
  
    const mealPlan = document.getElementById('mealOptions');
    mealPlan.innerHTML = mealPlanContent;
  }