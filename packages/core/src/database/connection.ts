import mongoose from "mongoose";
import { ENVIRONTMENT } from "../config";

mongoose.connect(ENVIRONTMENT.DATABASE.URI!);
