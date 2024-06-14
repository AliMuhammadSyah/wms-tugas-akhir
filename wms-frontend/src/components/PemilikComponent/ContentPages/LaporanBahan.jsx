import React, { useRef, useState } from 'react';
import { PrintRounded } from "@mui/icons-material";
import ReactToPrint from 'react-to-print';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LaporanBahan = () => {
  const [selectedOption, setSelectedOption] = useState("bahanMasuk");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dataBahanMasuk = [
    { no: 1, tglMasuk: '01/06/2024', jenisBahan: 'Bahan A', namaBahan: 'Nama A', jumlah: 10, satuan: 'kg', keterangan: 'Keterangan A' },
    { no: 2, tglMasuk: '03/06/2024', jenisBahan: 'Bahan A', namaBahan: 'Nama A', jumlah: 10, satuan: 'kg', keterangan: 'Keterangan A' },
  ];

  const dataBahanKeluar = [
    { no: 1, tglKeluar: '01/06/2024', jenisBahan: 'Bahan X', namaBahan: 'Nama X', jumlah: 5, satuan: 'pcs', keterangan: 'Keterangan X' },
    { no: 2, tglKeluar: '02/06/2024', jenisBahan: 'Bahan X', namaBahan: 'Nama X', jumlah: 5, satuan: 'pcs', keterangan: 'Keterangan X' },
  ];

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  const filterDataByDateRange = (data, startDate, endDate) => {
    return data.filter(item => {
      const date = parseDate(selectedOption === "bahanMasuk" ? item.tglMasuk : item.tglKeluar);
      return date >= startDate && date <= endDate;
    });
  };

  const displayedData = selectedOption === "bahanMasuk" ? filterDataByDateRange(dataBahanMasuk, startDate, endDate) : filterDataByDateRange(dataBahanKeluar, startDate, endDate);

  const componentRef = useRef();

  return (
    <div className="container">
      <style>
        {`
          @media print {
            .print-hidden {
              display: none;
            }
          }
        `}
      </style>
      <h1 className="text-2xl mb-6 font-semibold tracking-wider text-left">Laporan Data Bahan</h1>
      <div className="flex justify-left">
        <form className="w-full max-w-md">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="laporanType" className="text-gray-500 font-bold mb-1">
                Pilih Laporan:
              </label>
              <select
                id="laporanType"
                className="form-select block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="bahanMasuk">Laporan Bahan Masuk</option>
                <option value="bahanKeluar">Laporan Bahan Keluar</option>
              </select>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="startDate" className="text-gray-500 font-bold mb-1">
                Tanggal Mulai:
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-input block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate" className="text-gray-500 font-bold mb-1">
                Tanggal Akhir:
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                className="form-input block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
        </form>
      </div>

      {displayedData && displayedData.length > 0 && (
        <div className="mt-8" ref={componentRef}>
          <h2 className="text-xl mb-4 ml-3 font-semibold">{selectedOption === "bahanMasuk" ? "Laporan Bahan Masuk" : "Laporan Bahan Keluar"}</h2>
          <div className="flex justify-end items-center mb-4 space-x-2 print-hidden">
            <ReactToPrint
              trigger={() => (
                <button className="py-2 px-4 flex justify-between items-center bg-blue-600 hover:bg-blue-800 transition-colors duration-150 rounded-sm text-white leading-none">
                  <PrintRounded fontSize="small" /> <p className="ml-2">Cetak</p>
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
          <table className="table-auto w-full border-collapse border border-gray-800 bg-gray-200">
            <thead>
              <tr className="bg-gray-400">
                <th className="border border-gray-600 px-4 py-2 text-center">No.</th>
                <th className="border border-gray-600 px-4 py-2 text-center">{selectedOption === "bahanMasuk" ? "Tgl. Masuk" : "Tgl. Keluar"}</th>
                <th className="border border-gray-600 px-4 py-2 text-center">Jenis Bahan</th>
                <th className="border border-gray-600 px-4 py-2 text-center">Nama Bahan</th>
                <th className="border border-gray-600 px-4 py-2 text-center">Jumlah</th>
                <th className="border border-gray-600 px-4 py-2 text-center">Satuan</th>
                <th className="border border-gray-600 px-4 py-2 text-center">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.no}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{selectedOption === "bahanMasuk" ? item.tglMasuk : item.tglKeluar}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.jenisBahan}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.namaBahan}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.jumlah}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.satuan}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{item.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(!displayedData || displayedData.length === 0) && (
        <div className="mt-8">
          <p className="text-red-500">Tidak ada data yang sesuai dengan filter yang diberikan.</p>
        </div>
      )}
    </div>
  );
};

export default LaporanBahan;
