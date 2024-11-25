import { getCSS } from "./common.js"

async function RedesfavoritasMundo() {
    const url = ""
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)
    const data = [ 
        {
            values: valores,
            lables: redes, 
            type: 'pie',
            textinfo: 'label+percent' }  ]
            const layout = {
                plot_bgcolor: getCSS('--bg-color'),
                paper_bgcoor: getCSS('--bg-color'),
                title: {
                    text:'Redes sociais que os usuários mais gostam',
                    x: 0,
                    font: {
                        color: getCSS('--primary-color'),
                        family: getCSS('--font'),
                        size: 30 }
                },
                legend: {
                    font: {
                        color: getCSS('--primary-color'),
                        size: 16
                    }
                }
            }
    
            const grafico = document.createElement('div')
            grafico.className = 'grafico'
            document.getElementById('graficos-container').appendChild(grafico)
            Plotyl.newPlot(graficos, data, layout)
        }
        RedesfavoritasMundo{k}