<script>
window.addEventListener("load", () => {
    const valor = document.querySelector(".checkbox-termos");

    if(valor.checked) {
        valor.value = "Concordo com os termos";
    } else {
        valor.value = "Não concordo com os termos";
    }
});
</script>

<template>
    <main id="consorcio-dados-container">
        <div class="consorcio-dados-subcontainer">
            <div class="consorcio-dados-title">
                <p class="dados-hello">Olá!</p>
                <div class="opcao-consorcio-escolhida">
                    <i class="escolha-icone material-icons"></i>
                    <p class="escolha-text">{{text}}</p>
                </div>
                <p>*Antes de continuar, precisamos de algumas informações.</p>
            </div>
            <form class="consorcio-dados-form" method="post" action="/simulacao">
                <input class="consorcio-dados-input consorcio-dados-input-name" type="text" name="dadosInputNome" id="input-name" placeholder="Nome Completo (Obrigatório)" required>

                <input type="hidden" name="consorcioDadosValue" class="escolha-text-input" value="{{text}}">

                <input class="consorcio-dados-input consorcio-dados-input-email" type="email" name="dadosInputEmail" id="input-email" placeholder="E-mail (Obrigatório)" required>

                <div class="input-celular-container">
                    <input class="consorcio-dados-input consorcio-dados-input-celular" type="tel" name="dadosInputCelular" id="input-celular" placeholder="Celular (Obrigatório)" required>
                </div>

                <div class="input-cep-container">
                    <input class="consorcio-dados-input consorcio-dados-input-cep" type="text" name="dadosInputCep" id="input-cep" placeholder="CEP (Obrigatório)" required>
                </div>

                <div class="termos-de-uso">
                    <input class="checkbox-termos" type="checkbox" name="dadosInputTermos" id="" required checked>
                    <p>
                        Eu concordo com o <a target="_blank" href="/termos-de-uso">termo de privacidade</a>
                    </p>
                </div>

                <div class="dados-button-container">
                    <input class="btn-enviar-dados" type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
    #consorcio-dados-container {
        margin: 160px 0 0 0;
    }

    .last_word_format {
        color: var(--city-background-green);
        font-size: 5rem;
        line-height: 40px;
    }

    .consorcio-dados-subcontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0 10px;
    }

    .consorcio-dados-title {
        max-width: 550px;
        width: 100%;
        margin: 0 0 5px 0;
    }

    .dados-hello {
        font-size: 4rem;
        color: white;
    }

    .escolha-text {
        width: 190px;
        font-size: 1.8rem;
        margin: 0;
    }

    .opcao-consorcio-escolhida {
        display: flex;
        align-items: center;
    }

    .form-dados-consorcio {
        display: none;
    }

    .escolha-icone {
        color: var(--city-background-green);
        font-size: 8.5rem !important;
        margin: 0 10px 0 0;
    }

    .consorcio-dados-form {
        display: grid;
        grid-template-areas:
            'nome nome'
            'email email'
            'celular cep'
            'termos termos'
            '. botao'
        ;
        gap: 35px 10px;
        max-width: 550px;
        width: 100%;
    }

    .consorcio-dados-input {
        height: 45px;
        width: 100%;
        border-radius: 8px;
        outline: 0;
        border: 1px solid var(--city-background-green);
        padding: 10px;
        font-size: 1.5rem;
        font-weight: 200;
    }

    .consorcio-dados-input-name {
        grid-area: nome;
    }

    .consorcio-dados-input-email {
        grid-area: email;
    }

    .input-celular-container {
        grid-area: celular;
    }

    .input-celular-container input,
    .input-cep-container input {
        width: 100%;
        min-width: 130px;
    }

    .input-cep-container {
        grid-area: cep;
    }

    .checkbox-termos {
        width: 15px;
    }

    .termos-de-uso {
        display: flex;
        align-items: center;
        grid-area: termos;
        width: 100%;
    }

    .termos-de-uso input {
        margin: 0 5px 0 0;
    }

    .termos-de-uso p {
        margin: 0;
        font-size: 1.3rem
    }

    .termos-de-uso p a {
        color: var(--city-background-blue)
    }

    .dados-button-container {
        grid-area: botao;
        display: flex;
        justify-content: flex-end;
    }

    .btn-enviar-dados {
        background-color: var(--city-background-blue);
        width: 160px;
        height: 50px;
        outline: 0;
        border-radius: 10px;
        color: #fff;
        border: 0;
        font-size: 1.6rem;
    }

    .btn-enviar-dados:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease;
    }

    @media screen and (max-width: 416px) {
        .consorcio-dados-input-celular::placeholder {
            font-size: 3.2vw;
        }

        .last_word_format {
            font-size: 10.5vw;
        }
    }

    @media screen and (max-width: 398px) {
        .consorcio-dados-input-cep::placeholder {
            font-size: 3.3vw;
        }
    }
</style>
