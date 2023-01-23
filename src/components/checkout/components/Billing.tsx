import { Input } from "./Input";

export function Billing() {
  return (
    <div id="Billing Details" className="flex flex-col ">
      <div className="mt-11 mb-4">
        <h1 className="font-bold text-xs leading-6 tracking-[0.93x] text-orange300">
          BILLING DETAILS
        </h1>
      </div>

      <div className="flex gap-4 flex-wrap ">
        <Input name="Name" id="Name" placeholder="Alexei Ward" type="text" />
        <Input
          name="Email Address"
          id="Email"
          placeholder="alexei@mail.com"
          type="email"
        />
      </div>

      <div className="mt-6">
        <Input
          name="Phone Number"
          id="Number"
          placeholder="+1 202-555-0136"
          type="text"
        />
      </div>
    </div>
  );
}
