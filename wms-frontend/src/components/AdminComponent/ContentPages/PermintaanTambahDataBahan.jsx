import React from 'react';

const PermintaanTambahDataBahan = () => {
  
  const data = [
    { id: 1, nama: 'Contoh1', jenis: 'Jenis1', namaBahan: 'Bahan1', satuan: 'Satuan1' },
    { id: 1, nama: 'Contoh1', jenis: 'Jenis1', namaBahan: 'Bahan1', satuan: 'Satuan1' },
   
  ];

  return (
    <div className="container">
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">Permintaan Tambah Data Bahan</h1>
      <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-200">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-600 px-3 py-1 text-center">No</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Nama Pemilik</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Jenis Bahan</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Nama Bahan</th>
            <th className="border border-gray-600 px-3 py-1 text-center">Satuan Bahan</th>
            <th colSpan={2} className="border border-gray-600 px-3 py-1 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-600 px-3 py-1 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.nama}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.jenis}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.namaBahan}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">{item.satuan}</td>
              <td className="border border-gray-600 px-3 py-1 text-center">
                <button className="py-2 px-4 bg-blue-400 hover:bg-blue-500 transition-colors duration-150 w-full rounded-md text-sm text-white leading-none">
                  Terima
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermintaanTambahDataBahan;
