import axios from "axios";

const fetcher = (url: any) => axios.get(url).then((response) => response.data);

export default fetcher;
