class Transaksi{
    constructor(id, toko, pembeli){
        this.id = id;
        this.toko = toko;
        this.pembeli = pembeli;
    }

    getToko(){
        return this.toko;
    }
    getPembeli(){
        this.pembeli;
    }

    setToko(toko){
        this.toko = toko;
    }
    setPembeli(pembeli){
        this.pembeli = pembeli;
    }
}