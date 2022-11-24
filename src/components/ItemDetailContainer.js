import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import {} from "../"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(item[0]), 2000)).then(
            (data) => setItem(data)
    );
    }, []);

    if(!item){
        return <p>Cargando...</p>
    }

    return <ItemDetail item={item} />;

};

export default ItemDetailContainer;