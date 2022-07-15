const dropbox = document.querySelector('#input-drop');
const droplist = document.querySelector('.dropDown');
const submit = document.querySelector('.consorcio-btn');
const form = document.querySelector('#form-sonho');
const arraySonhos = [1, 2, 3, 4, 5, 6];

// Events

// Ao clicar no input:text, a drop list aparece
(function() {
    const styles = ['block', 'none'];

    function includeEvent(item, event, display) {
        item.addEventListener(event, () => {
            droplist.style = `display: ${display} !important`;
        });
    }
    includeEvent(dropbox, 'focus', styles[0]);
    includeEvent(dropbox, 'blur', styles[1]);
})();

// Adiciona o item selecionado da lista no input:text
(function() {
    function inputItem(num) {
        const item = document.querySelector('#item-' + num);

        item.addEventListener('mousedown', () => {
            dropbox.value = item.textContent;
        });
    }
    for(const item of arraySonhos) {
        inputItem(item);
    }
})();

// Verifica se o valor do input:text está nulo
(function() {
    (function valueInputTextVerification() {
        function envio(event) {
            if(dropbox.value == "") {
                (function() {
                    const p = document.querySelector('.error-message');

                    p.innerHTML = '*Campo obrigatório';
                    p.classList.add('text-error');
                    dropbox.classList.add('input-error');
                    submit.classList.add('btn-error');
                    
                    event.preventDefault();
                })();
            }
        }

        form.addEventListener('submit', envio);
    })();
})();