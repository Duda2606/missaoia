const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os lugares que contêm maior concentração de lixo nos oceanos?",
        alternativas: [
            {
                texto: "Ilha do Pacifico",
                afirmacao: "Você escolheu esta opção."
            },
            {
                texto: "Jardim Botanico",
                afirmacao: "Você escolheu esta opção"
            }
        ]
    },
    {
        enunciado: "A contaminação da água é responsável pela morte de várias pessoas anualmente, principalmente crianças menores de cinco anos de idade. Analise as alternativas a seguir e marque a única que não se refere a uma medida que pode reduzir as mortes por causa de ingestão de água contaminada.",
        alternativas: [
            {
                texto: "Sempre que possível, aproveitar a água da chuva para fins potáveis",
                afirmacao: "Você escolhe está alternativa"
            },
            {
                texto: "Garantir o fornecimento de água tratada",
                afirmacao: "Você escolheu está alternativa"
            }
        ]
    },
    {
        enunciado: "O lançamento de esgoto na água é prejudicial porque causa o aumento de nutrientes e do número de algas. O aumento desses organismos forma uma camada que prejudica a entrada de luz solar e, consequentemente, afeta o processo de fotossíntese. Essa ocorrência, que desencadeia a morte de vários organismos, é conhecida como:"
        alternativas: [
            {
                texto: "Reprodução",
                afirmacao: "Parabéns"
            },
            {
                texto: "Eutrofização",
                afirmacao: "Parabéns"
            }
        ]
    },
    {
        enunciado: "O derramamento de petróleo no mar é um problema ambiental grave que merece atenção. Um dos piores vazamentos de petróleo que já ocorreram no planeta foi no Golfo do México, em 2010, onde cerca de cinco milhões de barris de petróleo foram lançados nas águas. Baseando-se nos seus conhecimentos sobre o tema, marque a única alternativa que não indica uma consequência da poluição no mar por petróleo.",
        alternativas: [
            {
                texto: "Diminuição da pesca na região",
                afirmacao: "Acertou"
            },
            {
                texto: "Aumento da taxa de fotossíntese das algas",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Existem diversos tipos diferentes de poluição, sendo todos prejudiciais ao meio ambiente. Algumas poluições, no entanto, são pouco lembradas, como é o caso da poluição desencadeada quando o volume de determinado som é superior àqueles considerados normais. Analise as alternativas abaixo e marque o nome desse tipo de poluição:"
",
        alternativas: [
            {
                texto: "Sonora",
                afirmacao: "Você chegou ao final"
            },
            {
                texto: "Visual",
                afirmacao: "Você chegou ao final"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
