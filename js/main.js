export const $titleInput = document.querySelector('#title-input');
export const $dateInput = document.querySelector('#datetime-input');
export const $btn = document.querySelector('#start-button');
export let $lineReminder = document.querySelector('#line-reminder');
export let myDate = new Date().getTime();
export let testfun = (e) =>{
    e.preventDefault();
    let dateWritten = Date.parse($dateInput.value);
    let dateDiff = dateWritten - myDate;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    let cond1 = $titleInput.value !== '' && $dateInput.value !== '' && dateDiff >= 0 ? $lineReminder.textContent = `The Event is: ${$titleInput.value}. The remaining time is:  ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} Sec` 
    :dateDiff < 0 ? alert("The event is now")
    :$lineReminder.textContent = `Please fill the inputs`; 
    let arr = [ 'reminder-style2','reminder-style'];
    let [arr1,...arr2] = arr;
    
    let x = function(arr1 = arr2[0]) {
        $lineReminder.setAttribute('class',arr1);
    }
    x(arr1)
}