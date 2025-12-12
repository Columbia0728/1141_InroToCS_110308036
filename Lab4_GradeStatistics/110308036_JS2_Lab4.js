const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("#gradeTable tbody");

const mathAvgCell = document.getElementById("mathAvgCell");
const engAvgCell = document.getElementById("engAvgCell");
const overallAvgCell = document.getElementById("overallAvgCell");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
  const mathVal = parseFloat(mathInput.value);
  const engVal = parseFloat(englishInput.value);

  if (isNaN(mathVal) || isNaN(engVal)) {
    alert("Please enter numeric grades for both Math and English.");
    return;
  }

  rowCount++;
  const rowAvg = (mathVal + engVal) / 2;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${mathVal}</td>
    <td>${engVal}</td>
    <td>${rowAvg.toFixed(2)}</td>
  `;

  tableBody.appendChild(newRow);
  updateColumnAverages();

  mathInput.value = "";
  englishInput.value = "";
});

function updateColumnAverages() {
  const rows = tableBody.querySelectorAll("tr");

  let mathSum = 0;
  let engSum = 0;
  let avgSum = 0;
  let count = rows.length;

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    mathSum += parseFloat(cells[1].textContent);
    engSum += parseFloat(cells[2].textContent);
    avgSum += parseFloat(cells[3].textContent);
  });

  if (count === 0) {
    mathAvgCell.textContent = "0.00";
    engAvgCell.textContent = "0.00";
    overallAvgCell.textContent = "0.00";
    return;
  }

  mathAvgCell.textContent = (mathSum / count).toFixed(2);
  engAvgCell.textContent = (engSum / count).toFixed(2);
  overallAvgCell.textContent = (avgSum / count).toFixed(2);
}
