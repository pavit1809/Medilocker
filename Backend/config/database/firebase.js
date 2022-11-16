import {Storage} from "@google-cloud/storage";
import path from "path";

import { dirname} from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const storage = new Storage({
  projectId: process.env.FIREBASE_PROJECT_ID,
  keyFilename: path.resolve(__dirname, "./tarp-project-vit-firebase-adminsdk-mxd68-6f6f64dadc.json")
});


const bucket = storage.bucket(process.env.STORAGE_BUCKET);

export {bucket};
