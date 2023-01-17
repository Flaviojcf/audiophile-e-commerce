import { Products } from "../products/Products";

export function Main(){
    return(
        <div className="flex flex-col px-40 w-full mt-32 pb-52 tablet:px-10 mobile:mt-10">
            <Products/>
        </div>
    )
}