const pariwisata = require(".../model/pariwisata");

const pariwisata= (req, res) => {
    const pariwisata = new pariwisata({
        nama : req.body.nama,
        Tempat :req.body.tempat,
        wisata : req.body.wisata
    });

    pariwisata.save(
        tehn((createdDataPariwisata)=>{
            res.status(201).json({
                message ; 'Data berhasil disimpan',
                pariwisaatID : createdDataPariwisata._id
            });
        })
        catch((err)=>{
            res.status(500).json({
                message : 'internal server eror !',
            });
        });
    )
}