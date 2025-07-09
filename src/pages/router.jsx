import { Home} from "./Home";
import { Doprava } from "./Doprava";
import { Ubytovani } from "./Ubytovani";
import { Itinerar } from "./Itinerar";
import { Slovnicek } from "./Slovnicek";

export const routes = {
    "/": Home,
    "/Doprava": Doprava,
    "/Ubytovani": Ubytovani,
    "/Itinerar": Itinerar,
    "/Slovnicek": Slovnicek,
};

export const resolveRoute = (path) => {
    return routes[path] || (() => <p>Stránka nebyla nalezena.</p>);
};
