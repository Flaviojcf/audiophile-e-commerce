import { Products } from "../products/Products";
import { SpeakersAndEarphones } from "../speakersAndEarphones/SpeakersAndEarphones";

export function Main() {
  return (
    <div className="flex flex-col px-40 w-full mt-32 pb-52 gap-48 items-center   tablet:px-10 mobile:mt-10  mobile:px-9 mobile:gap-24">
      <Products />
      <SpeakersAndEarphones />
    </div>
  );
}
