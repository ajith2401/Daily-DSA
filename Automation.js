const fs = require("fs");
const path = require("path");

// Month mapping
const monthMapping = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12"
};

// Function to generate files for a specific month
function generateFilesForMonth(monthName, year = 2024) {
  const monthNumber = monthMapping[monthName];
  
  if (!monthNumber) {
    console.error(`Invalid month name: ${monthName}`);
    return;
  }
  
  // Days in the month
  const daysInMonth = new Date(year, parseInt(monthNumber), 0).getDate();

  // Directory to save files
  const outputDir = path.join(__dirname, `01(${monthName})-2024`);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Generate files
  for (let day = 1; day <= daysInMonth; day++) {
    const dayPadded = day.toString().padStart(2, "0");
    const fileName = `${dayPadded}-${monthNumber}-${year}.js`;
    const filePath = path.join(outputDir, fileName);

    const fileContent = `// Data for ${fileName}
module.exports = {
  date: "${year}-${monthNumber}-${dayPadded}",
  message: "Data for ${fileName}",
};`;

    // Write file
    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`Generated file: ${fileName}`);
  }
}

// Example Usage
generateFilesForMonth("November");
