let counter1 = 0;
let counter2 = 0;
const btn1 = document.getElementById("btn1").addEventListener("click", () => {
    counter1++;
    text1.innerText = counter1; 
    text3.innerText = counter1 + counter2;
});

const btn2 = document.getElementById("btn1").addEventListener("click", () => {
    counter2++;
    text2.innerText = counter2; 
    text3.innerText = counter1 + counter2;
});

const text1 = document.getElementById('count1');
const text2 = document.getElementById('count2');
const text3 = document.getElementById('totalCount');