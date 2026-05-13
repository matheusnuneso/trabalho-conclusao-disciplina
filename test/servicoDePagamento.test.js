import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('ServicoDePagamento', () => {

    let servicoDePagamento;

    beforeEach(() => {
        servicoDePagamento = new ServicoDePagamento();
    })

    it('deve definir categoria como "cara" para pagamentos acima de R$100,00', () => {

        const pg = {
            codigoBarras: '0987-7656-3475',
            empresa: 'Matheus',
            valor: 101
        }

        const pagamentoRealizado = servicoDePagamento.pagar(pg.codigoBarras, pg.empresa, pg.valor)

        assert.equal(pagamentoRealizado.categoria, 'cara')
    })

    it('deve definir categoria como "padrão" para pagamentos abaixo de R$100,00', () => {

        const pg = {
            codigoBarras: '0987-7656-3475',
            empresa: 'Matheus',
            valor: 99
        }

        const pagamentoRealizado = servicoDePagamento.pagar(pg.codigoBarras, pg.empresa, pg.valor)

        assert.equal(pagamentoRealizado.categoria, 'padrão')
    })

    it('deve definir categoria como "padrão" para pagamentos igual à R$100,00', () => {

        const pg = {
            codigoBarras: '0987-7656-3475',
            empresa: 'Matheus',
            valor: 100
        }

        const pagamentoRealizado = servicoDePagamento.pagar(pg.codigoBarras, pg.empresa, pg.valor)

        assert.equal(pagamentoRealizado.categoria, 'padrão')
    })

    it('Consultar último pagamento feito', () => {

        const pg = {
            codigoBarras: '0987-7656-3475',
            empresa: 'Matheus',
            valor: 99,
            categoria: 'padrão'
        }

        const pgRealizado = servicoDePagamento.pagar(pg.codigoBarras, pg.empresa, pg.valor)

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento().pagamento

        assert.deepEqual(ultimoPagamento, pg)
    })

})