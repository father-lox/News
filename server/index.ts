import app from "./app";
import root from "./src/route/root";

const application = app(root, 'api')

application.listen(3000, () => {
    console.log('Server started...')
})