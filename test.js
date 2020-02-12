const MaquinaDeEscribir = require('./index')

const data = [
    'Darwin',
    'Hola mundo !',
    'xd'
]
const listeners = [console.log]

const maquina = new MaquinaDeEscribir({data,frecuency: 500,listeners})

const xdddd = () => console.log('xddddd : ', )
setTimeout(()=>maquina.add(()=>console.log('bla bla : ', )),2000)
setTimeout(()=>maquina.add(xdddd),3000)

setTimeout(()=>{
    maquina.remove(xdddd)
}, 6000)

setTimeout(()=>maquina.removeAll(),8000)