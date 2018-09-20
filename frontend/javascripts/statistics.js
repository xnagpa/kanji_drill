document.addEventListener('DOMContentLoaded', function(){
  const jlptSelect = document.querySelector('.js-statistics-select');
  const jlptLevel = jlptSelect.options[jlptSelect.selectedIndex].value;

  if(jlptSelect) {
    redraw(jlptLevel);
    jlptSelect.addEventListener('change', () => {
      const jlptLevel = jlptSelect.options[jlptSelect.selectedIndex].value;
      redraw(jlptLevel);
    });
  };
});

function redraw(jlptLevel){
  if(!jlptLevel){
    return;
  }
  
  const jlptArray = eval(`jlpt${jlptLevel}Kanji`);
  const jlptArrayCount = jlptArray.length;
  const wellCount = Storage.countGrade('well', jlptLevel, jlptArray);
  const badCount  = Storage.countGrade('bad', jlptLevel, jlptArray);

  clearCanvas();
  drawCircle();
  drawSector(wellCount, jlptArrayCount, 'rgb(255, 165, 0)', 'rgba(255, 165, 0, 0.5)', 0);
  drawSector(badCount, jlptArrayCount, 'rgb(255, 165, 0)', 'rgba(255, 205, 0, 0.5)', wellCount);
  drawPercentage(wellCount + badCount, jlptArrayCount);
}

function toRadians(degrees) {
  return (Math.PI / 180) * degrees;
};

function clearCanvas(){
  const canvas = document.querySelector('.statistics');
  if(canvas) {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};

function drawCircle(){
  const canvas = document.querySelector('.statistics');
  if(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();
  };
};

function drawSector(remembered, total, stroke, fill, offset){
  const degrees = 360 * (remembered)/ total;
  const offsetInDegrees = 360 * (offset)/ total;
  const canvas = document.querySelector('.statistics');
  
  if(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, toRadians(0+offsetInDegrees), toRadians(degrees), false);
    ctx.lineTo(150, 150);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.stroke();
  }
};

function drawPercentage(remembered, total) {
  const percentage = remembered/total;
  const canvas = document.querySelector('.statistics');
  if(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.font = "36px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillText(`${Math.round(percentage * 100)}%`, 150, 150);
  };
};
