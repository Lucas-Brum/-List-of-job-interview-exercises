let quantidadeDeBytes = 1000
const kyloByte = 1024
const megaByte = kyloByte * 1000
const gigaByte = megaByte * 1000
const teraByte = gigaByte * 1000
const petaByte = teraByte * 1000
const exaByte = petaByte * 1000
const zetaByte = exaByte * 1000
const Yottabyte = zetaByte * 1000
let legenda = determinaLegenda(quantidadeDeBytes)
let valorFinal = ajustarValor(quantidadeDeBytes,legenda)




function determinaLegenda(bytes) {
    if(bytes >= 0 && bytes < kyloByte ) {
        return 'B'
    }
    else if(bytes >= kyloByte && bytes < megaByte){
        return 'KB'
    }
    else if(bytes >= megaByte && bytes < gigaByte){
        return 'MB'
    }
    else if(bytes >= gigaByte && bytes < teraByte){
        return 'GB'
    }else if(bytes >= teraByte && bytes < petaByte){
        return 'TB'
    }
    else if(bytes >= petaByte && bytes < exaByte){
        return 'PB'
    }
    else if(bytes >= exaByte && bytes < zetaByte){
        return 'EB'
    }
    else if(bytes >= zetaByte && bytes < Yottabyte){
        return 'ZB'
    }
    else if(bytes >= Yottabyte && bytes < Yottabyte * 1000){
        return 'YB'
    }
    else
        return 'Valor fora de escala'
}


function ajustarValor(bytes,legenda) {
    switch (legenda) {
        case 'B':
            return bytes
        case 'KB':
            return bytes / 1024
        case 'MB':
            return ((bytes / kyloByte) / 1024)
        case 'GB':
            return ((bytes / megaByte) / 1024)
        case 'TB':
            return ((bytes / gigaByte) / 1024)
        case 'PB':
            return ((bytes / teraByte) / 1024)
        case 'EB':
            return ((bytes / petaByte) / 1024)
        case 'ZB':
            return ((bytes / exaByte) / 1024)
        case 'YB':
            return ((bytes / zetaByte) / 1024)
        default:
            return 'Erro:'

    }
        
}
console.log(`${valorFinal} ${legenda}`)
 