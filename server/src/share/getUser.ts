import jwt from "jsonwebtoken";
import {app_config} from "../config/config";

export default function (token: string) {
    return jwt.verify(token, app_config.key)
}