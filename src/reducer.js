export const ADICIONAR_FRASE = "ADICIONAR_FRASE";
export const REMOVER_FRASE = "REMOVER_FRASE";

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_FRASE:
            if (acao.frase.length < 20) {
                alert("Ops... A frase precisa ter, pelo menos, 20 caracteres!");
                return estado;
            }
        
            if (estado.includes(acao.frase)) {
                alert("Ops... Não pode haver frases duplicadas!");
                return estado;
            }

            return [...estado, acao.frase];
        case REMOVER_FRASE:
            return estado.filter((frase) => frase !== acao.frase);
        default:
            return estado;
    }
}

export default reducer;