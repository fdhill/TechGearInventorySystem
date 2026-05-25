class Produk{
    constructor(id, toko, nama, harga, stok){
        thjis.id = id;
        this.toko = toko;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    getNama(){
        return this.nama;
    }
    getHarga(){
        return this.harga;
    }
    getStok(){
        return this.stok;
    }

    setNama(nama){
        this.nama = nama;
    }
    setStok(stok){
        this.stok = stok;
    }
    setHarga(harga){
        this.harga = harga;
    }
}