
import tanggalkeluar from "../models/tanggalkeluar.js";


export const getAllkeluar = async (req, res) => {
    try{
        const datakeluar = await tanggalkeluar.findAll();
        res.status(200).json(datakeluar)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAlltanggalkeluar"})
    }
};

export const getkeluarById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const getkeluar = await tanggalkeluar.findByPk(parseInt(id)); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!getkeluar) {
            return res.status(404).json({ message: "tanggal keluar tidak ditemukan" });
        }
        res.status(200).json(getkeluar);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createkeluar = async (req, res) => {
    try{
        const { tanggal  } = req.body;
        const keluar= await tanggalkeluar.create({tanggal});
        res.status(200).json(keluar);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat create tanggal keluar"})
    }
}

export const updatekeluar = async (req, res) => {
    try{
        const { id } = req.params;
        const { tanggal } = req.body;
        const [updated] = await tanggalkeluar.update({ tanggal }, { where: { id } });
        const updatedkeluar = await tanggalkeluar.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "tanggal masuk tidak ter-update"})
        }else{
            res.status(200).json(updatedkeluar);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate tanggal masuk"})
    }
}

export const deletekeluar = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await tanggalkeluar.destroy({where: {id}});
        res.status(200).json(deleted + ` Tanggal keluar ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Tanggal masuk"})
    }
} 

export default tanggalkeluar