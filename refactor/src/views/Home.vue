<script>

</script>

<template>
    <main id="main-container">
        <section class="section-1-top-card-container">
            <div class="main-top-card">
                <div class="left-card-container">
                    <p>Lorem ipsum dolor <span>sit amet</span></p>
                    <router-link to="/consorcio">
                        <button class="top-card-button">Simular consórcio</button>
                    </router-link>
                </div>
                <div class="right-card-slider">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit eius ipsam voluptates necessitatibus quae aliquam hic expedita alias. Tempora soluta expedita autem nemo molestias vel praesentium! Exercitationem, quis ullam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit eius ipsam voluptates necessitatibus quae aliquam hic expedita alias. Tempora soluta expedita autem nemo molestias vel praesentium! Exercitationem, quis ullam?
                    </p>
                </div>
            </div>
        </section>
        <section class="section-2-main-container">
            <div class="section-2-contents">
                <h1>Sessão 2 lorem ipsum</h1>
                <div class="section-2-cards-container">
                    <div class="section-2-card-1">
                        <img src="/images/background/section-2/percentual.PNG" alt="imagem de percentual 3d">
                        <div class="card-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="section-2-card-2">
                        <img src="/images/background/section-2/grafico.PNG" alt="imagem de grafico 3d">
                        <div class="card-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="section-2-card-3">
                        <img src="/images/background/section-2/carteira.PNG" alt="imagem de carteira 3d">
                        <div class="card-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="section-2-card-4">
                        <img src="/images/background/section-2/moedas.PNG" alt="imagem de moedas em 3d">
                        <div class="card-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-3-main-container">
            <div class="section-3-grid-items">
                <div class="section-3-titles">
                    <h1>Baixe nosso aplicativo</h1>
                    <p>Disponíveis na App Store e Google Play</p>
                </div>
                <div class="playstore-appstore-icons">
                    <img src="/images/background/section-3/appstore.png" alt="Appstore">
                    <img src="/images/background/section-3/playstore.png" alt="Google Playstore">
                </div>
                <div class="cellphone-background">
                    <img src="/images/background/section-3/43.png" alt="imagem de um smarthphone">
                </div>
            </div>
        </section>
        <section class="displayNone section-4-main-container">
            <div class="section-4-header">
                <h1>Sessão 4 lorem ipsum</h1>
                <a href="/consorcio">
                    <button>Faça um consórcio</button>
                </a>
            </div>
            <div class="section-4-cards-container">
                <div class="section-4-card-1">
                    <img class="section-4-card-icon" src="/images/icons/azul/electronics.png" alt="">
                    <p class="section-4-card-description">Lorem ipsum</p>
                </div>
                <div class="section-4-card-2">
                    <img class="section-4-card-icon" src="/images/icons/azul/rocket.png" alt="">
                    <p class="section-4-card-description">Lorem ipsum</p>
                </div>
                <div class="section-4-card-3">
                    <img class="section-4-card-icon" src="/images/icons/azul/gift.png" alt="">
                    <p class="section-4-card-description">Lorem ipsum</p>
                </div>
                <div class="section-4-card-4">
                    <img class="section-4-card-icon" src="/images/icons/azul/mobile.png" alt="">
                    <p class="section-4-card-description">Lorem ipsum</p>
                </div>
            </div>
        </section>
    <!-- Display none -->
        <section class="displayNone section-6-main-container">
        <div class="section-6-card">
                <div class="section-6-card-text">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <input type="tel" id="phone" name="phone" value="+55 (__) _____ - ____" mask="+55 (__) _____ - ____" placeholder="+55 (__) _____ - ____" />
                    <a href="#">lorem →</a>
                </div>
                <div class="section-6-card-vertical-slider">
                    <img src="/images/background/section-6/cell-app-screen.png" alt="apps na tela">
                </div>
            </div>
        </section>
    <!-- Fim display none -->
        <section class="section-7-main-container">
            <div class="section-7-card">
                <div class="section-7-left-card">
                    <div class="left-card-contents">
                        <h1>Lorem ipsum dolor</h1>
                        <div class="input-number-container">
                            <input type="number" step="0.01" name="valor" min="0.01">
                            <p class="manual-placeholder">Informar valor</p>
                        </div>
                        <div class="moedas-container">
                            <button>BRL</button>
                            <button>EUR</button>
                            <button>USD</button>
                            <button>GBP</button>
                            <button>CHF</button>
                        </div>
                        <p class="card-left-taxa">
                            *Sujeito a taxas em relação a cotação atual da moeda.
                        </p>
                    </div>
                </div>
                <div class="section-7-right-card">
                    <h1>Tabela de valores de cotação</h1>
                    <table class="section-7-right-card-container">
                        <thead>
                            <th>Moeda</th>
                            <th>Cotação</th>
                            <th>valor total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EUR</td>
                                <td>R$ 5.53</td>
                                <td>R$ 10.00</td>
                            </tr>
                            <tr>
                                <td>USD</td>
                                <td>R$ 5.26</td>
                                <td>R$ 7,00</td>
                            </tr>
                            <tr>
                                <td>GBP</td>
                                <td>R$ 6,41</td>
                                <td>R$ 12,00</td>
                            </tr>
                            <tr>
                                <td>CHF</td>
                                <td>R$ 5,49</td>
                                <td>R$ 9,00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="section-7-table-buttons">
                        <button>Lorem ipsum</button>
                        <button>Lorem ipsum</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-8-main-container">
            <div class="section-8-contents">
                <div class="blog-title">
                    <h1>Blog citybens</h1>
                    <button class="blog-button">Acessar</button>
                </div>
                <div class="section-8-cards-container">
                    <div class="section-8-card section-8-card-1">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo quam hic, maxime nesciunt, odio at deleniti aspernatur id nostrum molestias voluptates ut laudantium reiciendis officia, ad quo quaerat minus.</p>
                        <div class="card-date-container">
                            <h1>26</h1>
                            <p>2022</p>
                        </div>
                    </div>
                    <div class="section-8-card section-8-card-2">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minus animi officiis illum cumque, fugit beatae soluta deserunt explicabo laborum veritatis corporis molestias, maiores autem porro dignissimos id ea eaque.</p>
                        <div class="card-date-container">
                            <h1>27</h1>
                            <p>2022</p>
                        </div>
                    </div>
                    <div class="section-8-card section-8-card-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus soluta quos consequatur dignissimos voluptatem tempore reiciendis dicta neque, vero officiis. Rem ipsum dignissimos nostrum enim adipisci ut eaque eligendi?</p>
                        <div class="card-date-container">
                            <h1>28</h1>
                            <p>2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
    #main-container {
        padding: 120px 0 0 0;
    }

    /* Section 1 top card */
    .section-1-top-card-container {
        display: flex;
        justify-content: center;
    }

    .main-top-card {
        display: flex;
        justify-content: center;
        max-width: 4000px;
        width: 85%;
    }

    .left-card-container {
        background-color: var(--city-background-3);
        grid-area: left-container;
        border-radius: 25px 0 0 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 15px;
        font-size: 2.5em;
        width: 100%;
        color: white;
    }

    .left-card-container p {
        font-size: 2.3vw;
        margin: 0;
    }

    .right-card-slider p {
        margin: 0;
        color: black;
    }

    .left-card-container p span {
        color: var(--city-background-green);
        flex-wrap: wrap;
    }

    .top-card-button {
        background-color: var(--city-background-blue);
        color: #fff;
        padding: 10px 40px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 15px;
        max-width: 250px;
        border: 0;
    }

    .top-card-button:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease;
    }

    .left-card-container,
    .right-card-slider {
        max-width: 1400px;
        width: 80%;
        min-width: 280px;
        max-height: 1400px;
        height: 35vw;
        min-height: 320px
    }

    .right-card-slider {
        border-radius: 0 25px 25px 0;
        background-color: var(--city-background-green);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        grid-area: right-container;
    }
    /* Fim section 1 top card */

    /* Section 2 */
    .section-2-main-container {
        margin: 70px 0 0 0;
    }

    .section-2-contents {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .section-2-cards-container {
        margin: 25px 0 0 0;
        display: flex;
        justify-content: center;
        overflow: auto;
    }

    .section-2-cards-container,
    .section-2-contents h1 {
        max-width: 1237px;
        width: 100%;
    }

    .section-2-contents h1 {
        max-width: 1237px;
        width: 100%;
        color: var(--city-background-green);
    }

    .card-description {
        width: 280px;
        background-color: var(--city-background-blue);
        padding: 20px;
        border-radius: 15px;
    }

    .section-2-card-1,
    .section-2-card-2,
    .section-2-card-3 {
        margin: 0 20px 0 0;
    }

    .section-2-card-1,
    .section-2-card-2,
    .section-2-card-3,
    .section-2-card-4 {
        width: 280px;
        background-color: #f6f6f6;
        border-radius: 15px 15px 20px 20px;
    }

    .section-2-card-1 img,
    .section-2-card-2 img,
    .section-2-card-3 img,
    .section-2-card-4 img {
        width: 100%;
        border-radius: 15px;
    }
    /* Fim section 2 */

    /* Sessão 3 */
    .section-3-main-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin: 70px 0 0 0;
        height: auto;
    }

    .section-3-grid-items {
        max-width: 2700px;
        width: 90%;
        background-color: var(--city-background-3);
        border-radius: 20px;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-areas:
            'title cell'
            'playstore cell'
        ;
        padding: 20px 30px;
    }

    .section-3-titles {
        grid-area: title;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
    }

    .section-3-titles > h1 {
        font-size: 3em;
        color: var(--city-background-blue);
    }

    .section-3-titles p {
        font-size: 1.2em;
        font-weight: 600;
    }

    .playstore-appstore-icons {
        grid-area: playstore;
        display: flex;
        justify-content: center;
    }

    .playstore-appstore-icons img {
        width: 180px;
        height: 55px;
        cursor: pointer;
        transition: .5s;
    }

    .playstore-appstore-icons img:nth-of-type(1) {
        margin: 0 15px 0 0;
    }

    .playstore-appstore-icons img:hover {
        transform: scale(1.1);
        transition: .5s;
    }

    .cellphone-background {
        grid-area: cell;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 85%;
    }

    .cellphone-background img {
        max-width: 1000px;
        width: 100%;
        border-radius: 0 0 20px 20px;
        padding: 5px;
    }
    /* Fim sessão 3 */

    /* Sessão 4 */
    .section-4-main-container {
        margin: 70px 0 0 0;
    }

    .section-4-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .section-4-header button {
        border: 1px solid var(--city-background-green);
        border-radius: 20px;
        padding: 6px 15px;
        cursor: pointer
    }

    .section-4-header button:hover {
        background-color: #0055ff5c;
    }

    .section-4-cards-container {
        margin: 50px 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .section-4-card-1,
    .section-4-card-2,
    .section-4-card-3,
    .section-4-card-4 {
        background-color: var(--city-background-2);
        border-radius: 20px;
        padding: 20px 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-4-card-description {
        margin: 15px 0 0 0;
    }

    .section-4-card-icon {
        width: 30px;
    }
    /* Fim sessão 4 */

    /* Sessão 6  - não usada no site*/
    .section-6-main-container {
        margin: 70px 0 0 0;
        display: flex;
        justify-content: center;
    }

    .section-6-card {
        width: 90%;
        height: 80vh;
        background: rgb(0,0,0);
        background: linear-gradient(115deg, rgba(0,0,0,1) 10%, rgba(13,13,13,1) 50%, rgba(232,255,1,1) 100%);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .section-6-card-text {
        border-radius: 25px 0 0 25px;
        width: 45%;
        color: white;
        display: flex;
        flex-direction: column;
    }

    .section-6-card-text h1 {
        font-size: 2.3em;
    }

    .section-6-card-text p {
        font-size: 13px;
    }

    .section-6-card-text input[type=tel] {
        border: 1px solid white;
        background-color: var(--city-background-green);
        color: white;
        width: 185px;
        margin: 20px 0 0 0;
        padding: 10px 15px;
        border-radius: 30px;
    }

    .section-6-card-text input[type=tel]:focus {
        border: none;
    }

    .section-6-card-text a {
        margin: 15px 0 0 0;
        color: white;
        width: 65px;
    }

    .section-6-card-vertical-slider {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .section-6-card-vertical-slider img {
        width: 400px;
    }
    /* Fim sessão 6 */

    /* Sessão 7 */
    .section-7-main-container {
        margin: 70px 0 0 0;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .section-7-card {
        display: grid;
        justify-items: center;
        grid-template-columns: auto;
        grid-template-areas:
            'card-1 card-2'
        ;
    }

    .section-7-left-card {
        background-color: var(--city-background-3);
        display: grid;
        justify-items: center;
        grid-template-areas:
            'title'
            'input'
            'moedas'
            'taxa'
        ;
        border-radius: 25px 0 0 25px;
        padding: 40px 30px;
        color: var(--city-background-4);
        font-size: 13px;
        grid-area: card-1;
        text-align: center;
    }

    .card-left-taxa {
        grid-area: taxa;
    }

    .section-7-right-card h1 {
        text-align: center;
    }

    .section-7-left-card,
    .section-7-right-card {
        max-width: 500px;
        width: 100%;
    }

    .section-7-left-card h1 {
        color: #fff;
        font-weight: 200;
        font-size: 2em;
        grid-area: title;
    }

    .section-7-left-card h1,
    .input-number-container input[type=number] {
        margin: 0 0 6% 0;
    }

    .input-number-container {
        width: 100%;
        position: relative;
        grid-area: input;
    }

    .left-card-contents {
        max-width: 430px;
        width: 100%;
    }

    .input-number-container input[type=number] {
        width: 100%;
        height: 70px;
        border-radius: 20px;
        border: 2px solid var(--city-background-blue);
        padding: 40px 20px 20px 20px;
        font-size: 18px;
    }

    .input-number-container input[type=number]:focus {
        outline: 0;
    }

    .manual-placeholder {
        color: var(--city-background-4);
        position: absolute;
        left: 20px;
        top: 0;
        font-size: 20px;
    }

    .moedas-container {
        margin: 10px 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .moedas-container button {
        border-radius: 30px;
        padding: 3px 15px;
        border: 0;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
        width: 60px;
        height: 30px;
    }

    .moedas-container button:hover {
        background-color: var(--city-background-green);
        transition-duration: 0.3s;
    }

    .moedas-container button:focus {
        background-color: var(--city-background-green);
        color: #fff;
    }

    .section-7-right-card {
        border-radius: 0 25px 25px 0;
        background-color: var(--city-background-2);
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: card-2;
    }

    .section-7-right-card-container {
        width: 100%;
        text-align: center;
    }

    .section-7-right-card-container th {
        color: #262626;
        font-size: 1.5rem;
        font-weight: 100;
        padding: 10px 0;
    }

    .section-7-right-card-container td {
        font-size: 1.8rem;
        padding: 8px 0;
        font-weight: 100;
    }

    .section-7-right-card-container tr:not(:last-child) {
        border-bottom: 1px solid rgb(202, 202, 202);
    }

    .section-7-right-card-container
    td:first-child,
    th:first-child {
        text-align: start;
    }

    .section-7-right-card-container
    th:last-child {
        text-align: end;
    }

    .section-7-right-card-container
    td:last-child {
        color: var(--city-background-blue);
        text-align: end;
    }

    .section-7-table-buttons {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0 0 0;
    }

    .section-7-table-buttons
    button {
        width: 170px;
        height: 35px;
        border-radius: 25px;
    }

    .section-7-table-buttons
    button:nth-of-type(1) {
        background-color: var(--city-background-blue);
        border: 0;
        color: #fff;
    }

    .section-7-table-buttons
    button:nth-of-type(1):hover{
        background-color: #0511F2;
        transition: background-color 0.3s ease;
    }

    .section-7-table-buttons
    button:nth-of-type(2) {
        border: 2px solid var(--city-background-blue);
    }
    /* Fim sessão 7 */

    /* Sessão 8 */
    .section-8-main-container {
        margin: 70px 0 0 0;
    }

    .section-8-main-container h1 {
        margin-bottom: 0;
    }

    .blog-title {
        margin: 0 0 30px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1120px;
        width: 100%;
        padding: 0 20px;
        color: var(--city-background-green);
    }

    .blog-button {
        padding: 8px 20px;
        background-color: var(--city-background-blue);
        border: 0;
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.3rem;
        color: white;
    }

    .blog-button:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease;
    }

    .section-8-contents {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .section-8-cards-container {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: auto;
    }

    .section-8-card {
        max-width: 360px;
        width: 100%;
        max-height: 400px;
        height: 100vw;
        min-height: 312px;
        background-color: var(--city-background-blue);
        padding: 30px 25px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .section-8-card:not(:last-child) {
        margin: 0 20px 0 0;
    }

    .card-date-container::before {
        content: " ";
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 0;
    }

    .card-date-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 25px 0 0 0 ;
    }

    .card-date-container h1 {
        font-size: 2.5em;
        color: var(--city-background-green);
    }
    /* Fim sessão 8 */

    /**/
    /* Media queries */
    /**/
    @media screen and (max-width: 1180px) {
        .section-2-cards-container {
            padding: 0 10px;
        }

        .section-2-contents h1 {
            padding: 0 0 0 10px;
        }

        .section-2-cards-container {
            justify-content: initial;
            margin-left: 12%;
            margin-right: 12%;
        }

        .section-8-cards-container {
            padding: 0 10px;
            justify-content: initial;
        }
    }

    @media screen and (max-width: 962px) {
        .section-3-main-container {
            height: auto;
        }

        .section-3-grid-items {
            align-items: center;
            grid-template-columns: auto;
            grid-template-areas:
                'title'
                'cell'
                'playstore'
            ;
            padding: 20px 0;
        }

        .cellphone-background {
            max-width: none;
        }

        .cellphone-background img {
            max-width: 362px;
            width: 50vw;
        }

        .section-3-titles h1 {
            font-size: 5vw;
        }

        .playstore-appstore-icons {
            margin: 20px 0 0 0;
            width: 100%;
        }
    }

    @media screen and (max-width: 943px) {
        .section-3-container-items {
            grid-template-columns: auto;
            grid-template-areas:
                'items'
                'cellphone'
            ;
        }

        .section-3-items {
            margin: 4% 0 0 0;
        }

        .cellphone-background img {
            width: 75%;
        }

        .section-7-card {
            grid-template-rows: auto auto;
            grid-template-areas:
                'card-1'
                'card-2'
            ;
            width: 100%;
        }

        .section-7-left-card,
        .section-7-right-card {
            max-width: 635px;
            width: 95%;
        }

        .section-7-left-card {
            border-radius: 25px 25px 0 0;
        }

        .section-7-right-card {
            border-radius: 0 0 25px 25px;
        }

        .section-8-card {
            max-width: 365px;
            width: 100%;
            min-width: 249px;
            max-height: 200px;
            height: 100vw;
            min-height: 312px;
        }
    }

    @media screen and (max-width: 867px) {
        .main-top-card {
            display: grid;
            grid-template-areas:
                'left-container'
                'right-container'
            ;
        }

        .left-card-container,
        .right-card-slider {
            width: 95vw;
            height: 40vw;
            min-height: 270px;
        }

        .left-card-container {
            border-radius: 25px 25px 0 0;
        }

        .left-card-container p {
            font-size: 5vw;
        }

        .right-card-slider {
            border-radius: 0 0 25px 25px;
        }
    }

    @media screen and (max-width: 621px) {
        .section-2-card-1,
        .section-2-card-2,
        .section-2-card-3,
        .section-2-card-4,
        .card-description {
            max-width: 280px;
            width: 100%;
            min-width: 180px;
        }

        .section-7-table-buttons button {
            width: 35vw;
        }
    }

    @media screen and (max-width: 484px) {
        .section-3-titles h1 {
            font-size: 6vw;
        }

        .playstore-appstore-icons {
            flex-direction: row;
            align-items: center;
        }

        .playstore-appstore-icons img {
            max-width: 180px;
            width: 40%;
            min-width: 60px;
            height: auto;
        }

        .playstore-appstore-icons img:nth-of-type(1) {
            margin: 0 0 0 0;
        }

        .playstore-appstore-icons img:nth-of-type(2) {
            margin: 0 0 0 10px;
        }
    }

    @media screen and (max-width: 460px) {
        .section-7-left-card {
            text-align: center;
        }

        .section-7-right-card {
            padding: 20px 10vw;
        }

        .moedas-container {
            flex-direction: column;
            margin: 0;
            display: none;
        }

        .top-card-button {
            max-width: 203px;
            width: 70vw;
            font-size: 2.9vw;
        }
    }

    @media screen and (max-width: 430px) {
        .section-3-items h1 {
            font-size: 7vw;
        }

        .top-card-button {
            font-size: 3.1;
        }
    }

    @media screen and (max-width: 380px) {
        .info-content-1 h1 {
            font-size: 6vw;
        }

        .blog-title {
            padding: 0 6px;
        }

        .top-card-button {
            font-size: 3.5vw;
        }
    }
</style>
