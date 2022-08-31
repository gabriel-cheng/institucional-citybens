const dropbox = document.querySelector('#input-drop');
const droplist = document.querySelector('.dropDown');
const submit = document.querySelector('.consorcio-btn');
const form = document.querySelector('#form-sonho');
const arraySonhos = [1, 2, 3, 4, 5, 6];

// Events

// Adiciona o item selecionado da lista no input:text
(function() {
    function inputItem(num) {
        const option = document.querySelector('.option-' + num);
        const item = document.querySelector('.item-' + num);

        item.addEventListener('mousedown', () => {
            dropbox.value = option.textContent;
        });
    }
    for(const item of arraySonhos) {
        inputItem(item);
    }
})();

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

// Manipulador das imagens do slider com os respectivos itens do dropbox
(function() {
    function sliderCall(num) {
        const images = {
            imovel: 'https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            automovel: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            moto: 'https://images.unsplash.com/photo-1617109887854-f661d37fca2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            servico: 'https://img.freepik.com/fotos-gratis/mecanico-de-manutencao-de-um-carro_1170-1601.jpg?t=st=1658233991~exp=1658234591~hmac=bb9a66f2d2d847decdc6ec0c3b6cd2f65bc8197f31feef9f9900c91ac04bfa24&w=360',
            pesados: 'https://images.unsplash.com/photo-1605314774430-633783cadd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            eletronicos: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80s',
            default: '/images/slider/default.png'
        };
        
        const sliderImage = document.querySelector('.slider-image');
        const item = document.querySelector('.item-' + num);
        const p = document.querySelector('.slider-text');
        
        window.addEventListener('load', () => {
            sliderImage.src = images.default;
            sliderImage.alt = "imagem padrão";
            p.textContent = "Realize seus sonhos com a gente!"
        });

        item.addEventListener('mousedown', () => {
            switch (num) {
                case 1:
                    sliderImage.src = images.imovel;
                    sliderImage.alt = "imagem de imovel";
                    p.textContent = "Multiplique seu patrimônio";
                break;
                    
                case 2:
                    sliderImage.src = images.automovel;
                    sliderImage.alt = "imagem de automovel";
                    p.textContent = "Adquira seu primeiro veículo";
                break;
                        
                case 3:
                    sliderImage.src = images.moto;
                    sliderImage.alt = "imagem de moto";
                    p.textContent = "Adquira uma moto";
                break;

                case 4:
                    sliderImage.src = images.servico;
                    sliderImage.alt = "imagem de serviços";
                    p.textContent = "Contrate serviços";
                break;

                case 5:
                    sliderImage.src = images.pesados;
                    sliderImage.alt = "imagem de pesados";
                    p.textContent = "Expanda sua frota de caminhões";
                break;

                case 6:
                    sliderImage.src = images.eletronicos;
                    sliderImage.alt = "imagem de eletrônicos";
                    p.textContent = "Adquira produtos eletrônicos";
                break
            }
        });
    }
    for(const items of arraySonhos) {
        sliderCall(items);
    }
})();