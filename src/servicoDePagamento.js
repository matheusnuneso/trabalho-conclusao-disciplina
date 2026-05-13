export default class ServicoDePagamento {

    #pagamentos

    constructor() {
        this.#pagamentos = []
    }

    pagar(codigoBarras, empresa, valor) {
        const categoria = this.definirCategoria(valor)

        const pagamento = {
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        }

        this.#pagamentos.push({pagamento})

        return pagamento
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1)
    }

    definirCategoria (valor) {
        if (valor > 100) {
            return 'cara'
        } else {
            return 'padrão'
        }
    }

}