let element_slct_escolha_de_numeros = document.getElementById(`slct_escolha_de_numeros`);
let element_inpt_traducao = document.getElementById(`inpt_traducao`);
let element_dv_nenhuma_opcao_escolhida = document.getElementById(`dv_nenhuma_opcao_escolhida`);
const numero_em_ingles_um = `one`;
const numero_em_ingles_dois = `two`;
const numero_em_ingles_tres = `three`;
const numero_em_ingles_quatro = `four`;
const numero_em_ingles_cinco = `five`;
const numero_em_portugues_um = `Um`;
const numero_em_portugues_dois = `Dois`;
const numero_em_portugues_tres = `Tres`;
const numero_em_portugues_quatro = `Quatro`;
const numero_em_portugues_cinco = `Cinco`;
const nenhuma_opcao_escolhida = `none`;

function exibir_resultados(){

    switch(true){
      
        case element_slct_escolha_de_numeros.value == numero_em_ingles_um:
            traduzir_numero_um();
            element_dv_nenhuma_opcao_escolhida.innerHTML = ``;
            break;
        case element_slct_escolha_de_numeros.value == numero_em_ingles_dois:
            traduzir_numero_dois();
            element_dv_nenhuma_opcao_escolhida.innerHTML = ``;
            break;
        case element_slct_escolha_de_numeros.value == numero_em_ingles_tres:
            traduzir_numero_tres();
            element_dv_nenhuma_opcao_escolhida.innerHTML = ``;
            break;
        case element_slct_escolha_de_numeros.value == numero_em_ingles_quatro:
            traduzir_numero_quatro();
            element_dv_nenhuma_opcao_escolhida.innerHTML = ``;
            break;
        case element_slct_escolha_de_numeros.value == numero_em_ingles_cinco:
            traduzir_numero_cinco();
            element_dv_nenhuma_opcao_escolhida.innerHTML = ``;
            break;
        default:
            element_dv_nenhuma_opcao_escolhida.innerHTML = `Nenhuma opção escolhida`;
            break;            
    };
};

function traduzir_numero_um(){
    element_inpt_traducao.value = numero_em_portugues_um;
};
function traduzir_numero_dois(){
    element_inpt_traducao.value = numero_em_portugues_dois;
};
function traduzir_numero_tres(){
    element_inpt_traducao.value = numero_em_portugues_tres;
};
function traduzir_numero_quatro(){
    element_inpt_traducao.value = numero_em_portugues_quatro;
};
function traduzir_numero_cinco(){
    element_inpt_traducao.value = numero_em_portugues_cinco;
};