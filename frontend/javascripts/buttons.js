document.addEventListener('DOMContentLoaded', () => {
  console.log('MEEEEH!!!!');
  const wellButton = document.querySelector('.js-know-well');
  const badButton = document.querySelector('.js-know-bad');

  wellButton.addEventListener('click', (e) => {
    document.querySelectorAll('.table__td_clicked').forEach((el)=>{
      el.classList.remove('table__td_know_bad');
      el.classList.remove('table__td_clicked');
      el.classList.add('table__td_know_well');
    });
  });

  badButton.addEventListener('click', (e) => {
    document.querySelectorAll('.table__td_clicked').forEach((el)=>{
      el.classList.remove('table__td_know_well');
      el.classList.remove('table__td_clicked');
      el.classList.add('table__td_know_bad');
    });
  });

});
