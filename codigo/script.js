const slidesConteiner = document.querySelector(".slidesConteiner");
const slideImag = document.querySelectorAll(".slideImagem");
const btAnt = document.querySelector(".btAnterior");
const btProx = document.querySelector(".btProximo");
const pontoNav = document.querySelector(".pontosNavigation");

let numeroDeImagens = slideImag.length;
let slideLargura = slideImag[0].clientWidth;
let slideAtual = 0;

//Configurar o controle do Slider. Função de inicio da página
function inic(){

    slideImag.forEach((imag, ind) =>{
        imag.style.left = ind * 100 + "%";
    });

    slideImag[0].classList.add("active");

    criarNavigationPontos();

}

inic();

//criando pontos de navegação
function criarNavigationPontos(){
    for(let i = 0; i < numeroDeImagens; i++){
        const ponto = document.createElement("div");
        ponto.classList.add("unicoPonto");
        pontoNav.appendChild(ponto);

        //adicionara a navegação por meio dos pontos
        ponto.addEventListener("click", () => {
            irParaSlide(i);
        });
    } 
    //definir o primeiro ponto como ativo
    pontoNav.children[0].classList.add("active");
}

//Botão Proximo
btProx.addEventListener("click", () =>{
    if(slideAtual >= numeroDeImagens - 1){
        irParaSlide(0);
        return;
    }
    slideAtual++;
    irParaSlide(slideAtual);
});

//Botão Anterior
btAnt.addEventListener("click", () =>{
    if(slideAtual <= 0){
        irParaSlide(numeroDeImagens - 1);
        return;
    }
    slideAtual--;
    irParaSlide(slideAtual);
});

//Função para ir para outro slide
function irParaSlide(numeroDeImagens){
    slidesConteiner.style.transform = "translateX(-" + slideLargura * numeroDeImagens + "px)";

    slideAtual = numeroDeImagens;

    selecionarClassActive();
}
//Selecionar Classe Ativa do Ponto
function selecionarClassActive(){
    //selecionar a classe ativa da imagem do slide
    let atualActive = document.querySelector(".slideImagem.active");
    atualActive.classList.remove("active");
    slideImag[slideAtual].classList.add("active");

    //selecionar a classe ativa dos pontos de navegação
    let atualPonto = document.querySelector(".unicoPonto.active");
    atualPonto.classList.remove("active");
    pontoNav.children[slideAtual].classList.add("active");
}