import axios from "axios";
// https://uresumes-proxy.herokuapp.com/http://umresumes-api.vercel.app/api/v1
//https://umresumes-api.vercel.app/api/v1
export default axios.create({
  baseURL:
    "https://uresumes-proxy.herokuapp.com/http://umresumes-api.vercel.app/api/v1",
});
