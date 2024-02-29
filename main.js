const breakfast = [
  "Tortilla con jamón y queso",
  "Prensadas",
  "Pan jamón y queso",
  "Sándwich huevo",
  "Tortilla con huevo",
  "Waffles de queso",
  "Waffles dulces",
  "Tostada con queso y jamón",
  "Avena reposada",
  "Tostada con huevo",
  "Pan con queso crema y jamón",
  "Tostada francesa",
  "Banana split",
  "Muffins huevo jamón queso espinaca",
  "Burritos frijol y queso",
];

const lunch = [
  "Fideos salsa tomate y carne molida",
  "Canelones carne molida en salsa de tomate",
  "Lasagña de carne molida",
  "Chifrijo",
  "Garbanzos",
  "Fajitas de cerdo",
  "Bistec encebollado",
  "Chancletas",
  "Arroz con cerdo",
  "Olla de carne",
  "Carne mechada",
  "Picadillo chayote",
  "Picadillo de papá",
  "Tortas de carne",
  "Hamburguesa",
  "Posta cerdo salsa BBQ",
  "Perros",
  "Pasta en salsa blanca y pollo",
  "Filet de pescado empanizado",
  "Fajitas de pollo saltedas",
  "Chopsuey",
  "Pollo a la naranja",
  "Arroz con palmito",
  "Arroz con pollo",
  "Pollo con papas",
  "Filet pollo en salsa tomate",
  "Sopa pollo",
  "Filet de pollo en salsa blanca",
  "Arroz con atún",
];

const dinner = [
  "Tortilla con jamón y queso",
  "Prensadas",
  "Pan jamón y queso",
  "Sándwich huevo",
  "Tortilla con huevo",
  "Waffles de queso",
  "Waffles dulces",
  "Tostada con queso y jamón",
  "Avena reposada",
  "Tostada con huevo",
  "Pan con queso crema y jamón",
  "Tostada francesa",
  "Banana split",
  "Muffins huevo jamón queso espinaca",
  "Burritos frijol y queso",
];

const generatePlanButton = document.getElementById("generateBtn");
const planContainer = document.getElementById("planContainer");

generatePlanButton.addEventListener("click", generatePlan);

function generatePlan() {
  planContainer.innerHTML = "";

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const week1Meals = generateWeekMeals(
    breakfast.slice(),
    lunch.slice(),
    dinner.slice()
  );
  const week1Table = generateWeekTable(days, week1Meals);

  const week2Meals = generateWeekMeals(
    breakfast.slice(),
    lunch.slice(),
    dinner.slice()
  );
  const week2Table = generateWeekTable(days, week2Meals);

  planContainer.appendChild(week1Table);
  planContainer.appendChild(week2Table);
}

function generateWeekMeals(breakfastMeals, lunchMeals, dinnerMeals) {
  const weekMeals = [];

  for (let i = 0; i < 5; i++) {
    const randomBreakfastIndex = Math.floor(
      Math.random() * breakfastMeals.length
    );
    const randomLunchIndex = Math.floor(Math.random() * lunchMeals.length);
    const randomDinnerIndex = Math.floor(Math.random() * dinnerMeals.length);

    const randomBreakfast = breakfastMeals[randomBreakfastIndex];
    const randomLunch = lunchMeals[randomLunchIndex];
    const randomDinner = dinnerMeals[randomDinnerIndex];

    weekMeals.push({
      breakfast: randomBreakfast,
      lunch: randomLunch,
      dinner: randomDinner,
    });

    // Remove selected meals from arrays to prevent repetition
    breakfastMeals.splice(randomBreakfastIndex, 1);
    lunchMeals.splice(randomLunchIndex, 1);
    dinnerMeals.splice(randomDinnerIndex, 1);
  }

  return weekMeals;
}

function generateWeekTable(days, weekMeals) {
  const weekTable = document.createElement("table");
  const headerRow = document.createElement("tr");
  const dayHeader = document.createElement("th");
  dayHeader.textContent = "Día";
  headerRow.appendChild(dayHeader);
  const breakfastHeader = document.createElement("th");
  breakfastHeader.textContent = "Desayuno";
  headerRow.appendChild(breakfastHeader);
  const lunchHeader = document.createElement("th");
  lunchHeader.textContent = "Almuerzo";
  headerRow.appendChild(lunchHeader);
  const dinnerHeader = document.createElement("th");
  dinnerHeader.textContent = "Cena";
  headerRow.appendChild(dinnerHeader);
  weekTable.appendChild(headerRow);

  for (let i = 0; i < 5; i++) {
    const dayRow = document.createElement("tr");
    const dayCell = document.createElement("td");
    dayCell.textContent = days[i];
    dayRow.appendChild(dayCell);

    const breakfastCell = document.createElement("td");
    breakfastCell.textContent = weekMeals[i].breakfast;
    dayRow.appendChild(breakfastCell);

    const lunchCell = document.createElement("td");
    lunchCell.textContent = weekMeals[i].lunch;
    dayRow.appendChild(lunchCell);

    const dinnerCell = document.createElement("td");
    dinnerCell.textContent = weekMeals[i].dinner;
    dayRow.appendChild(dinnerCell);

    weekTable.appendChild(dayRow);
  }

  return weekTable;
}

function getRandomMeal(meals) {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}
