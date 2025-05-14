import Section from "@/components/layout/section";
import seasonsData from "@/database/seasons.json";

const { seasons } = seasonsData;

const SeasonsMobile = () => {
  return (
    <>
      <Section className="block md:hidden px-[24px]">
        {seasons.map((season, index) => (
          <Section space="large" key={index}>
            <p className="text-tertiary text-[36px]">
              {season.title.translations.en}
            </p>
            <p className="text-tertiary text-[24px] mt-4">
              {season.description.translations.en}
            </p>
          </Section>
        ))}
      </Section>
    </>
  );
};

export default SeasonsMobile;
