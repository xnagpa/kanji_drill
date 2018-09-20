document.addEventListener('DOMContentLoaded', () => {
  const wellButton = document.querySelector('.js-know-well');
  const badButton = document.querySelector('.js-know-bad');
  const select =  document.querySelector('select');


  wellButton && wellButton.addEventListener('click', (e) => {
    document.querySelectorAll('.table__td_clicked').forEach((el)=>{
      const jlptLevel = select.options[select.selectedIndex].value;
      Storage.add(el.textContent, { grade: 'well', jlptLevel: jlptLevel});
      el.classList.remove('table__td_know-bad');
      el.classList.remove('table__td_clicked');
      el.classList.add('table__td_know-well');
    });
  });

  badButton && badButton.addEventListener('click', (e) => {
    document.querySelectorAll('.table__td_clicked').forEach((el)=>{
      const jlptLevel = select.options[select.selectedIndex].value;
      Storage.add(el.textContent, { grade: 'bad', jlptLevel: jlptLevel});
      el.classList.remove('table__td_know-well');
      el.classList.remove('table__td_clicked');
      el.classList.add('table__td_know-bad');
    });
  });

});