import { CountryData } from "../Types/types";
import { CountryCard } from "./CountryCard";

interface CountryCardContainerProps {
  countries: CountryData[];
  onExecuteAgain: (countryName: string, showModal: boolean) => void;
  openGoogleMapsLink: (link: string) => void;
}

export function CountryCardContainer({ countries, onExecuteAgain, openGoogleMapsLink }: CountryCardContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {countries.map((country: CountryData) => (
        <CountryCard
          key={country.index}
          country={country}
          onExecuteAgain={onExecuteAgain}
          openGoogleMapsLink={openGoogleMapsLink}
        />
      ))}
    </div>
  );
}
