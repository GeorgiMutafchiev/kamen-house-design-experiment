export type Room = {
  slug: string;
  number: string;
  name: string;
  outlook: string;
  sleeps: string;
  bed: string;
  note: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  floor: string;
  bathroom: string;
  sound: string;
  details: [string, string];
};

export const rooms: Room[] = [
  {
    slug: "east-window", number: "01", name: "East Window", outlook: "Spruce slope", sleeps: "2", bed: "Double", note: "First light and the quiet end of the house.",
    image: "/images/room-concept.webp", imageAlt: "Concept study of a simple double room lit by an east window", imageCaption: "Room 01 at first light — generated room study.",
    floor: "Upper, one flight", bathroom: "Private shower", sound: "Morning birds; little passage noise",
    details: ["The bed faces east, with enough clear wall around it for the early light to move across the limewash.", "A narrow wardrobe sits behind the door. The window bench is the room’s only chair and the best place to read before breakfast."],
  },
  {
    slug: "stone-room", number: "02", name: "Stone Room", outlook: "Lower path", sleeps: "2", bed: "Queen", note: "Thick walls, a deep sill and the shortest walk to the kitchen.",
    image: "/images/room-detail-concept.webp", imageAlt: "Concept study of the Stone Room’s deep sill, books and reading lamp", imageCaption: "The deep south sill in Room 02 — generated room-detail study.",
    floor: "Lower, six steps", bathroom: "Private shower", sound: "Kitchen movement before breakfast",
    details: ["The old outer wall makes a deep south-facing sill. Books, water and a shaded lamp fit there without taking space from the bed.", "This is the closest room to the kitchen stair. Early risers will hear the first fire being laid; the heavy door keeps the dining room quiet later on."],
  },
  {
    slug: "north-room", number: "03", name: "North Room", outlook: "Beech wood", sleeps: "2", bed: "Twin / double", note: "Cooler in summer; two beds can be joined.",
    image: "/images/room-twin-concept.webp", imageAlt: "Concept study of two low beds beside a beech-wood window", imageCaption: "Twin arrangement in Room 03 — generated room study.",
    floor: "Upper, one flight", bathroom: "Private shower", sound: "Rain in the beech canopy",
    details: ["Two low single beds stand apart with a shared table between them. Ask for them to be joined before arrival if you prefer one sleeping surface.", "North light keeps the room even through the day. A wool throw and the thick wall help on cooler nights outside the heating season."],
  },
  {
    slug: "long-room", number: "04", name: "Long Room", outlook: "Valley", sleeps: "2", bed: "Queen", note: "A long desk and the broadest western view.",
    image: "/images/room-long-concept.webp", imageAlt: "Concept study of a long guest room with a writing desk and valley view", imageCaption: "Desk and west window in Room 04 — generated room study.",
    floor: "Upper, one flight", bathroom: "Private shower", sound: "Wind on the west window",
    details: ["A continuous oak desk runs along the inside wall, with room for maps, a laptop and two cups without clearing everything away.", "The western window holds the latest light in the house. The room can warm in late afternoon, so timber shutters are fitted outside."],
  },
  {
    slug: "roof-room", number: "05", name: "Roof Room", outlook: "Ridge", sleeps: "2", bed: "Double", note: "Under the old beams; best for light luggage.",
    image: "/images/room-roof-concept.webp", imageAlt: "Concept study of a compact room beneath dark roof beams", imageCaption: "Low beams in Room 05 — generated room study.",
    floor: "Upper, two flights", bathroom: "Private compact shower", sound: "Rain audible on the roof",
    details: ["The ceiling follows the roof pitch and the beam beside the bed is low. The clear standing area runs from the door to the window.", "Storage is a row of drawers rather than a full wardrobe. This room suits a small bag and someone who likes hearing weather overhead."],
  },
  {
    slug: "garden-room", number: "06", name: "Garden Room", outlook: "Kitchen garden", sleeps: "2", bed: "Queen", note: "Ground-floor room with no internal steps.",
    image: "/images/room-garden-concept.webp", imageAlt: "Concept study of a ground-floor room beside the kitchen garden", imageCaption: "Garden-facing Room 06 — generated room study.",
    floor: "Ground, no internal steps", bathroom: "Private level-entry shower", sound: "Garden gate during the day",
    details: ["The bed, bathroom and house corridor are on one level. The final approach to the house is on foot over an uneven stone path.", "A glazed door opens toward the kitchen garden. It brings in afternoon light and occasional sounds from watering and harvest."],
  },
  {
    slug: "corner-room", number: "07", name: "Corner Room", outlook: "South and west", sleeps: "3", bed: "Queen + daybed", note: "Two windows and space for a child or third adult.",
    image: "/images/room-corner-concept.webp", imageAlt: "Concept study of a corner room with two windows and a built-in daybed", imageCaption: "Two-window corner in Room 07 — generated room study.",
    floor: "Upper, one flight", bathroom: "Private shower", sound: "Some afternoon courtyard voices",
    details: ["Windows on two walls make this the brightest room. The built-in daybed stays made as a seat unless a third guest is expected.", "With the daybed open, floor space is tighter beside the wardrobe. Three adults can sleep here, though a family with one child fits more comfortably."],
  },
  {
    slug: "quiet-room", number: "08", name: "Quiet Room", outlook: "Courtyard", sleeps: "1", bed: "Single", note: "The smallest room; made for one reader.",
    image: "/images/room-quiet-concept.webp", imageAlt: "Concept study of a small single room facing a stone courtyard", imageCaption: "Single bed and courtyard window in Room 08 — generated room study.",
    floor: "Upper, one flight", bathroom: "Private compact shower", sound: "Sheltered from road and kitchen",
    details: ["A single bed, one bedside shelf and a peg rail occupy the narrow room. Luggage stores under the bed rather than in a wardrobe.", "The courtyard window receives borrowed light, not a long view. In return, this room is furthest from the kitchen and outside path."],
  },
  {
    slug: "upper-room", number: "09", name: "Upper Room", outlook: "Valley", sleeps: "2", bed: "Queen", note: "A steep final stair and an open view.",
    image: "/images/room-upper-concept.webp", imageAlt: "Concept study of an upper room beneath beams with an open valley view", imageCaption: "Valley window in Room 09 — generated room study.",
    floor: "Upper, steep final stair", bathroom: "Private shower", sound: "Wind and roof timbers",
    details: ["The last timber stair is short and steep, with a handrail on one side. Large cases are awkward here and are better left in the lower store.", "From the bed, the valley fills the window rather than the village roofs. A chair and small table sit within the deep stone reveal."],
  },
  {
    slug: "family-room", number: "10", name: "Family Room", outlook: "Orchard", sleeps: "4", bed: "Queen + bunks", note: "One room for adults, one small bunk alcove.",
    image: "/images/room-family-concept.webp", imageAlt: "Concept study of a family room with a queen bed and recessed bunk alcove", imageCaption: "Bed and bunk alcove in Room 10 — generated room study.",
    floor: "Lower, four steps", bathroom: "Private shower", sound: "Orchard birds at first light",
    details: ["The bunks occupy a recessed alcove beside the main room. Each has a reading light; the upper bunk is reached by a fixed timber ladder.", "Four cloth drawers and a lidded chest hold a family’s things. The bathroom opens from the main room rather than the alcove."],
  },
  {
    slug: "last-room", number: "11", name: "Last Room", outlook: "Forest edge", sleeps: "2", bed: "Double", note: "At the far end of the upper passage.",
    image: "/images/room-last-concept.webp", imageAlt: "Concept study of a double room looking into beech trunks", imageCaption: "Forest-edge window in Room 11 — generated room study.",
    floor: "Upper, one flight", bathroom: "Private shower", sound: "Forest weather; almost no passage traffic",
    details: ["This room sits beyond the final turn in the passage. Its window is close to the beech canopy and receives mottled light rather than a valley view.", "A double bed, one armchair and an open rail keep the plan spare. It has the longest walk to breakfast and the least passing footfall."],
  },
];

