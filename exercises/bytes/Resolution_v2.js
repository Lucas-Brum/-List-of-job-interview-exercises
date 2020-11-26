let quantidadeDeBytes = 2345*1000
const kyloByte = 1024
const megaByte = kyloByte * 1000
const gigaByte = megaByte * 1000
const teraByte = gigaByte * 1000
const petaByte = teraByte * 1000
const exaByte = petaByte * 1000
const zetaByte = exaByte * 1000
const Yottabyte = zetaByte * 1000

let valorFinal = FormataValor(quantidadeDeBytes)





function FormataValor(bytes) {
    if(bytes >= 0 && bytes < kyloByte ) {
        return bytes + 'B'
    }
    else if(bytes >= kyloByte && bytes < megaByte){
        return (bytes / 1024) % 1 === 0 ? (bytes / 1024) : (bytes / 1024).toFixed(2) + 'KB'
    }
    else if(bytes >= megaByte && bytes < gigaByte){
        return ((bytes / kyloByte) / 1024) % 1 === 0 ? ((bytes / kyloByte) / 1024) : ((bytes / kyloByte) / 1024).toFixed(2)+ 'MB'
    }
    else if(bytes >= gigaByte && bytes < teraByte){
        return ((bytes / megaByte) / 1024)% 1 === 0 ? ((bytes / megaByte) / 1024) : ((bytes / megaByte) / 1024).toFixed(2) + 'GB'
    }else if(bytes >= teraByte && bytes < petaByte){
        return ((bytes / gigaByte) / 1024)% 1 === 0 ? ((bytes / gigaByte) / 1024) : ((bytes / gigaByte) / 1024).toFixed(2) + 'TB'
    }
    else if(bytes >= petaByte && bytes < exaByte){
        return ((bytes / teraByte) / 1024)% 1 === 0 ? ((bytes / teraByte) / 1024) : ((bytes / teraByte) / 1024).toFixed(2) + 'PB'
    }
    else if(bytes >= exaByte && bytes < zetaByte){
        return ((bytes / petaByte) / 1024)% 1 === 0 ? ((bytes / petaByte) / 1024) : ((bytes / petaByte) / 1024).toFixed(2) + 'EB'
    }
    else if(bytes >= zetaByte && bytes < Yottabyte){
        return ((bytes / exaByte) / 1024)% 1 === 0 ? ((bytes / exaByte) / 1024) : ((bytes / exaByte) / 1024).toFixed(2) + 'ZB'
    }
    else if(bytes >= Yottabyte && bytes < Yottabyte * 1000){
        return ((bytes / zetaByte) / 1024)% 1 === 0 ? ((bytes / zetaByte) / 1024) : ((bytes / zetaByte) / 1024).toFixed(2) + 'YB'
    }
    else
        return 'Erro: Valor fora de escala'
}

console.log(`${valorFinal}`)
 