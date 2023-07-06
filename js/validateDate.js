const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

console.log(todayDate, typeof todayDate);

function dateValidity(){
    const date = document.getElementById("due").value;
    const formDate = parseInt(date.slice(0, 4));
    const formMonth = parseInt(date.slice(5, 7));
    const formYear = parseInt(date.slice(8, 10));

    console.log(todayDate <= formDate);

    if(!((todayDate <= formDate) && (todayMonth <= formMonth) && (todayYear <= formYear))){
        document.getElementById("notif-red").classList.remove('none');
    }
    // Else call your required function
}