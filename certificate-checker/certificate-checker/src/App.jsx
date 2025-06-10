import React, { useState } from "react";

const mockData = {
  "269/SRI/V/2025": {
    sertifikat: "269/SRI/V/2025",
    reg: "SH.3672/V-K/KHJ STF/2025",
    species: "Burung Kakatua Jambul Kuning",
    asal: "Hasil penangkaran",
    penangkar: "Agus Budi",
    alamat: "Jalan Kamboja II No 3A",
    izin: "SK.146/V-K.11/KKH/2023",
    tglIzin: "5 April 2023",
    tagging: "JD JP 2749",
    bentukTagging: "Ring",
    tglTetas: "5 April 2025",
    bap: "BA.379/V-K.II/HJK I/2025"
  },
  "163/SRI/V/2022": {
    sertifikat: "163/SRI/V/2022",
    reg: "SH.3672/V-K/KHJ STF/2022",
    species: "Burung Jalak Bali",
    asal: "Hasil penangkaran",
    penangkar: "Agung Hapsah",
    alamat: "Jalan Kartini Raya No 12B",
    izin: "SK.173/V-K.11/KKH/2021",
    tglIzin: "28 September 2022",
    tagging: "JD JP 6834",
    bentukTagging: "Ring",
    tglTetas: "14 September 2022",
    bap: "BA.739/V-K.II/HJK I/2022"
  }
};

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = () => {
    setData(mockData[input] || null);
  };

  return (
    <div
      className="min-h-screen bg-repeat bg-white p-6 flex flex-col items-center justify-center space-y-4"
      style={{ backgroundImage: 'url("/Tak_berjudul124_20250610130701.png")' }}
    >
      <div className="w-full max-w-md text-center border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Cek keaslian sertifikatmu disini!</h2>
        <input
          placeholder="Masukkan nomor sertifikat"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-4 w-full border p-2 rounded"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Cek
        </button>
      </div>

      {data ? (
        <div className="w-full max-w-md border rounded p-4 shadow text-left space-y-2 bg-white">
          <p><strong>Nomor Sertifikat:</strong> {data.sertifikat}</p>
          <p><strong>Nomor Reg:</strong> {data.reg}</p>
          <p><strong>{data.species}</strong></p>
          <p>{data.asal}</p>
          <p><strong>Nama Penangkar:</strong> {data.penangkar}</p>
          <p><strong>Alamat:</strong> {data.alamat}</p>
          <p><strong>Izin Penangkaran:</strong> {data.izin}</p>
          <p><strong>Tanggal:</strong> {data.tglIzin}</p>
          <p><strong>Nomor Tagging:</strong> {data.tagging}</p>
          <p><strong>Bentuk Tagging:</strong> {data.bentukTagging}</p>
          <p><strong>Tanggal Tetas:</strong> {data.tglTetas}</p>
          <p><strong>Nomor & Tanggal BAP:</strong> {data.bap}</p>
        </div>
      ) : input !== "" ? (
        <div className="w-full max-w-md border rounded p-4 text-center bg-white shadow">
          <p>Data tidak ditemukan</p>
        </div>
      ) : null}

      <p className="mt-6 font-bold">@hewanbersertifikat</p>
    </div>
  );
}
