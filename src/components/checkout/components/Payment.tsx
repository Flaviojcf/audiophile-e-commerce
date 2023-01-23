export function Payment() {
  return (
    <div className="flex flex-col">
      <div className="mt-11 mb-4">
        <h1 className="font-bold text-xs leading-6 tracking-[0.93x] text-orange300">
          BILLING DETAILS
        </h1>
      </div>

      <div className="flex justify-between tablet:flex-col tablet:gap-4">
        <h1 className="font-bold text-xs leading-4">Payment Method</h1>

        <div className="flex flex-col gap-9 ">
          <div
            className="flex items-center gap-3 border border-black 
          w-[309px] h-[56px] p-4 rounded-lg border-opacity-40  tablet:w-full"
          >
            <input
              type="radio"
              id="Money"
              name="payment"
              className="cursor-pointer"
              defaultChecked
            />
            <label htmlFor="payment" className="font-bold text-xs leading-4 ">
              e-Money
            </label>
          </div>

          <div
            className="flex items-center gap-3 border border-black w-[309px] h-[56px] 
          p-4 rounded-lg border-opacity-40  tablet:w-full"
          >
            <input
              type="radio"
              id="payment"
              name="payment"
              className="cursor-pointer"
            />
            <label htmlFor="Cash" className="font-bold text-xs leading-4">
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
