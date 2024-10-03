const adviceTitle = document.querySelector('.advice-title');
const adviceQuote = document.querySelector('.advice-quote');
const adviceDice = document.querySelector('.advice-dice');

const loadAdvice = async () => {
    try{
        const advice = await fetch("https://api.adviceslip.com/advice");
        const data = await advice.json();
        adviceTitle.innerText = `ADVICE #${data.slip.id}`;
        adviceQuote.innerText = `"${data.slip.advice}"`;
    }catch(e){
        console.log("ERROR", e)
    }
}

loadAdvice();

adviceDice.addEventListener('click', function(){
    loadAdvice();
});
