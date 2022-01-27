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
//1
function createDaysOfTheMonth() {
    let diaMes = document.getElementById('days')
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let li1 = document.createElement('li');
      let dias = dezDaysList[index];
      li1.innerText = dias;
      if (dias == 24 || dias == 31){
          li1.className = 'day holiday';
      }
      else if (dias == 25){
          li1.className = 'day friday holiday';
      }
      else if (dias == 4 || dias == 11 || dias == 18 || dias == 25){
          li1.className = 'day friday';
      }
      else {
          li1.className = 'day';
      }
      diaMes.appendChild(li1);
    }
}
createDaysOfTheMonth()
//2
function holidaysButton(param) {
  let div = document.querySelector('.buttons-container');
  let button;
  button = document.createElement('button');
  button.innerText = param;
  button.id = 'btn-holiday';
  div.appendChild(button);
}
holidaysButton("Feriados")
//3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'red';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();

//4
function createButtonFriday(string){
  buttonContainer = document.querySelector('.buttons-container');
  buttonFriday = document.createElement('button')
  buttonFriday.className = 'btn-friday'
  buttonFriday.innerText = string
  buttonContainer.appendChild(buttonFriday)
}
createButtonFriday("Sexta-feira")
//5
function buttonClickFriday() {
  let buttonFriday = document.querySelector('.btn-friday');
  let classFriday = document.querySelectorAll('.friday');
  let sextou = 'sextou'
  let numeros = [];
  for (let index = 0; index < classFriday.length; index += 1){
    numeros.push(classFriday[index].innerHTML)
  }
  buttonFriday.addEventListener('click', function(){
    for (let index = 0; index < classFriday.length; index += 1){
      if (classFriday[index].innerHTML !== sextou){
        classFriday[index].innerHTML = sextou 
      }
      else {
        classFriday[index].innerHTML = numeros[index]
      }
    }
  })
}
buttonClickFriday()
//6
function zoomDays(evento) {
  let target = evento.type
  let days = document.querySelector('#days')
    if(target == 'mouseover'){
      evento.target.style.fontSize = '30px';
      evento.target.style.fontWeight = '600';
    }
    else {  
      evento.target.style.fontWeight = '200';
      evento.target.style.fontSize = '20px';
    }
}
days.addEventListener('mouseover', zoomDays)
days.addEventListener('mouseout', zoomDays)

// function zoomDaysOver() {
//   let days = document.querySelector('#days')
//   days.addEventListener('mouseover', function(evento){
//     evento.target.style.fontSize = '30px';
//     evento.target.style.fontWeight = '600'
//   })
// }
// function zoomDaysOut(evento) {
//   let days = document.querySelector('#days')
//   days.addEventListener('mouseout', function(evento) {
//     evento.target.style.fontWeight = '200';
//     evento.target.style.fontSize = '20px';
//   })
// }
// zoomDaysOver()
// zoomDaysOut()

//7
