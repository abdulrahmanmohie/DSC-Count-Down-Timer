const $titleInput = document.querySelector('#title-input');
const $dateInput = document.querySelector('#datetime-input');
const $btn = document.querySelector('#start-button');
let $lineReminder = document.querySelector('#line-reminder');
let myDate = new Date().getTime();

let testfun = (e) =>{
    e.preventDefault();

    let dateWritten = Date.parse($dateInput.value);
    let dateDiff = dateWritten - myDate;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    let cond1 = $titleInput.value !== '' && $dateInput.value !== '' && dateDiff >= 0 ? $lineReminder.textContent = `The Event is: ${$titleInput.value}. The remaining time is:  ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} Sec` 
    :dateDiff < 0 ? alert("The event is now")
    :$lineReminder.textContent = `Please fill the inputs`
}

//create p element

$btn.addEventListener('click', testfun)

/*let dateWritten = new Date($dateInput).getTime();
let dateNow = new Date().getTime();
 let dateFunc = () =>{
    let dateDiff = dateWritten - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    $lineReminder.value = `The Event is ${$titleInput}, and The remaining Time ${days} day : ${hours} hour : ${minutes} min : ${seconds} sec`;
}; */
/* $btn.addEventListener('click', dateFunc(e){
    e.preventDefault();
}); */
