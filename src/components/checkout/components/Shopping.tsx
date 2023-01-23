import { Input } from "./Input";

export function Shopping() {
  return (
    <div id="Billing Details" className="flex flex-col gap-5">
      <div className="mt-11 mb-4">
        <h1 className="font-bold text-xs leading-6 tracking-[0.93x] text-orange300">
        Shopping
        </h1>
      </div>

      <div className="mt-6">
        <Input id="Address" name="Address" placeholder="1137 Williams Avenue" type="text" fullWidth={true}/>
      </div>

      <div className="flex gap-4 flex-wrap ">
        <Input id="ZIP" name="ZIP Code" placeholder="10001" type="number"/>
        <Input id="City" name="City" placeholder="New York" type="text"/>
      </div>

      <div className="mt-6">
        <Input id="Country" name="Country" placeholder="United States" type="text"/>
      </div>

     
    </div>
  );
}
