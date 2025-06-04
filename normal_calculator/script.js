const buttons = document.querySelectorAll('.btn');
const area = document.querySelector('.area');
let exp = ''
exp='0'
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == 'AC') {
            exp = '0'
            area.value = exp
        }   
        else if (button.textContent == 'C') {
            exp = exp.slice(0, -1)
            area.value = exp
        }
        else if (button.textContent == '=') {
            try {
                exp = eval(exp)
                area.value = exp
            } catch (err) {
                area.value = 'invalid input'
            }
        }
        else if (button.textContent == 'x') {
            exp += '*'
            area.value = exp
        } else {
            exp += button.textContent;
            area.value = exp;
        }
    });
});