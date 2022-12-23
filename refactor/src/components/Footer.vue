<template>
    <footer id="footer-container">
        <div class="footer-subcontainer">
            <section class="footer-section-1">
                <div class="footer-content-1">
                    <dl>
                        <dt>Lorem ipsum</dt>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                    </dl>
                </div>
                <div class="footer-content-2">
                    <dl>
                        <dt>Lorem ipsum</dt>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                    </dl>
                </div>
                <div class="footer-content-3">
                    <dl>
                        <dt>Lorem ipsum</dt>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                    </dl>
                </div>
                <div class="footer-content-4">
                    <dl>
                        <dt>Lorem ipsum</dt>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                        <dd>Lorem ipsum dolor</dd>
                    </dl>
                </div>
            </section>
            <section class="footer-section-2">
                <div class="footer-logotype">
                    <img src="images/icons/citybens/logotipo-branco-horiz.png" alt="logotipo citybens">
                </div>
                <div class="footer-socials-container">
                    <div class="footer-socials">
                        <a target="_blank" href="https://pt-br.facebook.com/citybensoficial/">
                            <img src="/images/icons/preto/facebook_preto.png" alt="icone facebook">
                        </a>
                        <a target="_blank" href="https://www.instagram.com/citybensspvilaclementino/?utm_medium=copy_link">
                            <img src="/images/icons/preto/instagram_preto.png" alt="icone instagram">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/citybens/mycompany/">
                            <img src="/images/icons/preto/linkedin_preto.png" alt="icone linkedin">
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </footer>
</template>

<style scoped>
    #footer-container {
        margin: 9% 0 0 0;
        position: relative;
        display: flex;
        justify-content: center;
        background-color: var(--city-background-2);
    }

    .footer-subcontainer {
        background-color: var(--city-background-2);
        max-width: 1900px;
        width: 100%;
    }

    .footer-section-1 {
        color: #fff;
        font-size: 1.8rem;
        padding: 30px 60px;
        background-color: var(--city-background-5);
        border-top: solid 2px;
        border-color: var(--city-background-green);
    }

    .footer-section-1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    dl dt {
        color: var(--city-background-green);
    }

    .footer-section-2 {
        padding: 20px 60px;
        background-color: var(--city-background-3);
        display: grid;
        grid-template-areas:
            'logo created icons'
        ;
        align-items: center;
    }

    .footer-logotype {
        grid-area: logo;
    }

    .created-by {
        grid-area: created;
        color: #fff;
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
        padding: 8px 5px;
    }

    .footer-socials-container {
        grid-area: icons;
        display: flex;
        justify-content: flex-end;
    }

    .footer-socials a img {
        width: 50px;
        transition: .2s ease-in-out;
        background-color: white;
    }

    .footer-socials a img:hover {
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }

    .footer-socials a:not(:last-child) {
        margin: 0 10px 0 0;
    }

    .created-by p {
        margin: 0;
        text-align: center;
    }

    .footer-section-3 {
        background-color: #101010;
    }

    @media screen and (max-width: 845px) {
        .footer-section-1 {
            display: grid;
            grid-template-areas:
                'content-1 content-2'
                'content-3 content-4'
            ;
        }

        .footer-content-1 {
            grid-area: content-1;
        }

        .footer-content-2 {
            grid-area: content-2;
        }

        .footer-content-3 {
            grid-area: content-3;
        }

        .footer-content-4 {
            grid-area: content-4;
        }

        dl {
            text-align: center;
        }
    }

    @media screen and (max-width: 820px) {
        .footer-section-2 {
            grid-template-areas:
                'logo icons'
            ;
        }
    }

    @media screen and (max-width: 551px) {
        .footer-section-2 {
            padding: 8px 0;
            grid-template-areas:
                'logo'
                'icons'
            ;
            justify-items: center;
        }

        .footer-socials-container {
            margin: 15px 0 0 0;
        }
    }

    @media screen and (max-width: 495px) {
        .footer-section-1 {
            padding: 30px 5%;
        }
    }

    @media screen and (max-width: 400px) {
        .footer-section-1 {
            display: grid;
            grid-template-areas:
                'content-1'
                'content-2'
                'content-3'
                'content-4'
            ;
            justify-content: center;
        }
    }
</style>
