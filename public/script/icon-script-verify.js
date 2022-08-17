const icon = document.querySelector('.escolha-icone');
const text = document.querySelector('.escolha-text');

switch (text.textContent) {
    case "Consórcio de Imóveis":
        icon.textContent = 'home';
        break;
   
    case "Consórcio de Automóveis":
        icon.textContent = "airport_shuttle";
        break;
   
    case "Consórcio de Motos":
        icon.textContent = "motorcycle";
        break;
   
    case "Consórcio de Serviços":
        icon.textContent = "build";
        break;
   
    case "Consórcio de Pesados":
        icon.textContent = "local_shipping";
        break;
   
    case "Consórcio de Eletrônicos":
        icon.textContent = "laptop_windows";
        break;
   
    case "{{text}}":
        icon.textContent = "laptop_windows";
        break;
   
    default:
        console.log(text.textContent);
        break;
}