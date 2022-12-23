<script>
const inputPagar = document.querySelector(".input-pagar");
const inputParcelas = document.querySelector(".input-parcelas");
const h3ValorPagar = document.querySelector(".h3-valor-pagar");
const h3ValorParcelas = document.querySelector(".h3-valor-parcelas");
const displayPagar = document.querySelector("#display_pagar");
const displayParcelas = document.querySelector("#display_parcelas");
const minValorPagar = document.querySelector(".minValorPagar");
const maxValorPagar = document.querySelector(".maxValorPagar");
const metadeValorPagar = document.querySelector(".metadeValorPagar");
const minValorParcela = document.querySelector(".minValorParcela");
const maxValorParcela = document.querySelector(".maxValorParcela");
const metadeValorParcela = document.querySelector(".metadeValorParcela");

function enviarParaWhatsapp() {
    const nome = document.querySelector("[name=simulacaoHiddenDadoNome]").value;
    const email = document.querySelector("[name=simulacaoHiddenDadoEmail]").value;
    const celular = document.querySelector("[name=simulacaoHiddenDadoCelular]").value;
    const cep = document.querySelector("[name=simulacaoHiddenDadoCep]").value;
    const termos = document.querySelector("[name=simulacaoHiddenDadoTermos]").value;
    const tipoConsorcio = document.querySelector(".escolha-text").textContent;
    const valor = displayPagar.value;
    const parcela = displayParcelas.value;
    let tipoPagamento;
    const formaDeSimulacao = document.querySelector("#formaDeSimulacaoSelect");

    if(formaDeSimulacao.value == "valorBem") {
        formaDeSimulacao.textContent = "valor do bem";
        tipoPagamento = valor;
    } else if(formaDeSimulacao.value == "valorParcela") {
        formaDeSimulacao.textContent = "valor da parcela";
        tipoPagamento = parcela;
    } else {
        console.log("Forma de simulação não reconhecida");
    }

    function firstCaseUp(nome) {
        let nomeFirstCaseUp = nome.split(" ");

        for(let i = 0; i < nomeFirstCaseUp.length; i++) {
            nomeFirstCaseUp[i] = nomeFirstCaseUp[i][0].toUpperCase() + nomeFirstCaseUp[i].substr(1);
        }

        return nomeFirstCaseUp.join(" ");
    }

    const url = "https://wa.me/5518991163599?text="
            + `*Olá, me chamo ${firstCaseUp(nome)} e tenho interesse em fazer um consórcio com a Citybens!*` + "%0a"
            + "%0a"
            + "*Estes são meus dados, por favor entre em contato comigo*" + "%0a"
            + "%0a"
            + "*Nome*: " + firstCaseUp(nome) + "%0a"
            + "*E-mail*: " + email + "%0a"
            + "*Telefone*: " + celular + "%0a"
            + "*Cep*: " + cep + "%0a"
            + "*Termos de uso*: " + termos + "%0a"
            + "*Desejo fazer um*: " + tipoConsorcio + "%0a"
            + `*Desejo pagar pelo ${formaDeSimulacao.textContent}, no valor de*: ` + tipoPagamento;
    window.open(url, "_blank").focus();
}

