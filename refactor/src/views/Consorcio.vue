<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default({
    mounted() {
        this.dropBox();
        this.slider();
    },
    methods: {
        dropBox() {
            const dropbox = document.querySelector("#input-drop");
            const droplist = document.querySelector(".dropDown");
            const submit = document.querySelector(".consorcio-btn");
            const form = document.querySelector("#form-sonho");

            function inputItem(num) {
                const option = document.querySelector(".option-" + num);
                const item = document.querySelector(".item-" + num);

                item.addEventListener("mousedown", () => {
                    dropbox.value = option.textContent;
                });
            }
            for(let i = 1; i < 7; i++) {
                inputItem(i);
            }

            const styles = ["block", "none"];

            function includeEvent(item, event, display) {
                item.addEventListener(event, () => {
                    droplist.style = `display: ${display} !important`;
                });
            }
            includeEvent(dropbox, "focus", styles[0]);
            includeEvent(dropbox, "blur", styles[1]);

            function envio(event) {
                if(dropbox.value == "") {
                    (function() {
                        const p = document.querySelector(".error-message");

                        p.innerHTML = "*Campo obrigatório";
                        p.classList.add("text-error");
                        dropbox.classList.add("input-error");
                        submit.classList.add("btn-error");

                        event.preventDefault();
                    })();
                }
            }
            form.addEventListener("submit", envio);
        },
        slider() {
            function sliderCall(num) {
                const images = {
                    imovel: "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    automovel: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    moto: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    servico: "https://img.freepik.com/fotos-gratis/mecanico-de-manutencao-de-um-carro_1170-1601.jpg?t=st=1658233991~exp=1658234591~hmac=bb9a66f2d2d847decdc6ec0c3b6cd2f65bc8197f31feef9f9900c91ac04bfa24&w=360",
                    pesados: "https://images.unsplash.com/photo-1605314774430-633783cadd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    eletronicos: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80s",
                    default: "../../public/images/slider/default.png"
                };

                const sliderImage = document.querySelector(".slider-image");
                const item = document.querySelector(".item-" + num);
                const p = document.querySelector(".slider-text");

                window.addEventListener("load", () => {
                    sliderImage.src = images.default;
                    sliderImage.alt = "imagem padrão";
                    p.textContent = "Realize seus sonhos com a gente!";
                });

                item.addEventListener("mousedown", () => {
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
                        break;
                    }
                });
            }
            for(let i = 1; i < 7; i++) {
                sliderCall(i);
            }
        }
    }
});
</script>

