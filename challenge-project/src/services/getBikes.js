import axios from "axios";
import { API_URL_BIKES } from "./settings";

const getBikes = async ({ page = 1, keyword } = {}) => {

  const { data } = await axios.get(
    `${API_URL_BIKES}page=${page}${keyword ? '&query=' + keyword : ''}&per_page=10&location=Berlin&distance=10&stolenness=proximity`
  );
  return data.bikes;
};

export default getBikes