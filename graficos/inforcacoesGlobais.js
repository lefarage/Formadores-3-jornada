const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `As pessoas têm um nítido interesse por esportes, pois mais da metade da população mundial ( <span>${dados.total_pessoas_que_assistem_esportes}</span> das <span>${dados.total_pessoas_mundo}</span>) acompanha esportes pelas telas. No entanto, esse interesse permanece naufragado no sofá, já que <span>${dados.total_pessoas_que_praticam_esportes_regularmente}</span> de fato praticam algum esporte. Somado a isso, a quantidade de tempo despendido na prática é ainda mais baixa, de apenas <span>${dados.tempo_medio_semana_praticando_esportes}</span> horas por semana.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais()