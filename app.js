//main variables
let isWon = true;
let maxScr = 0;
//first button for adding score
const btn1 = document.querySelector("#btn1");
btn1.disabled = true;

const scr1 = document.querySelector("#scr1");
btn1.addEventListener('click', (e) => {
    scr1.innerText = parseInt(scr1.innerText) + 1;
    checkeer(parseInt(scr1.innerText));
});
//Second button for adding score
const btn2 = document.querySelector("#btn2");
btn2.disabled = true;
const scr2 = document.querySelector("#scr2");
btn2.addEventListener('click', (e) => {
    scr2.innerText = parseInt(scr2.innerText) + 1;
    checkeer(parseInt(scr2.innerText));
});

//Main button
const mainbtn = document.querySelector("#rst");
mainbtn.addEventListener('click', (e) => {
    if (isWon) {
        if (document.querySelector('#max').value !== "") {
            maxScr = parseInt(document.querySelector('#max').value);
            mainbtn.innerText = "Reset";
            btn1.disabled = false;
            btn2.disabled = false;
            isWon = false;
        } else {
            alert("Enter Max value(from 6 to 99)");
        }

    } else {
        reseter();
    }
});
//Score checker
function checkeer(score) {
    if (maxScr === score) {
        reseter();
    }

}

function reseter() {
    maxScr = 0;
    document.querySelector('#max').value = "";
    scr1.innerText = 0;
    scr2.innerText = 0;
    btn1.disabled = true;
    btn2.disabled = true;
    mainbtn.innerText = "START";
    isWon = true;
}