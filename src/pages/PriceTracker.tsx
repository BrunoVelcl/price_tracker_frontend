import "./PriceTracker.css"
import StoreSelector from "../components/store_selector/StoreSelector.tsx"
import { mockSelectedStores, mockStoreList } from "../components/temp/mocks.ts";

export default function PriceTracker() {
    return (
	<>
	    <StoreSelector selectedStores={mockSelectedStores} availableStores={mockStoreList}/>
	</>
    );
}
