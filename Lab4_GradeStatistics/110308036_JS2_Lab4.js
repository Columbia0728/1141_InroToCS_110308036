const mathInput=document.getElementById("mathInput");
const englishInput=document.getElementById("englishInput");
const submitBtn=document.getElementById("submitBtn");
const tableBody=document.querySelector("#gradeTable tbody");
const mathAvgCell=document.getElementById("mathAvgCell");
const engAvgCell=document.getElementById("engAvgCell");
const overallAvgCell=document.getElementById("overallAvgCell");

let rowCount=0;

submitBtn.addEventListener("click",function(){
  const m=parseFloat(mathInput.value), e=parseFloat(englishInput.value);
  if(isNaN(m)||isNaN(e)){alert("Enter numbers.");return;}
  rowCount++;
  const avg=(m+e)/2;
  const tr=document.createElement("tr");
  tr.innerHTML=`<td>${rowCount}</td><td>${m}</td><td>${e}</td><td>${avg.toFixed(2)}</td>`;
  tableBody.appendChild(tr);
  updateColumnAverages();
  mathInput.value=""; englishInput.value="";
});

function updateColumnAverages(){
  const rows=tableBody.querySelectorAll("tr");
  let ms=0, es=0, as=0, c=rows.length;
  rows.forEach(r=>{
    const t=r.querySelectorAll("td");
    ms+=parseFloat(t[1].textContent);
    es+=parseFloat(t[2].textContent);
    as+=parseFloat(t[3].textContent);
  });
  if(c===0){mathAvgCell.textContent=engAvgCell.textContent=overallAvgCell.textContent="0.00";return;}
  mathAvgCell.textContent=(ms/c).toFixed(2);
  engAvgCell.textContent=(es/c).toFixed(2);
  overallAvgCell.textContent=(as/c).toFixed(2);
}
