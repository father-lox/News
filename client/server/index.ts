import route from "./src/route/root";

import application from "./application";
const app = application(route)


app.listen(3000, () => console.log('Server started...'))
