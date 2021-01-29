const $titleInput = document.querySelector('#title-input');
const $dateInput = document.querySelector('#datetime-input').value;
const $btn = document.querySelector('#start-button');
let $lineReminder = document.querySelector('#line-reminder');
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
