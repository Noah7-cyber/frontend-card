//code for cvc
let cvcCard = document.querySelector('#cvcValue');
let cvcInput=document.querySelector('#cvcin');
cvcInput.addEventListener('input', ()=>{
    cvcCard.innerHTML = cvcInput.value;
    let j = cvcInput.value;
    let jRegex = /^\d{3}/gi
    if(jRegex.test(j)== true){
        cvcInput.style.border ='1.5px solid gray'
        document.getElementById('distress-cvc').style.display = 'none';
    }else{
        cvcInput.style.border ='1.5px solid red';
       document.getElementById('distress-cvc').style.display = 'block';
        
    }
    if(cvcInput.value == ''){
        cvcCard.innerHTML = '000'
    }
})
//end declaration cvc

//begining for card holder name
let nameCard = document.querySelector('#cardHolderNameValue');
let nameInput = document.querySelector('#card-input')
nameInput.addEventListener('input', ()=>{
    let j = nameInput.value
    nameCard.innerHTML = j.toUpperCase()
    if (j == '') {
        document.getElementById('distress-name').style.display = 'block';
        nameInput.style.border = '1.5px solid red'
        nameCard.innerHTML = 'INPUT NAME'
    }else{
        nameInput.style.border ='1.5px solid gray'
        document.getElementById('distress-name').style.display = 'none';
    }
   
})
//closing for card name

//start card expdate
let monthInput = document.querySelector('#mm')
let monthValue = document.querySelector('#monthValue')
monthInput.addEventListener('change', ()=>{
    monthValue.innerHTML = monthInput.value
    
    let j = monthInput.value;
    let jRegex = /(^[0][1-9]$)|(^[1][1-2]$)/gi
    if (j.length==1) {
        monthInput.value = '0'+j;
        monthValue.innerHTML = monthInput.value
        monthInput.style.border ='1.5px solid gray';
        document.getElementById('distress-expdate').style.display = 'none';
    }else if(jRegex.test(j)== true){
        monthInput.style.border ='1.5px solid gray'
        document.getElementById('distress-expdate').style.display = 'none';
    }else{
        monthInput.style.border ='1.5px solid red'
        document.getElementById('distress-expdate').innerHTML = 'invalid format';
        document.getElementById('distress-expdate').style.display = 'block'
    }
    if (monthInput.value == '') {
        document.getElementById('distress-expdate').innerText= "Can't be blank"
        monthValue.innerHTML = '00';
        document.getElementById('distress-expdate').style.display = 'block';
    }
})
//end expdate
//start card mm/yy
let yearInput = document.querySelector('#yy')
let yearValue = document.querySelector('#yearValue')
yearInput.addEventListener('input', ()=>{
    yearValue.innerHTML = yearInput.value
    if (yearInput.value == '') {
        yearValue.innerHTML = '00'
    }
    let j = yearInput.value;
    let jRegex = /^[2-4]\d{1}/gi
    if(jRegex.test(j)== true){
        yearInput.style.border ='1.5px solid gray'
        document.getElementById('distress-year').style.display = 'none';
    }else{
        yearInput.style.border ='1.5px solid red'
        document.getElementById('distress-year').style.display = 'block';
    }
})
//end m/yy
//card-no
let cardnoInput = document.querySelector('#card-no');
let cardnoValue = document.querySelector('#cardNumberValue')
cardnoInput.addEventListener('keypress', (e)=>{
    cardnoValue.innerHTML = cardnoInput.value.toUpperCase()
   let j = cardnoValue.innerHTML
    if(e.keyCode == 8){
        j -= ' '
    }else if((j.length === 4)||(j.length === 9)||(j.length === 14)){
        j+= ' '
    }          
    cardnoInput.value = j
})
cardnoInput.addEventListener('change', ()=>{
    let j = cardnoInput.value
        let jRegex=/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/gi
    if(jRegex.test(j)== true){
        cardnoInput.style.border ='1.5px solid gray'
        document.getElementById('distress-cardno').style.display = 'none';
    }else{
        cardnoInput.style.border ='1.5px solid red'
        document.getElementById('distress-cardno').innerText='Wrong format, numbers only'
        document.getElementById('distress-cardno').style.display = 'block';
    }
    if (cardnoInput.value == '') {
        cardnoValue.innerHTML = '0000 0000 0000 0000'
        cardnoInput.style.border ='1.5px solid red'
        document.getElementById('distress-cardno').innerText ="Can't be blank"
        document.getElementById('distress-cardno').style.display = 'block';
    }
    
})
//confirm  button
let confirmBtn = document.querySelector('#confirm')
confirmBtn.addEventListener('click', ()=>{
    // console.log(monthInput.style.border);
    if ((monthInput.style.border !== '1.5px solid gray')||(cvcInput.style.border!== '1.5px solid gray')||(cardnoInput.style.border!== '1.5px solid gray')||(yearInput.style.border!== '1.5px solid gray')||(nameInput.style.border!== '1.5px solid gray')) {
        return
    }else{
       let j=document.querySelector('.cards-det-contain')
       j.style.display = 'none';
       let z= document.querySelector('.thank-you')
       z.style.display = 'block';
    }
})
//made by Noah Ibrahim
// contact me at noahibr2@gmail.com