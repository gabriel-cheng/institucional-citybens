const inputValor = document.querySelector('.input-pagar');
const inputParcelas = document.querySelector('.input-parcelas');
const h3ValorPagar = document.querySelector('.h3-valor-pagar');
const h3ValorParcelas = document.querySelector('.h3-valor-parcelas');
const displayPagar = document.querySelector('#display_pagar');
const displayParcelas = document.querySelector('#display_parcelas');

function formatoBRL(n, c, d, t) {
    c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

(function() {
    function mostrarValores(input, saida) {
        input.addEventListener('input', () => {
            const value = input.value;
            saida.innerHTML = `R$ ${formatoBRL(value)}`;
        });
    }
    
    mostrarValores(inputValor, h3ValorPagar);
    mostrarValores(inputParcelas, h3ValorParcelas);
})();

(function() {
    function formDisponibilidade(input, display) {
        try {
            input.addEventListener('input', () => {
                display.value = `R$ ${formatoBRL(input.value)}`;
            });
        } catch {
            input.addEventListener('change', () => {
                display.innerHTML = `R$ ${formatoBRL(input.value)}`;
            });
        }
    }
    
    formDisponibilidade(inputValor, displayPagar);
    formDisponibilidade(inputParcelas, displayParcelas);
})();