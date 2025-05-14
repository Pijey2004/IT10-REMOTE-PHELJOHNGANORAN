let counter1 = 0;
let counter2 = 0;
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    counter1++;
    text1.innerText = counter1; 
    text3.innerText = counter1 + counter2;
    localStorage.setItem("counter_1", counter1);
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    counter2++;
    text2.innerText = counter2; 
    text3.innerText = counter1 + counter2;
    localStorage.setItem("counter_2", counter2);
});

const text1 = document.getElementById('count1');
const text2 = document.getElementById('count2');
const text3 = document.getElementById('totalCount');

load();
function load() {
    counter1 = parseInt(localStorage.getItem("counter_1"));
    counter1 = parseInt(localStorage.getItem("counter_2"));
    text1.innerText = counter1; 
    text2.innerText = counter2;     
    text3.innerText ="Total Count: "(counter1 + counter2);
}