function formatoBRL(n, c, d, t) {
    c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

(function rangeManipulation() {
    (function() {
        function mostrarValores(input, saida) {
            input.addEventListener("input", () => {
                const value = input.value;
                saida.innerHTML = `R$ ${formatoBRL(value)}`;
            });
        }

        mostrarValores(inputPagar, h3ValorPagar);
        mostrarValores(inputParcelas, h3ValorParcelas);
    })();

    (function() {
        function formDisponibilidade(input, display) {
            try {
                input.addEventListener("input", () => {
                    display.value = `R$ ${formatoBRL(input.value)}`;
                });
            } catch {
                input.addEventListener("change", () => {
                    display.innerHTML = `R$ ${formatoBRL(input.value)}`;
                });
            }
        }

        formDisponibilidade(inputPagar, displayPagar);
        formDisponibilidade(inputParcelas, displayParcelas);
    })();
})();

(function requestDynamicValues() {
    const btn = document.querySelector(".section-5-input");
    const texto = document.querySelector(".escolha-text-input").value;
    let bem = "";
    let resValues = {};

    window.addEventListener("load", request);

    switch(texto) {
    case "Consórcio de Imóveis":
        bem = "imovel";
        break;
    case "Consórcio de Automóveis":
        bem = "auto";
        break;
    case "Consórcio de Motos":
        bem = "moto";
        break;
    case "Consórcio de Serviços":
        bem = "servicos";
        break;
    case "Consórcio de Pesados":
        bem = "pesado";
        break;
    case "Consórcio de Eletrônicos":
        bem = "eletro";
        break;
    default:
        console.log("Item não encontrado");
        break;
    }

    async function request(event) {
        const response = await fetch("http://localhost:3000/api", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({bem: bem})
        }).then(e => e.json());

        const data = response.data;

        resValues = {
            minValorPagar: data.smaaler,
            maxValorPagar: data.largest,
            minValorParcela: Math.round(data.samallestInstallament),
            maxValorParcela: Math.round(data.biggestInstallament)
        };

        const somaPagar = (parseInt(resValues.minValorPagar) + parseInt(resValues.maxValorPagar)) / 2;
        const somaParcela = (parseInt(resValues.minValorParcela) + parseInt(resValues.maxValorParcela)) / 2;

        inputPagar.min = resValues.minValorPagar;
        inputPagar.max = resValues.maxValorPagar;
        inputPagar.value = resValues.maxValorPagar;
        displayPagar.value = `R$ ${formatoBRL(resValues.maxValorPagar)}`;

        h3ValorPagar.textContent = `R$ ${formatoBRL(resValues.maxValorPagar)}`;
        h3ValorParcelas.textContent = `R$ ${formatoBRL(resValues.maxValorParcela)}`;

        inputParcelas.min = resValues.minValorParcela;
        inputParcelas.max = resValues.maxValorParcela;
        inputParcelas.value = resValues.maxValorParcela;
        displayParcelas.value = `R$ ${formatoBRL(resValues.maxValorParcela)}`;

        metadeValorPagar.textContent = `R$ ${formatoBRL(somaPagar)}`;
        minValorPagar.textContent = `R$ ${formatoBRL(resValues.minValorPagar)}`;
        maxValorPagar.textContent = `R$ ${formatoBRL(resValues.maxValorPagar)}`;

        metadeValorParcela.textContent = `R$ ${formatoBRL(somaParcela)}`;
        minValorParcela.textContent = `R$ ${formatoBRL(resValues.minValorParcela)}`;
        maxValorParcela.textContent = `R$ ${formatoBRL(resValues.maxValorParcela)}`;
    }
})();

window.addEventListener("load", definirFormaSimulacao);
function definirFormaSimulacao() {
    const formaSimulacao = document.querySelector("#formaDeSimulacaoSelect");
    const rangeBem = document.querySelector(".section-5-range-1");
    const rangeParcela = document.querySelector(".section-5-range-2");
    const informacaoValoresBem = document.querySelector(".info-content-2");
    const informacaoValoresParcelas = document.querySelector(".info-content-3");

    switch(formaSimulacao.value) {
    case "valorBem":
        rangeBem.style.display = "block";
        informacaoValoresBem.style.display = "block";
        rangeParcela.style.display = "none";
        informacaoValoresParcelas.style.display = "none";
        break;
    case "valorParcela":
        rangeParcela.style.display = "block";
        informacaoValoresParcelas.style.display = "block";
        rangeBem.style.display = "none";
        informacaoValoresBem.style.display = "none";
        break;
    default:
        break;
    }
}
</script>

