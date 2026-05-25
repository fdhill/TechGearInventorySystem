class Pangan extends Produk{
    constructor(nama, harga, stok, experid){
        super(nama, harga, stok)
        this.experid = experid;
    }

    getExpired(){
        return this.experid;
    }

    setExperid(experid){
        this.experid = experid;
    }
}