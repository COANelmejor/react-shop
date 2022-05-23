import {
    useEffect,
    useState
} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        /* Using axios */
        const response = await axios.get(API);
        setProducts(response.data);

        /* Using fetch */
        // const response = await fetch(API);
        // const data = await response.json();
        // setProducts(data);

    }, []);
    return products;
}

export default useGetProducts;