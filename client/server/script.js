document.addEventListener('DOMContentLoaded', () => {
    const fetchRandomNumberButton = document.getElementById('numberbutton');
    const randomNumberContainer = document.querySelector('.random-number-container');

    
    async function fetchRandomNumber() {
        try {
            const response = await fetch('http://localhost:3000');
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            const randomNumber = await response.text();
            displayRandomNumber(randomNumber);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    function displayRandomNumber(number) {
        randomNumberContainer.innerHTML = '';
        const numberItem = document.createElement('div');
        numberItem.classList.add('number-item');
        numberItem.textContent = `Número Aleatorio: ${number}`;
        randomNumberContainer.appendChild(numberItem);
    }

    
    fetchRandomNumberButton.addEventListener('click', fetchRandomNumber);
});
