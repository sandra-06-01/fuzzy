window.onload = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const expressionDisplay = document.getElementById('expression');
    const resultDisplay = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');

    let expression = '';
    let result = '';
    let lastInput = '';

    // Gestion du changement de thème
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        const themeText = document.querySelector('.theme-text');
        themeText.textContent = themeToggle.checked ? "Switch to Light" : "Switch to Dark";
    });

    // Gestion des boutons de la calculatrice
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'AC') {
                expression = '';
                result = '';
                lastInput = '';
            } else if (value === '=') {
                try {
                    result = eval(expression.replace('×', '*').replace('÷', '/'));
                } catch {
                    result = 'Erreur';
                }
            } else {
                expression += value;
            }

            expressionDisplay.textContent = expression;
            resultDisplay.textContent = result;
        });
    });
};
