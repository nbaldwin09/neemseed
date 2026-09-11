export const PROGRAMS = [
  {
    id: "architecture",
    title: "Seed architecture",
    copy: "We map the physical geometry of the seed — coat, endosperm, embryo — as a manufacturing spec, not a metaphor. Coat permeability, imbibition time, and mechanical integrity become design variables.",
  },
  {
    id: "climate",
    title: "Climate cultivars",
    copy: "Heat, salt, and drought are treated as first-class product requirements. Lines are scored against a floor of yield under stress, not peak yield in a perfect season.",
  },
  {
    id: "rhizosphere",
    title: "Rhizosphere systems",
    copy: "The plant is not the product. The partnership is. We breed for microbial hospitality — exudate profiles that keep the right fungi and bacteria on payroll.",
  },
  {
    id: "flavor",
    title: "Flavor chemistry",
    copy: "Agriculture that ignores the table is logistics. We quantify bitterness, aroma, and mouthfeel the way a seed company used to quantify oil content.",
  },
  {
    id: "postharvest",
    title: "Postharvest life",
    copy: "A cultivar that dies in the crate is not a cultivar. We select for shelf geometry: respiration, bruising, and the chemistry of waiting.",
  },
  {
    id: "culture",
    title: "Food culture lab",
    copy: "Recipes, rituals, and regional palates are research inputs. If a crop cannot enter a kitchen it will not enter a market.",
  },
];

export const PIPELINE = [
  { code: "NS-014", name: "Azadir Shade", stage: "Field", note: "Heat-tolerant neem for alley-crop shade and leaf chemistry." },
  { code: "NS-027", name: "Millet Circum", stage: "Pilot", note: "Pearl millet with a shorter imbibition window for erratic rains." },
  { code: "NS-033", name: "Citrus Quiet", stage: "Lab", note: "Reduced-bitterness peel chemistry without collapsing pest defense." },
  { code: "NS-041", name: "Sorghum Night", stage: "Field", note: "Stay-green sorghum for dual forage and grain under late heat." },
  { code: "NS-058", name: "Pulse Lattice", stage: "Glasshouse", note: "Cowpea architecture that interplants without smothering the cereal." },
  { code: "NS-062", name: "Tomato Ember", stage: "Pilot", note: "Field tomato selected for flavor after 12 days of transport." },
  { code: "NS-071", name: "Rice Hearth", stage: "Lab", note: "Aromatic rice that holds volatiles after a night of cooling." },
  { code: "NS-080", name: "Chili Lattice", stage: "Glasshouse", note: "Capsaicin band narrowed for kitchens that want heat without wreckage." },
  { code: "NS-086", name: "Cacao Drift", stage: "Field", note: "Understory cacao scored for ferment, not just bean weight." },
];

export const PAPERS = [
  { year: "2026", title: "Coat geometry as a drought contract", venue: "NeemSeed Notes 04" },
  { year: "2026", title: "Exudate hospitality and the unpaid workforce of soil", venue: "Rhizosphere Review" },
  { year: "2025", title: "Bitterness as a public good", venue: "Food Culture Lab" },
  { year: "2025", title: "A 3-2-1 for germplasm: live, vault, and wild", venue: "Accession" },
  { year: "2025", title: "Imbibition windows under erratic rain", venue: "Climate Cultivars" },
  { year: "2024", title: "The crate is a climate", venue: "Postharvest Life" },
];

export const SITES = [
  { name: "House floor", place: "Savannah River terrace", role: "Lab, kitchen, vault" },
  { name: "Field rows", place: "Upper Coastal Plain", role: "Heat and drought screens" },
  { name: "Shade plots", place: "Western Ghats partner", role: "Neem and understory cacao" },
  { name: "Cold copy", place: "Second-power vault", role: "Frozen accessions, geographically split" },
];

export const PEOPLE = [
  { name: "Imani Cole", role: "Director of cultivars", note: "Reads a plot the way a chef reads a pan." },
  { name: "Rafael Mendes", role: "Rhizosphere lead", note: "Keeps the unpaid workforce on the books." },
  { name: "Sora Park", role: "Flavor chemistry", note: "Will not release a line that cannot sit on a plate." },
  { name: "Adewale Okonkwo", role: "Field systems", note: "Stress floors, not peak seasons." },
];

export const TASTINGS = [
  { crop: "Millet Circum", plate: "Porridge with browned butter and citrus leaf", note: "Nutty, short, no paste." },
  { crop: "Tomato Ember", plate: "Sliced after twelve days in a crate", note: "Acid still present. Skin intact." },
  { crop: "Citrus Quiet", plate: "Peel oil on grilled fish", note: "Perfume without the medicinal edge." },
  { crop: "Chili Lattice", plate: "Stew, two climates of palates", note: "Heat that arrives and leaves." },
];

export const GROWERS = [
  { name: "Red Clay Cooperative", region: "Georgia, USA", crop: "Sorghum Night, Pulse Lattice" },
  { name: "Sahel Seed Circle", region: "Niamey partnership", crop: "Millet Circum" },
  { name: "Kerala Shade Trust", region: "Western Ghats", crop: "Azadir Shade, Cacao Drift" },
];
