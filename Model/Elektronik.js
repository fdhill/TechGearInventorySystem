class Elektronik extends Produk{
    constructor(nama, harga, stok, garansiBulan) {
        super(nama, harga, stok);
        this.garansiBulan = garansiBulan;
    }

    getGaransiBulan(){
        return this.garansiBulan;
    }
    
    setGaransiBulan(garansiBulan){
        this.garansiBulan = garansiBulan;
    }
}