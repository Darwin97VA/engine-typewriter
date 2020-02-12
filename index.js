var EventEmitter = (global 
                        ? require('events').EventEmitter 
                        : require('./EventEmitter') )

class TypeWrite {
    constructor(config){
        const {data, frecuency, listeners} = config
        this.data = data
        this.frecuency = frecuency
        this.listeners = []
        
        this.evento = new EventEmitter()
        this._eventname = 'typeWrite'
        
        this.enviar = ''
        this.item = this.data.length-1
        this.lugar = this.data[this.data.length-1].length - 1
        
        this.add(listeners)
        this.start()
    }
    add(listeners){
        if(listeners){
            this.listeners.concat(listeners)
            if( !Array.isArray(listeners) ){
                this.evento.on(this._eventname, listeners)
            } else if(Array.isArray(listeners)) {
                listeners.forEach(listener=>{
                    this.evento.on(this._eventname, listener)
                })
            }
        }
    }
    emit(){
        if(this.lugar === this.data[this.item].length - 1){
            this.lugar = 0
            if(this.item === this.data.length - 1){
                this.item = 0
            }else this.item ++
            this.enviar = this.data[this.item][this.lugar]
        }else{
            this.lugar++
            this.enviar += this.data[this.item][this.lugar]
        }
        this.evento.emit(this._eventname, this.enviar)
    }
    start(){
        this.interval && clearInterval(this.interval)
        this.interval = setInterval(()=>{
            this.emit()
        },this.frecuency)
    }
    remove(listener){
        this.evento.removeListener(this._eventname, listener)
        this.listeners.splice(
            this.listeners.indexOf(listener), 1 )
    }
    removeAll(){
        this.evento.removeAllListeners(this._eventname)
        this.listeners = []
    }
}


module.exports = TypeWrite