import express from "express"
import { createWorker, deleteWorker, getAllWorker, getWorkerById, updateWorker } from "../controller/workercontroller.js"
import { createClient, deleteClient, getAllClient, getClientById, updateClient } from "../controller/clientcontroller.js"
import { createTransaksi, deleteTransaksi, getAllTransaksi, getTransaksiById, updateTransaksi, } from "../controller/transaksicontroller.js"
import { createmasuk, deletemasuk, getAllmasuk, getmasukById, updatemasuk } from "../controller/tanggalmasuk.js"
import { createkeluar, deletekeluar, getAllkeluar, getkeluarById, updatekeluar } from "../controller/tanggalkeluar.js"
const router = express.Router();

// WORKER
router.get("/Worker", getAllWorker)
router.get("/Worker/find/:id", getWorkerById)
router.post("/Worker/create", createWorker)
router.put('/Worker/update/:id', updateWorker);
router.delete("/Worker/delete/:id", deleteWorker)

// TRANSAKSI
router.get("/Transaksi", getAllTransaksi)
router.get("/Transaksi/find/:id", getTransaksiById)
router.post("/Transaksi/create", createTransaksi)
router.put('/Transaksi/update/:id', updateTransaksi);
router.delete("/Transaksi/delete/:id", deleteTransaksi)

// CLIENT
router.get("/Client", getAllClient)
router.get("/Client/find/:id", getClientById)
router.post("/Client/create", createClient)
router.delete("/Client/delete/:id", deleteClient)
router.put("/Client/update/:id",updateClient)

//TANGGAL MASUK
router.get("/Masuk", getAllmasuk)
router.get("/Masuk/find/:id", getmasukById)
router.post("/Masuk/create", createmasuk)
router.delete("/Masuk/delete/:id", deletemasuk)
router.put("/Masuk/update/:id",updatemasuk)

//TANGGAL KELUAR
router.get("/Keluar", getAllkeluar)
router.get("/Keluar/find/:id", getkeluarById)
router.post("/Keluar/create", createkeluar)
router.delete("/Keluar/delete/:id", deletekeluar)
router.put("/Keluar/update/:id",updatekeluar)



export default router;