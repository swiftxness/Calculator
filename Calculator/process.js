function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    let equalsButton = document.querySelector('.equals');
    
    try {
        // Eredmény kiszámítása
        let result = eval(display.value);
        
        // Robbanás effekt hozzáadása
        equalsButton.classList.add('explosion');
        display.classList.add('flash');
        
        // Eredmény megjelenítése
        display.value = result;
        
        // Animációs osztályok eltávolítása az újrahasználhatóság érdekében
        setTimeout(() => {
            equalsButton.classList.remove('explosion');
            display.classList.remove('flash');
        }, 500);
        
    } catch (error) {
        display.value = 'Hiba';
        setTimeout(clearDisplay, 1000);
    }
}
