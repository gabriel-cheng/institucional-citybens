<script>
const iframe = document.querySelector("iframe");

function mudarMapa(cidade) {
    switch(cidade) {
    case "aracatuba":
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.588740276923!2d-50.44059878560316!3d-21.208490284807247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949643e4529b7c5d%3A0xbbe96f8c98663690!2sR.%20Luiz%20Pereira%20Barreto%2C%20191%20-%20Vila%20Bandeirantes%2C%20Ara%C3%A7atuba%20-%20SP%2C%2016010-320!5e0!3m2!1spt-BR!2sbr!4v1663016419525!5m2!1spt-BR!2sbr";
        break;
    case "rioDeJaneiro":
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.540715786362!2d-50.45139808560413!3d-21.170668583547588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496443851fbc077%3A0x232cf492a93ee69c!2sR.%20Ilmer%20Borghi%2C%2081%20-%20Conj.%20Hab.%20Etheocle%20Turrini%2C%20Ara%C3%A7atuba%20-%20SP%2C%2016057-670!5e0!3m2!1spt-BR!2sbr!4v1663087848097!5m2!1spt-BR!2sbr";
        break;
    case "rioPreto":
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.124359554569!2d-49.41560790518554!3d-20.86703717618137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb3fe8d905535%3A0x16616f75c8e989d8!2sIguatemi%20Business!5e0!3m2!1spt-BR!2sbr!4v1663097785494!5m2!1spt-BR!2sbr";
        break;
    }
}
</script>


<template>
    <main id="filiais-main-container">
        <div class="filiais-navbar">
            <nav>
                <button onclick="mudarMapa('aracatuba');" id="buttonMap">Araçatuba</button>
                <button onclick="mudarMapa('rioDeJaneiro');" id="buttonMap">Rio de Janeiro</button>
                <button onclick="mudarMapa('rioPreto');" id="buttonMap">São J. do Rio Preto</button>
            </nav>
        </div>
        <div class="filiais-map">
            <iframe id="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.588740276923!2d-50.44059878560316!3d-21.208490284807247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949643e4529b7c5d%3A0xbbe96f8c98663690!2sR.%20Luiz%20Pereira%20Barreto%2C%20191%20-%20Vila%20Bandeirantes%2C%20Ara%C3%A7atuba%20-%20SP%2C%2016010-320!5e0!3m2!1spt-BR!2sbr!4v1663016419525!5m2!1spt-BR!2sbr" width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </main>
</template>

<style>
    #filiais-main-container {
        margin: 110px 0 0 0;
    }

    .filiais-navbar {
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow: auto;
    }

    .filiais-navbar nav {
        display: flex;
        justify-content: center;
        margin: 0 5px;
        min-width: 414px;
    }

    #buttonMap {
        border: 0;
        outline: 0;
        background-color: var(--city-background-5);
        color: #fff;
        cursor: pointer;
        font-size: 1.3rem;
        position: relative;
        transition: .1s ease-in-out;
        display: flex;
        justify-content: center;
        padding: 0 0 10px 0;
    }

    #buttonMap::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: var(--city-background-4);
        position: absolute;
        bottom: 0;
    }

    #buttonMap:hover::after {
        width: 70%;
        transition: .2s ease-in-out;
    }

    #buttonMap:not(:last-child) {
        margin: 0 60px 0 0;
    }

    .filiais-map {
        margin: 20px 5px 0 5px;
    }
</style>
