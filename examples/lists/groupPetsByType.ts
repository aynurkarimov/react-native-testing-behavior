import type { SectionedPets } from "./AsyncSectionList";

export default function groupPetsByType(pets: Pet[]): SectionedPets[] {
  return pets.reduce((sections: SectionedPets[], pet) => {
    const section = sections.find((section) => section.title === pet.type);

    if (section) {
      section.data.push(pet);
    } else {
      sections.push({ title: pet.type, data: [pet] });
    }

    return sections;
  }, []);
}