<template>
    <main class="section-5-main-container">
        <div class="consorcio-dados-title">
            <p class="dados-hello">Simulação</p>
            <div class="opcao-consorcio-escolhida">
                <i class="escolha-icone material-icons"></i>
                <p class="escolha-text">{{text}}</p>
            </div>
        </div>
        <div class="section-5-contents">
            <div class="section-5-content-1">
                <p class="formaDeSimulacaoP">Simular por:</p>
                <select oninput="definirFormaSimulacao();" name="formaDeSimulacao" id="formaDeSimulacaoSelect">
                    <option value="valorBem" selected>Valor do bem</option>
                    <option value="valorParcela">Valor de parcela</option>
                </select>
                <h1>Simular consórcio</h1>
                <div class="section-5-range-container">
                    <div class="section-5-range-1">
                        <p>Valor do bem</p>
                        <h3 class="h3-valor-pagar"></h3>
                        <input value="" class="input-pagar" min="" max="" step="500" type="range" name="range-1">
                        <div class="section-5-range-description">
                            <p class="minValorPagar"></p>
                            <p class="metadeValorPagar"></p>
                            <p class="maxValorPagar"></p>
                        </div>
                    </div>
                    <div class="section-5-range-2">
                        <p>Valor de parcelas</p>
                        <h3 class="h3-valor-parcelas"></h3>
                        <input value="" class="input-parcelas" min="" max="" step="100" type="range" name="range-2">
                        <div class="section-5-range-description">
                            <p class="minValorParcela"></p>
                            <p class="metadeValorParcela"></p>
                            <p class="maxValorParcela"></p>
                        </div>
                    </div>
                </div>
                <div class="section-5-range-observation">
                    <p>*Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <form action="/disponibilidade" method="POST" class="section-5-info-container" onsubmit="enviarParaWhatsapp();">
                <div class="section-5-info-content">
                    <div class="info-content-1">
                        <h1>Visualizar valores</h1>
                        <h3>Percentual: 18.0%</h3>
                    </div>
                    <div class="info-content-2">
                        <p>Total a pagar</p>
                        <input name="valorPagar" type="text" id="display_pagar" value="" readonly>
                    </div>
                    <div class="info-content-3">
                        <p>Parcelas</p>
                        <input name="valorParcelas" type="text" id="display_parcelas" value="R$ 6.600,00" readonly>
                    </div>
                    <input type="hidden" name="consorcioDadosValue" class="escolha-text-input" value="{{text}}">
                    <input type="hidden" name="simulacaoHiddenDadoNome" class="escolha-text-input" value="{{dadosNomeContent}}">
                    <input type="hidden" name="simulacaoHiddenDadoEmail" class="escolha-text-input" value="{{dadosEmailContent}}">
                    <input type="hidden" name="simulacaoHiddenDadoCelular" class="escolha-text-input" value="{{dadosCelularContent}}">
                    <input type="hidden" name="simulacaoHiddenDadoCep" class="escolha-text-input" value="{{dadosCepContent}}">
                    <input type="hidden" name="simulacaoHiddenDadoTermos" class="escolha-text-input" value="{{dadosTermosContent}}">
                </div>
                <input type="submit" class="section-5-input" value="Verificar disponibilidade">
            </form>
        </div>
    </main>
</template>

<style scoped>
    .consorcio-dados-title {
        max-width: 1035px;
        width: 100%;
        margin: 0 0 30px 0;
    }
    #formaDeSimulacaoSelect {
        margin: 0 0 50px 0;
        max-width: 190px;
        width: 100%;
        border: 2px solid var(--city-background-blue);
        background-color: #0000;
        color: #fff;
        font-size: 1.8rem;
        cursor: pointer;
        border-radius: 7px;
        outline: 0;
    }
    option {
        color: #000
    }
    .formaDeSimulacaoP {
        font-size: 1.6rem;
    }
    abbr {
        font-size: 10px;
    }
    .section-5-main-container {
        margin: 20vh 0 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section-5-contents {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 1360px;
        width: 100%;
    }

    .section-5-contents h3 {
        color: var(--city-background-green);
    }

    .section-5-content-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
    }

    .section-5-main-container input[type=range] {
        background-color: var(--city-background-2);
        width: 100%;
        height: 2px;
    }

    .section-5-range-description {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 12px;
        color: var(--city-background-4);
    }

    .section-5-range-description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .section-5-range-observation {
        font-size: 12px;
    }

    .section-5-info-container h3 {
        color: var(--city-background-green);
    }

    .section-5-info-container h1{
        color: white;
    }

    .section-5-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-5-info-content {
        background-color: var(--city-background-3);
        padding: 40px 70px;
        border-radius: 25px 25px 0 0;
        text-align: center;
    }

    .section-5-info-content,
    .section-5-input {
        max-width: 430px;
        width: 100%;
    }

    .section-5-input {
        text-align: center;
        padding: 20px 0;
        border-radius: 0 0 25px 25px;
        background-color: var(--city-background-green);
        color: rgb(0, 0, 0);
        cursor: pointer;
        border: 0;
        font-size: 18px;
    }

    .section-5-input:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease;
    }

    .info-content-1,
    .info-content-2,
    .info-content-3 {
        margin: 0 0 20px 0;
    }

    .info-content-2 p,
    .info-content-3 p {
        font-size: 1.4rem;
        margin: 0;
    }

    #display_pagar,
    #display_parcelas {
        width: 180px;
        font-size: 25px;
        color: var(--city-background-green);
        text-align: center;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
        font-weight: 550;
        outline: 0;
    }

    @media screen and (max-width: 867px) {
        .section-5-contents {
            flex-direction: column;
        }

        .section-5-content-1 {
            max-width: 500px;
            width: 90%;
            margin: 0 0 5% 0;
        }

        .section-5-content-1 h1 {
            text-align: center;
        }
    }

    @media screen and (max-width: 380px) {
        .section-5-info-content {
            padding: 30px 60px;
        }
    }

    @media screen and (max-width: 867px) {
        .consorcio-dados-title {
            max-width: 520px;
            padding: 0 10px;
        }
    }
</style>
