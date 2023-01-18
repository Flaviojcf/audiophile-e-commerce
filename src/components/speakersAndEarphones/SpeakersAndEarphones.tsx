import { EarphonesContainer } from "./components/EarphonesContainer";
import { GraySpeakerContainer } from "./components/GraySpeakerContainer";
import { OrangeSpeakerContainer } from "./components/OrangeSpeakerContainer";

export function SpeakersAndEarphones() {
  return (
    <div className="flex flex-col gap-12 tablet:w-full mobile:w-72">
      <OrangeSpeakerContainer />
      <GraySpeakerContainer />
      <EarphonesContainer/>
    </div>
  );
}
