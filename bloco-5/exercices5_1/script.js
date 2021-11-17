let bgColor = document.querySelector('.emergency-tasks');
bgColor.style.backgroundColor = "#E2B6A7";

let bgh3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < bgh3.length; index += 1) {
    bgh3[index].style.backgroundColor = '#FF69B4';
}

let bgColorNoEmergency = document.querySelector('.no-emergency-tasks');
bgColorNoEmergency.style.backgroundColor = "yellow";

let bgh3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < bgh3.length; index += 1) {
    bgh3NoEmergency[index].style.backgroundColor = 'black';
    bgh3NoEmergency[index].style.color = 'white';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#1D3825';
footer.style.color = 'white';

let header = document.getElementById('header-container');
header.style.backgroundColor = '#33FF33';
header.style.color = 'white';