<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default({
    mounted() {
        this.winScroll();
        this.menuToggle();
    },
    methods: {
        winScroll() {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("header-container").style.top = "0";
                } else {
                    document.getElementById("header-container").style.top = "-90px";
                }
                prevScrollpos = currentScrollPos;
            };
        },
        menuToggle() {
            const menuSection = document.querySelector(".header-navigation");
            const menuToggle = menuSection.querySelector(".menu-toggle");
            let show = true;

            menuToggle.addEventListener("click", () => {
                document.body.style.overflow = show ? "hidden" : "initial";

                menuSection.classList.toggle("on", show);
                show = !show;
            });
        }
    }
});
</script>

<template>
    <header id="header-container">
        <div class="header-subcontainer">
            <div class="header-logo">
                <a href="/">
                    <img src="/images/icons/citybens/logotipo-branco.png" alt="Logotipo cabeçalho">
                </a>
            </div>
            <nav class="header-navigation">
                <div class="menu-toggle">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div>
                <ul>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="/filiais">Filiais</a></li>
                </ul>
                <div class="navigation-button">
                    <a href="/consorcio">
                        <button>Simular consórcio</button>
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    #header-container {
        display: flex;
        justify-content: center;
        width: 100%;
        position: fixed;
        z-index: 1;
        transition: .3s ease-in-out;
        top: 0;
        background-color: var(--city-background-5);
        padding: 0 0 10px 0;
    }

    .header-subcontainer {
        display: flex;
        align-items: center;
        width: 85%;
        padding: 10px 0 0 0;
    }

    .header-logo a img{
        width: 130px;
    }

    .header-navigation {
        position: relative;
        width: 100%;
        margin: 0 0 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 8px 0;
    }

    .header-navigation ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .header-navigation ul li:not(:last-child) {
        margin: 0 30px 0 0;
    }

    .header-navigation ul li a {
        font-size: 1.6rem;
        color: black;
        text-transform: uppercase;
        color: #fff;
        transition: 0.3s ease-out;
    }

    .header-navigation ul li a:hover{
        color: var(--city-background-green);
        transition: ease-in 0.2s;
    }

    .header-navigation ul li:hover{
        transform: translateY(-3px);
        transition: ease-in 0.2s;
    }

    .header-navigation ul::after {
        content: " ";
        width: 100%;
        height: 1px;
        background-color: grey;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .navigation-button button {
        border: 0;
        padding: 0 8px;
        width: auto;
        height: 30px;
        background-color: var(--city-background-blue);
        border-radius: 20px;
        color: #fff;
        font-size: 1.2rem;
    }

    .navigation-button button:hover {
        background-color: white;
        color: black;
        transition: background-color 0.3s ease;
    }

    .menu-toggle {
        display: none;
        color: #fff;
    }


    @media screen and (max-width: 710px) {
        .header-navigation > ul, .navigation-button {
            display: none;
        }

        .header-navigation {
            justify-content: flex-end;
        }

        .one,
        .two,
        .three {
            background-color: #fff;
            width: 100%;
            height: 5px;
            margin: 6px auto;
            transition-duration: 0.3s;
        }

        .menu-toggle {
            display: block;
            width: 40px;
            height: 30px;
        }

        .header-navigation.on {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #000;
            width: 100vw;
            height: 100vh;
            z-index: 10;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-navigation.on
        .menu-toggle {
            position: absolute;
            right: 7.5vw;
            top: 23px;
        }

        .header-navigation.on
        .menu-toggle
        .one {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .header-navigation.on
        .menu-toggle
        .two {
            opacity: 0;
        }

        .header-navigation.on
        .menu-toggle
        .three {
            transform: rotate(-45deg) translate(8px, -9px);
        }

        .header-navigation.on ul {
            text-align: center;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .header-navigation.on ul li {
            margin: 0;
        }

        .header-navigation.on ul li a {
            transition-duration: 0.5s;
            font-size: 2.5rem;
            line-height: 6rem;
        }
    }
</style>
