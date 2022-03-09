import application from "./app"
import root from "./src/core/router/root";
import config from "./src/config/config";

const app = application(root)

app.listen(config.PORT, () => {
    console.log(`Server started at ${config.PORT}...`)
})