<template>
    <main id="consorcio-main-container">
        <div class="consorcio-contents-2">
            <div class="consorcio-titles-container">
                <div class="consorcio-title">
                    <h1>Agora você pode!</h1>
                </div>
                <div class="consorcio-description">
                    <p>Realize seus sonhos com a citybens.</p>
                </div>
            </div>
            <form id="form-sonho" action="/informe-seus-dados" method="post">
                <div class="error-message-container">
                    <p class="error-message"></p>
                </div>
                <input type="text" name="sonho" id="input-drop" placeholder="Qual o seu sonho?" readonly>
                <a href="https://www.google.com">
                    <input type="submit" value="arrow_forward" class="consorcio-btn material-icons">
                </a>
                <div class="dropDown-container">
                    <ul class="dropDown">
                        <li class="item item-1">
                            <i class="item-icons material-icons">home</i>
                            <div class="option-1">Consórcio de <span class="last_child_color">Imóveis</span></div>
                        </li>
                        <li class="item item-2">
                            <i class="item-icons material-icons">airport_shuttle</i>
                            <div class="option-2">Consórcio de <span class="last_child_color">Automóveis</span></div>
                        </li>
                        <li class="item item-3">
                            <i class="item-icons material-icons">motorcycle</i>
                            <div class="option-3">Consórcio de <span class="last_child_color">Motos</span></div>
                        </li>
                        <li class="item item-4">
                            <i class="item-icons material-icons">build</i>
                            <div class="option-4">Consórcio de <span class="last_child_color">Serviços</span></div>
                        </li>
                        <li class="item item-5">
                            <i class="item-icons material-icons">local_shipping</i>
                            <div class="option-5">Consórcio de <span class="last_child_color">Pesados</span></div>
                        </li>
                        <li class="item item-6">
                            <i class="item-icons material-icons">laptop_windows</i>
                            <div class="option-6">Consórcio de <span class="last_child_color">Eletrônicos</span></div>
                        </li>
                    </ul>
                </div>
            </form>
            <div class="consorcio-slider-container">
                <div class="slider">
                    <img class="slider-image" src="" alt="">
                    <div class="slider-description">
                        <img class="slider-citybens-icon" src="images/icons/citybens/logotipo-branco.png" alt="logotipo citybens">
                        <p class="slider-text"></p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    #consorcio-main-container {
        margin: 110px 0 0 0;
        display: flex;
        justify-content: center;
    }

    .consorcio-contents-2 {
        display: grid;
        grid-template-areas:
            'titles slider'
            'form slider'
        ;
        justify-items: center;
        align-items: center;
        max-width: 1300px;
        width: 100%;
    }

    .consorcio-titles-container {
        padding: 0 10px;
    }

    .consorcio-title {
        grid-area: title;
    }

    #form-sonho {
        grid-area: form;
        width: 360px;
    }

    .error-message {
        color: red;
        margin: 10px 0 5px 0;
        font-size: 1.3rem;
    }

    .consorcio-slider-container {
        grid-area: slider;
    }

    .consorcio-title h1 {
        font-size: 4rem;
        color: var(--city-background-green);
    }

    .consorcio-description {
        font-size: 1.6rem;
    }

    #input-drop {
        width: 300px;
        border: 2px solid var(--city-background-blue);
        border-radius: 10px 0 0 10px;
        position: relative;
        padding: 0 15px;
        font-size: 1.8em;
        cursor: pointer;
    }

    #input-drop:focus {
        outline: none;
    }

    #input-drop,
    .consorcio-btn {
        height: 55px;
    }

    .consorcio-btn {
        position: absolute;
        border: 2px solid var(--city-background-blue);
        border-left: 0;
        width: 60px;
        border-radius: 0 10px 10px 0;
        background-color: #fff;
        color: var(--city-background-blue);
    }

    .consorcio-btn:hover {
        background-color: var(--city-background-blue);
        color: white;
    }

    .dropDown-container {
        position: relative;
    }

    .dropDown {
        width: 300px;
        margin: 2px 0 0 0;
        height: 125px;
        overflow: auto;
        border-radius: 8px 6px 6px 8px;
        border: 1px solid var(--city-background-blue);
        background-color: white;
        border-right: 0;
        display: none;
        position: absolute;
        bottom: 57px;
        z-index: 1;
        padding: 0;
    }

    .dropDown::-webkit-scrollbar,
    .dropDown::-webkit-scrollbar-thumb,
    .dropDown::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    .dropDown::-webkit-scrollbar {
        width: 7px;
        background-color: rgba(255, 255, 255, 0.749);
    }

    .dropDown::-webkit-scrollbar-thumb {
        background-color: var(--city-background-blue);
    }

    .dropDown::-webkit-scrollbar-thumb:hover {
        background-color: grey;
    }

    .dropDown::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px rgb(161, 154, 154);
    }

    .item {
        background-color: rgb(0, 0, 0, 0);
        border-bottom: 1px solid var(--city-background-blue);
        border-top: 0;
        padding: 0 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: var(--city-background-4);
        width: 100%;
        height: 60px;
    }

    .item{
        font-size: 1.6rem;
    }

    .item:last-child {
        border-bottom: 0;
    }

    .item:hover {
        background-color: #c8c8c8;
        padding-left: 7px;
        transition: .3s;
    }

    .item-icons {
        font-size: 40px !important;
        text-align: center !important;
        color: var(--city-background-blue) !important;
        margin: 0 20px 0 0 !important;
    }

    span {
        color: var(--city-background-blue);
    }

    .consorcio-slider-container {
        position: relative;
    }

    .consorcio-slider-container,
    .slides,
    .slider,
    .slider-image {
        width: 400px;
        height: 500px;
        border-radius: 10px;
    }

    .slider {
        position: absolute;
        overflow: hidden;
    }

    .slider-image {
        position: relative;
    }

    .slider-description {
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(to bottom, transparent 0%, #000 99%);
        width: 100%;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .slider-description img {
        width: 130px;
        height: 70px;
    }

    .slider-text {
        color: #fff;
        text-align: center;
        font-size: 1.3rem;
    }

    @media screen and (max-width: 825px) {
        .consorcio-contents-2 {
            grid-template-areas:
                'titles'
                'slider'
                'form'
            ;
        }

        #form-sonho {
            width: 90%;
            max-width: 548px;
        }

        #input-drop, .dropDown {
            width: 89%;
        }

        .consorcio-slider-container,
        .slides,
        .slider,
        .slider-image {
            display: flex;
            justify-content: center;
            max-width: 584px;
            width: 98%;
            max-height: 334px;
            height: 100vw;
        }

        .slider-description {
            width: 98%;
        }
    }

    @media screen and (max-width: 548px) {
        #input-drop, .dropDown {
            width: 87%;
        }
    }

    @media screen and (max-width: 438px) {
        #input-drop, .dropDown {
            width: 84%;
        }

        .consorcio-title h1 {
            font-size: 10vw;
        }

        .item {
            font-size: 3.5vw;
        }
    }

    @media screen and (max-width: 364px) {
        #input-drop, .dropDown {
            width: 79%;
            font-size: 4.7vw;
        }
    }
</style>
