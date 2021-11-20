function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //array com os dias
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDaysOfTheMonth() {
      let diaMes = document.getElementById('days')
      let li = document.createElement('li');
      diaMes.appendChild(li)
      for (let index = 0; index < dezDaysList.length; index += 1) {
        let li1 = document.createElement('li');
        let dias = dezDaysList[index]
        li1.innerText = dias
        li1.className = 'day'
        diaMes.appendChild(li1)
      }
  }
  createDaysOfTheMonth()