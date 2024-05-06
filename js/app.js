// Tu código aquí.

let counter = 0;

let addClick = document.querySelector('.nextBtn')

let lowerClick = document.querySelector('.prevBtn')

addClick.onclick = function(){
    console.log('Apretaste boon de acrecentar');
    counter ++;
    updateCounter(counter);
}


lowerClick.onclick = function(){
    console.log('Apretaste boon de decrecer');
    counter --;
    updateCounter(counter)
}


function updateCounter(counter){
    let counterNumber = document.querySelector('#counter');
    if (counter == 0){
        counterNumber.style.color = 'black';
    }else if (counter > 0){
        counterNumber.style.color = 'green';
    }else{
        counterNumber.style.color = 'red';
    }
    counterNumber.textContent = counter;
}