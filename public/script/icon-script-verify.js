const icon = document.querySelector(".escolha-icone");
const text = document.querySelector(".escolha-text");

switch (text.textContent) {
case "Consórcio de Imóveis":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Imóveis</span>";
    icon.textContent = "home";
    break;

case "Consórcio de Automóveis":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Automóveis</span>";
    icon.textContent = "airport_shuttle";
    break;

case "Consórcio de Motos":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Motos</span>";
    icon.textContent = "motorcycle";
    break;

case "Consórcio de Serviços":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Serviços</span>";
    icon.textContent = "build";
    break;

case "Consórcio de Pesados":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Pesados</span>";
    icon.textContent = "local_shipping";
    break;

case "Consórcio de Eletrônicos":
    text.innerHTML =
        "Consórcio de <span class=\"last_word_format\">Eletrônicos</span>";
    icon.textContent = "laptop_windows";
    break;

default:
    console.log(text.textContent);
    break;
}