export const journal = [
  {
    slug: "first-snow", date: "18 October", title: "Before the first snow", summary: "What changes on the road, in the wood store and at the kitchen door when autumn closes.",
    image: "/images/house-concept.webp", imageAlt: "Concept study of the house after an autumn rain", imageCaption: "The approach before winter — generated architectural study.",
    body: ["The road is still clear, but the shade holds cold now. At the house, the wood is stacked under cover and boots have moved back beside the lower door.", "Anyone leaving after lunch carries a lamp. Cloud can settle below the ridge before the light has gone from the valley."],
    subheading: "At the kitchen door", after: ["Late peppers are finished over the fire. Beans stay close to the embers, and apples come in by the crate.", "Winter tyres go on before the forecast makes them urgent. The upper path can wait until spring."],
  },
  {
    slug: "bean-pot", date: "02 September", title: "The bean pot stays close to the fire", summary: "A working note on low heat, late peppers and dinner for a full house.",
    image: "/images/hearth-concept.webp", imageAlt: "Concept study of a blackened bean pot beside glowing embers", imageCaption: "Bean pot beside beech embers — generated kitchen-detail study.",
    body: ["The beans are soaked after breakfast and put close to the embers before lunch. They need time more than attention.", "Late peppers go onto the hot plate until their skins blacken. The pot takes smoke from the stove door opening and closing around it."],
    subheading: "Low heat, long afternoon", after: ["On a full-house night, the same pot reaches the table with bread, sheep’s cheese and chopped parsley.", "Nothing is held in reserve for photographs. Dinner is served once, at 19:30."],
  },
  {
    slug: "south-path", date: "21 June", title: "The south path after rain", summary: "Roots, wet stone and where the phone signal leaves you.",
    image: "/images/path-concept.webp", imageAlt: "Concept study of wet roots and stone on a forest path", imageCaption: "South path after rain — generated field study.",
    body: ["The first kilometre climbs under beech. Rain collects on the roots and the flat stones stay slick after the leaves begin to dry.", "The last reliable phone signal is near the old pasture gate. From there, the painted marks matter more than the map."],
    subheading: "Turn back before the ridge", after: ["Low cloud hides the open slope quickly. If the first marker above the tree line is not visible, take the same path home.", "The return to the lower gate is five kilometres. In June, allow two hours and carry a dry layer."],
  },
];

export const conceptNotice = "Concept image — visual direction only; it does not document a real property.";
