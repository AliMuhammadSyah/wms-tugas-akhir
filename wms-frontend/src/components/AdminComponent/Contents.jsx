import { useAdminPageId } from "../../hooks/admin/useAdminPageId";
import { HalamanUtama, ManajemenPemilik, ManajemenDataBahan, PermintaanTambahDataBahan } from "./ContentPages";

const Contents = () => {
  const { adminPageId } = useAdminPageId();

  const AdminContentPages = () => {
    switch (adminPageId) {
      case 1:
        return <HalamanUtama />;
      case 2:
        return <ManajemenPemilik />;
      case 3:
        return <ManajemenDataBahan />;
      case 4:
        return <PermintaanTambahDataBahan />;
      default:
        return <HalamanUtama />;
    }
  };

  return (
    <div className="p-5">
      <AdminContentPages />
    </div>
  );
};

export default Contents;
