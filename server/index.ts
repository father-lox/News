import app from "./app";
import root from "./src/route/root";
import {app_config} from "./src/config/config";

const application = app(root, 'api')

application.listen(app_config.port, () => {
    console.log('Server started...')
})