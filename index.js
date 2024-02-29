console.log(calcPartidasRankeadas(150, 80));

function calcPartidasRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    if (saldoVitorias <= 10) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Ferro`;
    } else if (saldoVitorias > 10 && saldoVitorias <= 20 ) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Bronze`;
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Prata`;
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Ouro`;
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Diamante`;
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de Lendário`;
    } else {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de imortal`;
    }
}
