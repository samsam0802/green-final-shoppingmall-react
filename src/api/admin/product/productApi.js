import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";
const prefix = `${API_SERVER_HOST}/api/product/add`;

export const postAdd = async (product) => {
  console.log(product);
  //   const header = { headers: { "Content-Type": "multipart/form-data" } };
  //   const res = await axios.post(`${prefix}/`, product, header);
  //   console.log("basckend 로 부터 온 데이터 ", res);
  //   return res.data;
  return;
};
