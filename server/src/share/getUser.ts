import jwt from "jsonwebtoken";
import {app_config} from "../config/config";

export default function (header: string) {
    let payload = header.split(' ')[1]
    return jwt.verify(payload, app_config.key)
}