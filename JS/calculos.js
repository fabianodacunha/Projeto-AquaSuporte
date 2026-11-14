// --- 1. Cálculo do Volume de Água ---
function calcularVolume() {
    // Pega o número que o mano digitou no input (se vier vazio ou letra, assume 0 pra não quebrar a conta)
    const comp = parseFloat(document.getElementById('vol-comp').value) || 0;
    const larg = parseFloat(document.getElementById('vol-larg').value) || 0;
    const alt = parseFloat(document.getElementById('vol-alt').value) || 0;

    // Faz a matemática: C x L x A dividido por 1000 dá os litros cheios (brutos)
    const bruto = (comp * larg * alt) / 1000;
    const util = bruto * 0.85; // desconta 15% que é o espaço vazio do topo do aquário

    // Joga os resultados calculados direto lá no HTML pra atualizar na hora
    document.getElementById('res-vol-bruto').textContent = bruto.toFixed(0) + ' L';
    document.getElementById('res-vol-util').textContent = util.toFixed(0) + ' L';
}

// --- 2. Cálculo da Vazão do Filtro ---
function calcularVazao() {
    const vol = parseFloat(document.getElementById('vaz-vol').value) || 0;
    const trocas = parseFloat(document.getElementById('vaz-trocas').value) || 0;

    // Multiplica o tamanho do aquário pelas vezes que a água tem que rodar por hora
    const vazao = vol * trocas;

    document.getElementById('res-vazao').textContent = vazao.toLocaleString('pt-BR') + ' L/h';
}

// --- 3. Cálculo da Quantidade de Substrato ---
function calcularSubstrato() {
    const comp = parseFloat(document.getElementById('sub-comp').value) || 0;/* Pega o negocio do local do id no caso o comprimento para o sub */
    const larg = parseFloat(document.getElementById('sub-larg').value) || 0;
    const alt = parseFloat(document.getElementById('sub-alt').value) || 0;

    // Calculozinho de volume pra ver quantos quilos de cascalho/areia vai precisar comprar
    const kg = (comp * larg * alt) / 1000;

    document.getElementById('res-sub').textContent = kg.toFixed(1).replace('.', ',') + ' kg';
}

// --- (Event Listeners) ---
// Fica vigiando se o usuário mexeu em qualquer input. Digitou? O bicho já refaz na hora.
document.querySelectorAll('#vol-comp, #vol-larg, #vol-alt').forEach(input => {
    input.addEventListener('input', calcularVolume);
});

document.querySelectorAll('#vaz-vol, #vaz-trocas').forEach(input => {
    input.addEventListener('input', calcularVazao);
});

document.querySelectorAll('#sub-comp, #sub-larg, #sub-alt').forEach(input => {
    input.addEventListener('input', calcularSubstrato);
});