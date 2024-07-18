import styled from "styled-components";
import ServiceBox from "./ServiceBox";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Fitur Kami</h1>
            <MainTitle className="mb-4">Berikut adalah beberapa mengenai <span className="text-primary"> fitur - fitur kami.</span></MainTitle>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Manajemen Inventaris"
                subtitle="Tambahkan, ubah, dan hapus data barang dengan mudah. Lihat stok barang secara keseluruhan, termasuk jumlah barang, lokasi penyimpanan, dan status ketersediaan."
                borderColor="#FF5733"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="search" // Menggunakan ikon search yang baru
                title="Pelacakan Stok Barang"
                subtitle="Monitor pergerakan barang masuk dan keluar dari gudang dengan pencatatan otomatis, memudahkan pemantauan perubahan stok."
                borderColor="#33FF57"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Laporan dan Analisis"
                subtitle="Akses berbagai laporan kapan saja, seperti laporan stok, penjualan, dan pembelian. Fitur analisis data membantu dalam pengambilan keputusan yang lebih baik."
                borderColor="#3357FF"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="User-Friendly Interface"
                subtitle="Antarmuka yang intuitif memastikan kemudahan penggunaan bagi semua kalangan, termasuk yang tidak memiliki latar belakang teknis."
                borderColor="#FF33A8"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 23%;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 860px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const HeaderInfo = styled.div`
  text-align: center;
`;

const MainTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: #000;
  .text-primary {
    color: #13357B;
  }
`;
