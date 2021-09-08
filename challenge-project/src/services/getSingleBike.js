import axios from "axios";
import { API_URL_REPORT } from "./settings";

const getSingleBike = async ({id}) => {
    const { data } = await axios.get(
        API_URL_REPORT+id
    );
    return data.bike;
};

export default getSingleBike