const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = (data) => axios.get(getUrl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getDataAtual = () => {
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1 //more 1 because this function return between 0 and 11
    const ano = data.getFullYear()
    return `${mes}-${dia}-${ano}`
}

const getCotacao = async () => {
    try {
        const res = await getCotacaoAPI(getDataAtual())
        const cotacao = extractCotacao(res)
        return cotacao
    }
    catch (err) {
        return ''
    }
}
//axios.get(url).then( res => console.log(res.data.value[0].cotacaoVenda))

module.exports = {
    getCotacao,
    getCotacaoAPI,
    extractCotacao
}