document.addEventListener('DOMContentLoaded', () => {
    loadMathh();
})

function loadMathh() {
    const itog = JSON.parse(localStorage.getItem('itog')) || [];
    const result = document.getElementById('result')
    
    itog.forEach(calc=> {
        const one = document.getElementById('a')
        const two = document.getElementById('b')
        const a = one.value.trim()
        const b = two.value.trim()
        const li = document.createElement('li')
       summa = a + b
        li.innerHTML = `
        <span>${a}  ${b}  ${calc}</span>
        `
        minus = a - b
        li.innerHTML = `
        <span>${a}  ${b}  ${calc}</span>
        `
        um = a * b
        li.innerHTML = `
        <span>${a}  ${b}  ${calc}
        `
        del = a / b
        li.innerHTML = `
        <span>${a}  ${b}  ${calc}
        `
        result.appendChild(li)
   
clear()

})
}

function mathh () {
    const one = document.getElementById('a')
    const two = document.getElementById('b')
    const a = Number (one.value)
    const b = Number (two.value)
    const result = document.getElementById('result')
    let vibor = Number(prompt('Выберите какое действие хотите выполнить:\n 1.Сложение\n 2.Вычитание\n 3.Умножение\n 4.Деление'))
    
     if(vibor > 4 || vibor < 1 || vibor == null) {
    alert('Введённые вами данные не корректны!')
 } else{
    const li = document.createElement('li')
        result.appendChild(li)
    switch(vibor) {
        case 1 : 
        summa = a + b
        li.innerHTML = `
        <span>${a} + ${b} = ${summa}</span>
        ` ; break
        case 2 :
        minus = a - b
            li.innerHTML = `
            <span>${a} - ${b} = ${minus}</span>
            ` ; break
        case 3 :
        um = a * b
            li.innerHTML = `
            <span>${a} * ${b} = ${um}</span>
            ` ; break
        case 4 : 
        del = a / b
        li.innerHTML = `
        <span>${a} / ${b} = ${del}</span>
        ` ; break 
    }}
    
one.value = ''
two.value = ''
saveMathh()
clear()
}

function saveMathh () {
    const result = document.getElementById('result')
    const itog = Array.from(result.children).map(li => li.querySelector('span').textContent)
    localStorage.setItem('itog', JSON.stringify(itog))

}

function clear () {
let res = document.getElementById('result')
let li = 

saveMathh()
}