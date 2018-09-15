document.addEventListener('DOMContentLoaded', function(){
  const canvas = document.querySelector('.statistics');
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Outer circle
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'rgb(255, 165, 0)';
  ctx.moveTo(150, 150);
  ctx.arc(150, 150, 100, toRadians(-90), toRadians(180), false);
  ctx.lineTo(150, 150);
  ctx.stroke();

});

function toRadians(degrees){
  return (Math.PI / 180) * degrees
};
// Canvas
// beginPath
// arc ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// arcTo
// moveTo
// stroke
// fill
// fillRect
// strokeRect
// lineTo
// closePath
