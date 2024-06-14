import { usePemilikPageId } from "../../hooks/pemilik/usePemilikPageId";
import { HalamanUtama, ManajemenBahan, LaporanBahan } from "./ContentPages";
 const Contents = () => {
  const { pemilikPageId } = usePemilikPageId();

  const PemilikContentPages = () => {
    switch (pemilikPageId) {
      case 1:
        return <HalamanUtama />;
      case 2:
        return <ManajemenBahan />;
      case 3:
        return <LaporanBahan />;
        default:
          return <HalamanUtama />;
    }
  };

  return (
    <div className="p-5">
      <PemilikContentPages />
    </div>
  );
};
export default Contents;