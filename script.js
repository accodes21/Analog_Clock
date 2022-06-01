const sechand = document.querySelector(".second");
const minhand = document.querySelector(".minute");
const hourhand = document.querySelector(".hour");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secdeg = ((seconds/60)*360)+90;
    sechand.style.transform = `rotate(${secdeg}deg)`;

    const mins = now.getMinutes();
    const mindeg = ((mins/60)*360)+((seconds/60)*6)+90;
    minhand.style.transform = `rotate(${mindeg}deg)`;

    const hours = now.getHours();
    const hrdeg = ((hours/12)*360)+((mins/60)*30)+90;
    hourhand.style.transform = `rotate(${hrdeg}deg)`;
}
setInterval(setDate, 1000)
setDate();