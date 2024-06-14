import { api } from "../../utility/api";
import { useAlert } from "../useAlert";

export const useAddPemilik = () => {
  const { openAlert } = useAlert();

  const register = async (payloads) => {
    try {
      const data = await api.post("/register", {
        role_id: payloads?.role_id,
        nama: payloads?.nama,
        username: payloads?.username,
        password: payloads?.password,
        no_hp: payloads?.no_hp,
        alamat: payloads?.alamat,
      });

      if (data.status === 201) {
        openAlert({
          type: "success",
          title: "Berhasil!",
          message: "Berhasil menambah pemilik!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register
  }
};
