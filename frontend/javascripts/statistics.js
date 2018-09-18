document.addEventListener('DOMContentLoaded', function(){
  drawGraph(500, 1024);
  const statisticsLink = document.querySelector('.js-build-statistics');
  statisticsLink.addEventListener('click', () => (initStatistics()));
});

function toRadians(degrees) {
  return (Math.PI / 180) * degrees
};

function initStatistics(){
  if(window.location.search( /index/i )){
    console.log('KEKUS!!!');
    const total = document.querySelectorAll('.table__td');
    const remembered = document.querySelectorAll('.table__td_know-well');
    const semiRemembered = document.querySelectorAll('.table__td_know-bad');

    total.forEach((el) => {
      debugger;
    });
  }
}

function drawGraph(remembered, total) {
  const degrees = 360 * remembered / total;
  const percentage = remembered/total;
  const canvas = document.querySelector('.statistics');
  if(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255, 165, 0)';
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, toRadians(270), toRadians(270+degrees), false);
    ctx.lineTo(150, 150);
    ctx.fillStyle = 'rgba(255, 165, 0, 0.5)';
    ctx.fill()
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "36px Arial";
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillText(`${Math.round(percentage * 100)}%`, 150, 150);
  };
};
