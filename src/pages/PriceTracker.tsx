import "./PriceTracker.css"
import StoreSelector from "../components/store_selector/StoreSelector.tsx"
import { mockSelectedStores, mockStoreList } from "../components/temp/mocks.ts";
import { type Store } from "../types/api.ts"
import { useState, useEffect } from "react"

const apiPath = "http://localhost:8080/api/";
const storePath = apiPath + "stores";


export default function PriceTracker() {

    const [ stores, setStores ] = useState<Store[]>([]);

    useEffect(()=>{
	const fetchStores = async () => {
	    const response = await fetch(storePath ,{method: "GET"});
	    const stores = await response.json() as Store[];
	    setStores(stores);
	}
	fetchStores();
    }, []);
    
    return (
	<>
	    <StoreSelector selectedStores={mockSelectedStores} availableStores={stores}/>
	</>
    );
}
