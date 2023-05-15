
import { uploaderAPI } from "../config/apiServices";




export const api = {
    uploader: (body) => {
        return uploaderAPI.post("/dt5fjvwg6/image/upload", body);
      },
};