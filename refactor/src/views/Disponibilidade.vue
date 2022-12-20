<script>

</script>

<template>
    <main id="dispoMainContainer">
        <div class="dispoSubcontainer">
            <div class="dispoTextContainer">
                <h1>Dados enviados com sucesso!</h1>
                <p>Seus dados foram enviados com sucesso, aguarde até que um profissional Citybens entre em contato!</p>
            </div>
            <div class="dispoImageContainer">
                <img src="/images/background/disponibilidade/enviado.png" alt="imagem de boneco simbolizando envio de dados">
            </div>
        </div>
    </main>
</template>

<style scoped>
    #dispoMainContainer {
        margin: 130px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dispoSubcontainer {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dispoImageContainer {
        max-width: 600px;
        width: 100%;
    }
    .dispoTextContainer {
        width: 100%;
        text-align: center;
        padding: 0 10px;
    }
    .dispoTextContainer h1 {
        font-size: 4rem;
        color: var(--city-background-green);
    }
    .dispoTextContainer p {
        font-size: 2rem;
        color: var(--city-background-blue);
    }
    .dispoImageContainer img {
        width: 100%;
    }
    @media screen and (max-width: 426px) {
        .dispoTextContainer h1 {
            font-size: 10vw;
        }
        .dispoTextContainer p {
            font-size: 4vw;
        }
    }
</style>
