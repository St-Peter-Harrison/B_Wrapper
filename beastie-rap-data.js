// Beastie Rap rhyme/name data
// Generated from NamesForGPT(1).csv.
//
// Usage:
//   <script src="beastie-rap-data.js"></script>
//
// Example:
//   const pick = BEASTIE_RAP_DATA.pickRandomName();
//   const rhymes = BEASTIE_RAP_DATA.getRhymesForName(pick.name);
//
// Pass already-used words as the optional second argument. The returned
// options omit the selected name, used answers, and all of their homophones.

(function () {
  "use strict";

  const groups = [
  {
    "id": "group_01_ben",
    "primaryName": "Ben",
    "rhymes": [
      "Ben",
      "Again",
      "Amen",
      "CNN",
      "Comedian",
      "Den",
      "Fen",
      "Glen",
      "Hen",
      "Jenn",
      "Ken",
      "Men",
      "Open",
      "Pen",
      "Ten",
      "Then",
      "When",
      "Venn",
      "Yen",
      "Zen"
    ]
  },
  {
    "id": "group_02_beth",
    "primaryName": "Beth",
    "rhymes": [
      "Beth",
      "Breath",
      "Death",
      "Meth",
      "Seth"
    ]
  },
  {
    "id": "group_03_bob",
    "primaryName": "Bob",
    "rhymes": [
      "Bob",
      "Blob",
      "Cob",
      "DOB",
      "Fob",
      "Gob",
      "Hob",
      "Job",
      "Les Misérables",
      "Lob",
      "Kabob",
      "Mob",
      "Nob",
      "Punjab",
      "Prob",
      "Rob",
      "Sob",
      "Slob",
      "Snob",
      "Throb"
    ]
  },
  {
    "id": "group_04_brad",
    "primaryName": "Brad",
    "rhymes": [
      "Brad",
      "Add",
      "Bad",
      "Cad",
      "Chad",
      "Comrade",
      "Dad",
      "Fad",
      "Glad",
      "Had",
      "Lad",
      "Leningrad",
      "Mad",
      "Pad",
      "Rad",
      "Sad",
      "Stalingrad",
      "Tad",
      "Clad",
      "Plaid"
    ]
  },
  {
    "id": "group_05_bruce",
    "primaryName": "Bruce",
    "rhymes": [
      "Bruce",
      "Achoos",
      "Choo-choos",
      "Deuce",
      "Dr. Seuss",
      "Goose",
      "Juice",
      "Loose",
      "Moose",
      "Noose",
      "Reduce",
      "Spruce",
      "Truce",
      "Zeus"
    ]
  },
  {
    "id": "group_06_carl",
    "primaryName": "Carl",
    "rhymes": [
      "Carl",
      "ensnarl",
      "Gnarl",
      "Jarl",
      "Snarl"
    ]
  },
  {
    "id": "group_07_charles",
    "primaryName": "Charles",
    "rhymes": [
      "Charles",
      "Carls",
      "Gnarls",
      "Jarls",
      "Laurels",
      "Silmarils",
      "Snarls"
    ]
  },
  {
    "id": "group_08_chris",
    "primaryName": "Chris",
    "rhymes": [
      "Chris",
      "Abyss",
      "Amiss",
      "Bliss",
      "Dis",
      "Hiss",
      "Miss",
      "Sis",
      "This"
    ]
  },
  {
    "id": "group_09_chuck",
    "primaryName": "Chuck",
    "rhymes": [
      "Chuck",
      "Buck",
      "Cluck",
      "Duck",
      "Eunuch",
      "Huck",
      "Luck",
      "Muck",
      "Nunchuck",
      "Puck",
      "Pluck",
      "Stuck",
      "Struck",
      "Suck",
      "Shuck",
      "Tuck",
      "Truck",
      "Yuck"
    ]
  },
  {
    "id": "group_10_claire",
    "primaryName": "Claire",
    "rhymes": [
      "Claire",
      "Affair",
      "Bear",
      "Blare",
      "Care",
      "Chair",
      "Dare",
      "Despair",
      "Fair",
      "Flair",
      "Glare",
      "Hair",
      "Lair",
      "Mare",
      "Nair",
      "Pear",
      "Rare",
      "Repair",
      "Scare",
      "Share",
      "Snare",
      "Spare",
      "Square",
      "Stare",
      "Swear",
      "Tear",
      "Where"
    ]
  },
  {
    "id": "group_11_dan",
    "primaryName": "Dan",
    "rhymes": [
      "Dan",
      "Ban",
      "Can",
      "Clan",
      "C-SPAN",
      "Fan",
      "Han",
      "Japan",
      "LAN",
      "Man",
      "Nan",
      "Pan",
      "Plan",
      "Ran",
      "Span",
      "Stan",
      "Tan",
      "Trepan",
      "Van"
    ]
  },
  {
    "id": "group_12_dave",
    "primaryName": "Dave",
    "rhymes": [
      "Dave",
      "Behave",
      "Brave",
      "Cave",
      "Concave",
      "Conclave",
      "Crave",
      "Deprave",
      "Enclave",
      "Engrave",
      "Enslave",
      "Exclave",
      "Fave",
      "Forgave",
      "Gave",
      "Grave",
      "Knave",
      "Microwave",
      "Misbehave",
      "Rave",
      "Save",
      "Shave",
      "Slave",
      "Stave",
      "They've",
      "Wave"
    ]
  },
  {
    "id": "group_13_doug",
    "primaryName": "Doug",
    "rhymes": [
      "Doug",
      "Bug",
      "Chug",
      "Drug",
      "Glug",
      "Hug",
      "Jug",
      "Lug",
      "Mug",
      "Plug",
      "Pug",
      "Rug",
      "Slug",
      "Snug",
      "Smug",
      "Shrug",
      "Tug",
      "Thug",
      "Ugh"
    ]
  },
  {
    "id": "group_14_earl",
    "primaryName": "Earl",
    "rhymes": [
      "Earl",
      "Burl",
      "Churl",
      "Furl",
      "Girl",
      "Hurl",
      "Rural",
      "Squirrel",
      "Swirl",
      "Twirly",
      "Unfurl",
      "Whirl"
    ]
  },
  {
    "id": "group_15_frank",
    "primaryName": "Frank",
    "rhymes": [
      "Frank",
      "Bank",
      "Blank",
      "Clank",
      "Crank",
      "Dank",
      "Drank",
      "Flank",
      "Hank",
      "Lank",
      "Plank",
      "Prank",
      "Rank",
      "Sank",
      "Spank",
      "Stank",
      "Swank",
      "Shank",
      "Shrank",
      "Tank",
      "Tranq",
      "Thank",
      "Wank",
      "Yank"
    ]
  },
  {
    "id": "group_16_fred",
    "primaryName": "Fred",
    "rhymes": [
      "Fred",
      "Ahead",
      "Bed",
      "Bled",
      "Bred",
      "Cred",
      "Dead",
      "Dread",
      "Ed",
      "Embed",
      "Fed",
      "Fled",
      "Head",
      "Instead",
      "Led",
      "Med",
      "Ned",
      "Overhead",
      "PED",
      "Red",
      "Said",
      "Sled",
      "Sped",
      "Stead",
      "Shed",
      "Shred",
      "Ted",
      "Thread",
      "Wed",
      "Zed"
    ]
  },
  {
    "id": "group_17_george",
    "primaryName": "George",
    "rhymes": [
      "George",
      "Engorge",
      "Forge",
      "Gorge",
      "Reforge",
      "Scourge"
    ]
  },
  {
    "id": "group_18_grace",
    "primaryName": "Grace",
    "rhymes": [
      "Grace",
      "Ace",
      "Base",
      "Brace",
      "Case",
      "Chase",
      "Disgrace",
      "Embrace",
      "Face",
      "Lace",
      "Mace",
      "Pace",
      "Place",
      "Race",
      "Replace",
      "Space",
      "Trace",
      "Thrace"
    ]
  },
  {
    "id": "group_19_grant",
    "primaryName": "Grant",
    "rhymes": [
      "Grant",
      "Ant",
      "Can't",
      "Enchant",
      "Pant",
      "Plant",
      "Rant",
      "Recant"
    ]
  },
  {
    "id": "group_20_greg",
    "primaryName": "Greg",
    "rhymes": [
      "Greg",
      "Beg",
      "Craig",
      "Egg",
      "JPEG",
      "Keg",
      "Leg",
      "Meg",
      "Neg",
      "Nutmeg",
      "Peg"
    ]
  },
  {
    "id": "group_21_jack",
    "primaryName": "Jack",
    "rhymes": [
      "Jack",
      "Back",
      "Black",
      "Clack",
      "Crack",
      "Flack",
      "Hack",
      "Knack",
      "Lack",
      "Pack",
      "Plaque",
      "Quack",
      "Rack",
      "Sack",
      "Shack",
      "Slack",
      "Smack",
      "Snack",
      "Stack",
      "Tack",
      "Track",
      "Whack",
      "Yack"
    ]
  },
  {
    "id": "group_22_jake",
    "primaryName": "Jake",
    "rhymes": [
      "Jake",
      "Awake",
      "Bake",
      "Break",
      "Cake",
      "Drake",
      "Fake",
      "Flake",
      "Forsake",
      "Keepsake",
      "Lake",
      "Make",
      "Mistake",
      "Quake",
      "Rake",
      "Shake",
      "Snake",
      "Steak",
      "Take",
      "Wake"
    ]
  },
  {
    "id": "group_23_james",
    "primaryName": "James",
    "rhymes": [
      "James",
      "Aims",
      "Blames",
      "Claims",
      "Dames",
      "Exclaims",
      "Flames",
      "Frames",
      "Games",
      "Lames",
      "Maims",
      "Names",
      "Reclaims",
      "Shames",
      "Tames",
      "Thames"
    ]
  },
  {
    "id": "group_24_jean",
    "primaryName": "Jean",
    "rhymes": [
      "Jean",
      "Bean",
      "Clean",
      "Green",
      "Keen",
      "Lean",
      "Machine",
      "Mean",
      "Preen",
      "Queen",
      "Screen",
      "Seen",
      "Sheen",
      "Teen",
      "Ween"
    ]
  },
  {
    "id": "group_25_jeff",
    "primaryName": "Jeff",
    "rhymes": [
      "Jeff",
      "Chef",
      "Deaf",
      "F",
      "Ref",
      "Steph"
    ]
  },
  {
    "id": "group_26_jess",
    "primaryName": "Jess",
    "rhymes": [
      "Jess",
      "Abbess",
      "Abscess",
      "Access",
      "Address",
      "Aggress",
      "Acquiesce",
      "Assess",
      "Bless",
      "Caress",
      "Cess",
      "Compress",
      "Confess",
      "Chess",
      "Dress",
      "Depress",
      "Digress",
      "Distress",
      "Egress",
      "Fess",
      "Guess",
      "Hess",
      "Less",
      "Mess",
      "NES",
      "Recess",
      "Regress",
      "Repress",
      "SNES",
      "Transgress",
      "Yes"
    ]
  },
  {
    "id": "group_27_jim",
    "primaryName": "Jim",
    "rhymes": [
      "Jim",
      "Antonym",
      "Brim",
      "Dim",
      "Grim",
      "Him",
      "Kim",
      "Limb",
      "Prim",
      "Rim",
      "Scrim",
      "Sim",
      "Shim",
      "Skim",
      "Slim",
      "Swim",
      "Synonym",
      "Whim",
      "Vim",
      "Zim"
    ]
  },
  {
    "id": "group_28_joe",
    "primaryName": "Joe",
    "rhymes": [
      "Joe",
      "Beau",
      "Blow",
      "Bo",
      "Bro",
      "Co",
      "Crow",
      "Doe",
      "Faux",
      "Flow",
      "Foe",
      "Fro",
      "Glow",
      "Go",
      "Grow",
      "Hoe",
      "Jo",
      "Know",
      "Low",
      "Mow",
      "Owe",
      "Poe",
      "Pro",
      "Quo",
      "Row",
      "Schmo",
      "Sew",
      "Show",
      "Slow",
      "Snow",
      "So",
      "Stow",
      "Though",
      "Throw",
      "Tow",
      "Woe",
      "Yo"
    ]
  },
  {
    "id": "group_29_john",
    "primaryName": "John",
    "rhymes": [
      "John",
      "Brawn",
      "Dawn",
      "Drawn",
      "Fawn",
      "Gone",
      "Han",
      "Khan",
      "Lawn",
      "Marathon",
      "Naan",
      "On",
      "Pawn",
      "Pokemon",
      "Prawn",
      "Sawn",
      "Shawn",
      "Spawn",
      "Upon",
      "Wonton",
      "Yawn"
    ]
  },
  {
    "id": "group_30_josh",
    "primaryName": "Josh",
    "rhymes": [
      "Josh",
      "Awash",
      "Gosh",
      "Macintosh",
      "Mosh",
      "Panache",
      "Posh",
      "Quash",
      "Slosh",
      "Squash",
      "Swash",
      "Smosh",
      "Tosh",
      "Wash"
    ]
  },
  {
    "id": "group_31_keith",
    "primaryName": "Keith",
    "rhymes": [
      "Keith",
      "Beneath",
      "Bequeath",
      "Heath",
      "Sheath",
      "Teeth",
      "Underneath",
      "Wreath"
    ]
  },
  {
    "id": "group_32_kyle",
    "primaryName": "Kyle",
    "rhymes": [
      "Kyle",
      "Agile",
      "Aisle",
      "Beguile",
      "Bile",
      "Compile",
      "Crocodile",
      "Defile",
      "Denial",
      "Dile",
      "Fertile",
      "File",
      "Francophile",
      "Fragile",
      "Gentile",
      "Guile",
      "Hostile",
      "I'll",
      "Immobile",
      "Lyle",
      "Mobile",
      "Mile",
      "Nile",
      "Pile",
      "Rile",
      "Smile",
      "Style",
      "Tile",
      "Trial",
      "Versatile",
      "While"
    ]
  },
  {
    "id": "group_33_liz",
    "primaryName": "Liz",
    "rhymes": [
      "Liz",
      "Fizz",
      "His",
      "Is",
      "Les Mis",
      "Ms Frizz",
      "Quiz",
      "Shiz",
      "Show biz",
      "'Tis",
      "Wiz"
    ]
  },
  {
    "id": "group_34_lou",
    "primaryName": "Lou",
    "rhymes": [
      "Lou",
      "Achoo",
      "Boo",
      "Brew",
      "Coup",
      "Chew",
      "Crew",
      "Due",
      "Goo",
      "Issue",
      "Loo",
      "Misconstrue",
      "Moo",
      "New",
      "Ooo",
      "Poo",
      "Queue",
      "Rue",
      "Sue",
      "Skew",
      "Spew",
      "Stew",
      "Shoe",
      "Shrew",
      "Too",
      "True",
      "Through",
      "View",
      "Who",
      "Zoo",
      "Drew"
    ]
  },
  {
    "id": "group_35_mark",
    "primaryName": "Mark",
    "rhymes": [
      "Mark",
      "Aardvark",
      "Ark",
      "Bark",
      "Clark",
      "Dark",
      "Embark",
      "Hark",
      "Lark",
      "Narc",
      "Ozark",
      "Park",
      "Quark",
      "Remark",
      "Snark",
      "Spark",
      "Stark",
      "Shark"
    ]
  },
  {
    "id": "group_36_mike",
    "primaryName": "Mike",
    "rhymes": [
      "Mike",
      "Bike",
      "Dike",
      "Dislike",
      "Hike",
      "Ike",
      "Like",
      "Pike",
      "Sike",
      "Spike",
      "Stike",
      "Strike",
      "Trike",
      "Tyke"
    ]
  },
  {
    "id": "group_37_pat",
    "primaryName": "Pat",
    "rhymes": [
      "Pat",
      "Bat",
      "Brat",
      "Cat",
      "Chat",
      "Drat",
      "Fat",
      "Flat",
      "Frat",
      "Gat",
      "Gnat",
      "Hat",
      "Kit Kat",
      "Mat",
      "Rat",
      "Sat",
      "Spat",
      "Tat",
      "That",
      "Vat"
    ]
  },
  {
    "id": "group_38_paul",
    "primaryName": "Paul",
    "rhymes": [
      "Paul",
      "All",
      "Appall",
      "Ball",
      "Brawl",
      "Call",
      "Crawl",
      "Doll",
      "Drawl",
      "Enthrall",
      "Fall",
      "Gall",
      "Hall",
      "Install",
      "Mall",
      "Parasol",
      "Raul",
      "Saul",
      "Squall",
      "Shawl",
      "Tall",
      "Trawl",
      "Thrall",
      "Wall",
      "Y'all"
    ]
  },
  {
    "id": "group_39_ralph",
    "primaryName": "Ralph",
    "rhymes": [
      "Ralph",
      "Alph",
      "Calf",
      "Half"
    ]
  },
  {
    "id": "group_40_ross",
    "primaryName": "Ross",
    "rhymes": [
      "Ross",
      "Across",
      "Boss",
      "Cross",
      "Floss",
      "Gloss"
    ]
  },
  {
    "id": "group_41_roy",
    "primaryName": "Roy",
    "rhymes": [
      "Roy",
      "Annoy",
      "Boy",
      "Coy",
      "Decoy",
      "Destroy",
      "Doy",
      "Employ",
      "Joy",
      "Oy",
      "Ploy",
      "Nimoy",
      "Soy",
      "Toy"
    ]
  },
  {
    "id": "group_42_ruth",
    "primaryName": "Ruth",
    "rhymes": [
      "Ruth",
      "Booth",
      "couth",
      "Sleuth",
      "Tooth",
      "Truth",
      "uncouth",
      "Vermouth",
      "Youth"
    ]
  },
  {
    "id": "group_43_sam",
    "primaryName": "Sam",
    "rhymes": [
      "Sam",
      "Am",
      "Bam",
      "Cam",
      "Clam",
      "Cram",
      "Dam",
      "Diagram",
      "Exam",
      "Fam",
      "Gram",
      "Ham",
      "Jam",
      "Lamb",      "Ma'am",
      "Pam",
      "Pram",
      "Program",
      "Ram",
      "Scam",
      "Scram",
      "Slam",
      "Spam",
      "Swam",
      "Tram",
      "Vietnam",
      "Wham",
      "Yam"
    ]
  },
  {
    "id": "group_44_scott",
    "primaryName": "Scott",
    "rhymes": [
      "Scott",
      "Ascot",
      "Besought",
      "Bot",
      "Blot",
      "Brought",
      "Cot",
      "Clot",
      "Dot",
      "EGOT",
      "Forgot",
      "Fought",
      "Fraught",
      "Got",
      "Hot",
      "Jot",
      "Knot",
      "Lot",
      "Motte",
      "Not",
      "Ocelot",
      "Ought",
      "Pot",
      "Plot",
      "Robot",
      "Rot",
      "Sought",
      "Slot",
      "Snot",
      "Spot",
      "Squat",
      "Swat",
      "Shot",
      "Taught",
      "Trot",
      "Thought",
      "Wrought",
      "Yacht"
    ]
  },
  {
    "id": "group_45_steve",
    "primaryName": "Steve",
    "rhymes": [
      "Steve",
      "Cleave",
      "Grieve",
      "Heave",
      "Leave",
      "Peeve",
      "Reeve",
      "Relieve",
      "Retrieve",
      "Sleeve",
      "Weave"
    ]
  },
  {
    "id": "group_46_trent",
    "primaryName": "Trent",
    "rhymes": [
      "Trent",
      "Accent",
      "Bent",
      "Brent",
      "Dent",
      "Event",
      "Gent",
      "Lent",
      "Meant",
      "Pent",
      "Rent",
      "Sent",
      "Tent",
      "Went",
      "Vent"
    ]
  },
  {
    "id": "group_47_vince",
    "primaryName": "Vince",
    "rhymes": [
      "Vince",
      "Convince",
      "Mince",
      "Prince",
      "Since",
      "Wince"
    ]
  },
  {
    "id": "group_48_walt",
    "primaryName": "Walt",
    "rhymes": [
      "Walt",
      "Alt",
      "Asphalt",
      "Assault",
      "Exalt",
      "Fault",
      "Halt",
      "Malt",
      "Salt",
      "Vault"
    ]
  },
  {
    "id": "group_49_wayne",
    "primaryName": "Wayne",
    "rhymes": [
      "Wayne",
      "Attain",
      "Bane",
      "Cane",
      "Contain",
      "Crane",
      "Chain",
      "Dane",
      "Drain",
      "Explain",
      "Fane",
      "Gain",
      "Grain",
      "Jane",
      "Lane",
      "Mane",
      "Moraine",
      "Obtain",
      "Ordain",
      "Pane",
      "Rain",
      "Refrain",
      "Sane",
    "Insane",
    "Zayn",
      "Slain",
      "Sustain",
      "Shane",
      "Train",
      "Vane"
    ]
  },
  {
    "id": "group_50_will",
    "primaryName": "Will",
    "rhymes": [
      "Will",
      "Bill",
      "Brazil",
      "Chill",
      "Dill",
      "Distill",
      "Drill",
      "Fill",
      "Frill",
      "Fulfill",
      "Gill",
      "Grill",
      "Hill",
      "Kill",
      "Krill",
      "Lil",
      "Mill",
      "Nil",
      "Pill",
      "Quill",
      "Refill",
      "Sil",
      "Shill",
      "Skill",
      "Spill",
      "Still",
      "Swill",
      "Til",
      "Treadmill",
      "Tril",
      "Thrill",
      "Until"
    ]
  }
];

  // Each item below is one spoken answer with multiple valid spellings.
  // The LLM may receive every spelling, but the app tracks the shared id.
  // Therefore, using any spelling blocks every other spelling in that set.
  const homophoneGroups = [
    { id: "add-ad", spellings: ["Add", "Ad"] },
    { id: "jenn-jen", spellings: ["Jenn", "Jen"] },
    { id: "nob-knob", spellings: ["Nob", "Knob"] },
    { id: "claire-clare-clair", spellings: ["Claire", "Clare", "Clair"] },
    { id: "bear-bare", spellings: ["Bear", "Bare"] },
    { id: "fair-fare", spellings: ["Fair", "Fare"] },
    { id: "flair-flare", spellings: ["Flair", "Flare"] },
    { id: "hair-hare", spellings: ["Hair", "Hare"] },
    { id: "pear-pair-pare", spellings: ["Pear", "Pair", "Pare"] },
    { id: "stare-stair", spellings: ["Stare", "Stair"] },
    { id: "tear-tare", spellings: ["Tear", "Tare"] },
    { id: "where-wear-ware", spellings: ["Where", "Wear", "Ware"] },
    { id: "carl-karl", spellings: ["Carl", "Karl"] },
    { id: "chris-kris", spellings: ["Chris", "Kris"] },
    { id: "ugh-ug", spellings: ["Ugh", "Ug"] },
    { id: "greg-gregg", spellings: ["Greg", "Gregg"] },
    { id: "bred-bread", spellings: ["Bred", "Bread"] },
    { id: "led-lead", spellings: ["Led", "Lead"] },
    { id: "red-read", spellings: ["Red", "Read"] },
    { id: "base-bass", spellings: ["Base", "Bass"] },
    { id: "cant-cant", spellings: ["Can't", "Cant"] },
    { id: "flack-flak", spellings: ["Flack", "Flak"] },
    { id: "whack-wack", spellings: ["Whack", "Wack"] },
    { id: "yack-yak", spellings: ["Yack", "Yak"] },
    { id: "break-brake", spellings: ["Break", "Brake"] },
    { id: "steak-stake", spellings: ["Steak", "Stake"] },
    { id: "jean-gene", spellings: ["Jean", "Gene"] },
    { id: "lean-lien", spellings: ["Lean", "Lien"] },
    { id: "mean-mien", spellings: ["Mean", "Mien"] },
    { id: "seen-scene", spellings: ["Seen", "Scene"] },
    { id: "jeff-geoff", spellings: ["Jeff", "Geoff"] },
    { id: "f-eff", spellings: ["F", "Eff"] },
    { id: "steph-steff", spellings: ["Steph", "Steff"] },
    { id: "beau-bo-bow", spellings: ["Beau", "Bo", "Bow"] },
    { id: "doe-dough", spellings: ["Doe", "Dough"] },
    { id: "faux-foe", spellings: ["Faux", "Foe"] },
    { id: "flow-floe", spellings: ["Flow", "Floe"] },
    { id: "hoe-ho", spellings: ["Hoe", "Ho"] },
    { id: "joe-jo", spellings: ["Joe", "Jo"] },
    { id: "know-no", spellings: ["Know", "No"] },
    { id: "owe-oh", spellings: ["Owe", "Oh"] },
    { id: "row-roe", spellings: ["Row", "Roe"] },
    { id: "sew-so-sow", spellings: ["Sew", "So", "Sow"] },
    { id: "though-tho", spellings: ["Though", "Tho"] },
    { id: "throw-throe", spellings: ["Throw", "Throe"] },
    { id: "tow-toe", spellings: ["Tow", "Toe"] },
    { id: "woe-whoa-woah", spellings: ["Woe", "Whoa", "Woah"] },
    { id: "fawn-faun", spellings: ["Fawn", "Faun"] },
    { id: "john-jon", spellings: ["John", "Jon"] },
    { id: "shawn-sean", spellings: ["Shawn", "Sean"] },
    { id: "aisle-ill-isle", spellings: ["Aisle", "I'll", "Isle"] },
    { id: "style-stile", spellings: ["Style", "Stile"] },
    { id: "while-wile", spellings: ["While", "Wile"] },
    { id: "wiz-whiz", spellings: ["Wiz", "Whiz"] },
    { id: "lou-loo-lieu", spellings: ["Lou", "Loo", "Lieu"] },
    { id: "coup-coo", spellings: ["Coup", "Coo"] },
    { id: "due-dew-do", spellings: ["Due", "Dew", "Do"] },
    { id: "new-knew-gnu", spellings: ["New", "Knew", "Gnu"] },
    { id: "ooo-ooh", spellings: ["Ooo", "Ooh"] },
    { id: "queue-cue-q", spellings: ["Queue", "Cue", "Q"] },
    { id: "rue-roux", spellings: ["Rue", "Roux"] },
    { id: "shoe-shoo", spellings: ["Shoe", "Shoo"] },
    { id: "sue-sioux", spellings: ["Sue", "Sioux"] },
    { id: "too-to-two", spellings: ["Too", "To", "Two"] },
    { id: "through-thru", spellings: ["Through", "Thru"] },
    { id: "who-hugh", spellings: ["Who", "Hugh"] },
    { id: "mark-marc", spellings: ["Mark", "Marc"] },
    { id: "ark-arc", spellings: ["Ark", "Arc"] },
    { id: "clark-clarke", spellings: ["Clark", "Clarke"] },
    { id: "narc-nark", spellings: ["Narc", "Nark"] },
    { id: "dike-dyke", spellings: ["Dike", "Dyke"] },
    { id: "sike-psych", spellings: ["Sike", "Psych"] },
    { id: "tyke-tike", spellings: ["Tyke", "Tike"] },
    { id: "cat-kat", spellings: ["Cat", "Kat"] },
    { id: "gnat-nat", spellings: ["Gnat", "Nat"] },
    { id: "mat-matt", spellings: ["Mat", "Matt"] },
    { id: "paul-pawl", spellings: ["Paul", "Pawl"] },
    { id: "all-awl", spellings: ["All", "Awl"] },
    { id: "ball-bawl", spellings: ["Ball", "Bawl"] },
    { id: "gall-gaul", spellings: ["Gall", "Gaul"] },
    { id: "hall-haul", spellings: ["Hall", "Haul"] },
    { id: "mall-maul", spellings: ["Mall", "Maul"] },
    { id: "saul-sol", spellings: ["Saul", "Sol"] },
    { id: "yall-yawl", spellings: ["Y'all", "Yawl", "Yall"] },
    { id: "coy-koi", spellings: ["Coy", "Koi"] },
    { id: "oy-oi", spellings: ["Oy", "Oi"] },
    { id: "dam-damn", spellings: ["Dam", "Damn"] },
    { id: "lamb-lam", spellings: ["Lamb", "Lam"] },
    { id: "maam-mam", spellings: ["Ma'am", "Mam"] },
    { id: "knot-not", spellings: ["Knot", "Not"] },
    { id: "sent-cent-scent", spellings: ["Sent", "Cent", "Scent"] },
    { id: "wayne-wain", spellings: ["Wayne", "Wain"] },
    { id: "bane-bain", spellings: ["Bane", "Bain"] },
    { id: "cane-cain-kane", spellings: ["Cane", "Cain", "Kane"] },
    { id: "fane-fain-feign", spellings: ["Fane", "Fain", "Feign"] },
    { id: "jane-jayne", spellings: ["Jane", "Jayne"] },
    { id: "lane-layne", spellings: ["Lane", "Layne"] },
    { id: "mane-main", spellings: ["Mane", "Main"] },
    { id: "pane-pain", spellings: ["Pane", "Pain"] },
    { id: "rain-reign-rein", spellings: ["Rain", "Reign", "Rein"] },
    { id: "shane-shayne", spellings: ["Shane", "Shayne"] },
    { id: "vane-vain-vein", spellings: ["Vane", "Vain", "Vein"] },
    { id: "fill-phil", spellings: ["Fill", "Phil"] },
    { id: "gill-gil", spellings: ["Gill", "Gil"] },
    { id: "til-till", spellings: ["Til", "Till", "'Til"] }
  ];

  const names = [
  {
    "name": "Ben",
    "groupId": "group_01_ben"
  },
  {
    "name": "Glen",
    "groupId": "group_01_ben"
  },
  {
    "name": "Jenn",
    "groupId": "group_01_ben"
  },
  {
    "name": "Ken",
    "groupId": "group_01_ben"
  },
  {
    "name": "Beth",
    "groupId": "group_02_beth"
  },
  {
    "name": "Seth",
    "groupId": "group_02_beth"
  },
  {
    "name": "Bob",
    "groupId": "group_03_bob"
  },
  {
    "name": "Rob",
    "groupId": "group_03_bob"
  },
  {
    "name": "Brad",
    "groupId": "group_04_brad"
  },
  {
    "name": "Chad",
    "groupId": "group_04_brad"
  },
  {
    "name": "Tad",
    "groupId": "group_04_brad"
  },
  {
    "name": "Bruce",
    "groupId": "group_05_bruce"
  },
  {
    "name": "Carl",
    "groupId": "group_06_carl"
  },
  {
    "name": "Charles",
    "groupId": "group_07_charles"
  },
  {
    "name": "Chris",
    "groupId": "group_08_chris"
  },
  {
    "name": "Chuck",
    "groupId": "group_09_chuck"
  },
  {
    "name": "Claire",
    "groupId": "group_10_claire"
  },
  {
    "name": "Dan",
    "groupId": "group_11_dan"
  },
  {
    "name": "Stan",
    "groupId": "group_11_dan"
  },
  {
    "name": "Van",
    "groupId": "group_11_dan"
  },
  {
    "name": "Dave",
    "groupId": "group_12_dave"
  },
  {
    "name": "Doug",
    "groupId": "group_13_doug"
  },
  {
    "name": "Earl",
    "groupId": "group_14_earl"
  },
  {
    "name": "Frank",
    "groupId": "group_15_frank"
  },
  {
    "name": "Hank",
    "groupId": "group_15_frank"
  },
  {
    "name": "Fred",
    "groupId": "group_16_fred"
  },
  {
    "name": "Ed",
    "groupId": "group_16_fred"
  },
  {
    "name": "Ned",
    "groupId": "group_16_fred"
  },
  {
    "name": "Ted",
    "groupId": "group_16_fred"
  },
  {
    "name": "George",
    "groupId": "group_17_george"
  },
  {
    "name": "Grace",
    "groupId": "group_18_grace"
  },
  {
    "name": "Ace",
    "groupId": "group_18_grace"
  },
  {
    "name": "Chase",
    "groupId": "group_18_grace"
  },
  {
    "name": "Grant",
    "groupId": "group_19_grant"
  },
  {
    "name": "Greg",
    "groupId": "group_20_greg"
  },
  {
    "name": "Craig",
    "groupId": "group_20_greg"
  },
  {
    "name": "Meg",
    "groupId": "group_20_greg"
  },
  {
    "name": "Peg",
    "groupId": "group_20_greg"
  },
  {
    "name": "Jack",
    "groupId": "group_21_jack"
  },
  {
    "name": "Jake",
    "groupId": "group_22_jake"
  },
  {
    "name": "Drake",
    "groupId": "group_22_jake"
  },
  {
    "name": "James",
    "groupId": "group_23_james"
  },
  {
    "name": "Jean",
    "groupId": "group_24_jean"
  },
  {
    "name": "Jeff",
    "groupId": "group_25_jeff"
  },
  {
    "name": "Jess",
    "groupId": "group_26_jess"
  },
  {
    "name": "Jim",
    "groupId": "group_27_jim"
  },
  {
    "name": "Kim",
    "groupId": "group_27_jim"
  },
  {
    "name": "Joe",
    "groupId": "group_28_joe"
  },
  {
    "name": "Beau",
    "groupId": "group_28_joe"
  },
  {
    "name": "Bo",
    "groupId": "group_28_joe"
  },
  {
    "name": "Jo",
    "groupId": "group_28_joe"
  },
  {
    "name": "John",
    "groupId": "group_29_john"
  },
  {
    "name": "Dawn",
    "groupId": "group_29_john"
  },
  {
    "name": "Shawn",
    "groupId": "group_29_john"
  },
  {
    "name": "Josh",
    "groupId": "group_30_josh"
  },
  {
    "name": "Keith",
    "groupId": "group_31_keith"
  },
  {
    "name": "Heath",
    "groupId": "group_31_keith"
  },
  {
    "name": "Kyle",
    "groupId": "group_32_kyle"
  },
  {
    "name": "Lyle",
    "groupId": "group_32_kyle"
  },
  {
    "name": "Liz",
    "groupId": "group_33_liz"
  },
  {
    "name": "Lou",
    "groupId": "group_34_lou"
  },
  {
    "name": "Sue",
    "groupId": "group_34_lou"
  },
  {
    "name": "Drew",
    "groupId": "group_34_lou"
  },
  {
    "name": "Mark",
    "groupId": "group_35_mark"
  },
  {
    "name": "Clark",
    "groupId": "group_35_mark"
  },
  {
    "name": "Mike",
    "groupId": "group_36_mike"
  },
  {
    "name": "Ike",
    "groupId": "group_36_mike"
  },
  {
    "name": "Pat",
    "groupId": "group_37_pat"
  },
  {
    "name": "Paul",
    "groupId": "group_38_paul"
  },
  {
    "name": "Saul",
    "groupId": "group_38_paul"
  },
  {
    "name": "Ralph",
    "groupId": "group_39_ralph"
  },
  {
    "name": "Ross",
    "groupId": "group_40_ross"
  },
  {
    "name": "Roy",
    "groupId": "group_41_roy"
  },
  {
    "name": "Joy",
    "groupId": "group_41_roy"
  },
  {
    "name": "Ruth",
    "groupId": "group_42_ruth"
  },
  {
    "name": "Sam",
    "groupId": "group_43_sam"
  },
  {
    "name": "Cam",
    "groupId": "group_43_sam"
  },
  {
    "name": "Pam",
    "groupId": "group_43_sam"
  },
  {
    "name": "Scott",
    "groupId": "group_44_scott"
  },
  {
    "name": "Steve",
    "groupId": "group_45_steve"
  },
  {
    "name": "Trent",
    "groupId": "group_46_trent"
  },
  {
    "name": "Brent",
    "groupId": "group_46_trent"
  },
  {
    "name": "Vince",
    "groupId": "group_47_vince"
  },
  {
    "name": "Walt",
    "groupId": "group_48_walt"
  },
  {
    "name": "Wayne",
    "groupId": "group_49_wayne"
  },
  {
    "name": "Dane",
    "groupId": "group_49_wayne"
  },
  {
    "name": "Jane",
    "groupId": "group_49_wayne"
  },
  {
    "name": "Lane",
    "groupId": "group_49_wayne"
  },
  {
    "name": "Shane",
    "groupId": "group_49_wayne"
  },
  {
    "name": "Will",
    "groupId": "group_50_will"
  },
  {
    "name": "Bill",
    "groupId": "group_50_will"
  }
];

  function normalize(value) {
    return String(value ?? "")
      .trim()
      .replace(/[‘’]/g, "'")
      .replace(/[‐‑–—]/g, "-")
      .toLowerCase();
  }

  const homophoneById = new Map();
  const homophoneBySpelling = new Map();

  homophoneGroups.forEach(group => {
    homophoneById.set(normalize(group.id), group);

    group.spellings.forEach(spelling => {
      homophoneBySpelling.set(normalize(spelling), group);
    });
  });

  function getHomophoneRecord(value) {
    const target = normalize(value);
    return homophoneById.get(target) || homophoneBySpelling.get(target) || null;
  }

  function getRhymeKey(value) {
    const record = getHomophoneRecord(value);
    return record ? record.id : normalize(value);
  }

  function getDefinition(value) {
    return window.BEASTIE_RHYME_DEFINITIONS?.[normalize(value)] || "";
  }

  function getHomophones(value) {
    const record = getHomophoneRecord(value);

    if (record) {
      return record.spellings.slice();
    }

    const spelling = String(value ?? "").trim();
    return spelling ? [spelling] : [];
  }

  function getNameRecord(name) {
    const target = normalize(name);
    return names.find(item => normalize(item.name) === target) || null;
  }

  function getGroupById(groupId) {
    return groups.find(group => group.id === groupId) || null;
  }

  function getGroupForName(name) {
    const nameRecord = getNameRecord(name);
    if (!nameRecord) return null;
    return getGroupById(nameRecord.groupId);
  }

  function getRhymeChoicesForName(name, usedRhymes = []) {
    const group = getGroupForName(name);
    if (!group) return [];

    const used = Array.isArray(usedRhymes) ? usedRhymes : [usedRhymes];
    const blockedKeys = new Set(used.map(getRhymeKey));
    const selectedKey = getRhymeKey(name);
    const seenKeys = new Set();
    const choices = [];

    blockedKeys.add(selectedKey);

    group.rhymes.forEach(rhyme => {
      const key = getRhymeKey(rhyme);

      if (blockedKeys.has(key) || seenKeys.has(key)) {
        return;
      }

      seenKeys.add(key);

      choices.push({
        key,
        display: rhyme,
        options: getHomophones(rhyme)
      });
    });

    return choices;
  }

  function getRhymesForName(name, usedRhymes = []) {
    return getRhymeChoicesForName(name, usedRhymes)
      .flatMap(choice => choice.options);
  }

  function isRhymeAvailable(name, rhyme, usedRhymes = []) {
    const rhymeKey = getRhymeKey(rhyme);

    return getRhymeChoicesForName(name, usedRhymes)
      .some(choice => choice.key === rhymeKey);
  }

  // Random order without replacement: every rhyme group gets a turn.
  const randomizerStorageKey = "beastie-rap-group-order-v1";
  const eligibleGroupIds = [...new Set(names.map(item => item.groupId))];
  let remainingGroupIds = [];
  let lastGroupId = null;

  try {
    const saved = JSON.parse(localStorage.getItem(randomizerStorageKey));
    if (saved && Array.isArray(saved.remaining) &&
        saved.remaining.every(id => eligibleGroupIds.includes(id)) &&
        new Set(saved.remaining).size === saved.remaining.length &&
        eligibleGroupIds.includes(saved.last)) {
      remainingGroupIds = saved.remaining;
      lastGroupId = saved.last;
    }
  } catch {
    // Private browsing or unavailable storage still allows session randomization.
  }

  function pickRandomName() {
    if (!remainingGroupIds.length) {
      remainingGroupIds = eligibleGroupIds.slice();
      for (let i = remainingGroupIds.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingGroupIds[i], remainingGroupIds[j]] =
          [remainingGroupIds[j], remainingGroupIds[i]];
      }
      // Avoid repeating the final group when a fresh shuffle begins.
      const last = remainingGroupIds.length - 1;
      if (last > 0 && remainingGroupIds[last] === lastGroupId) {
        const j = Math.floor(Math.random() * last);
        [remainingGroupIds[last], remainingGroupIds[j]] =
          [remainingGroupIds[j], remainingGroupIds[last]];
      }
    }
    const groupId = remainingGroupIds.pop();
    lastGroupId = groupId;
    try {
      localStorage.setItem(randomizerStorageKey,
        JSON.stringify({ remaining: remainingGroupIds, last: lastGroupId }));
    } catch {}
    const candidates = names.filter(item => item.groupId === groupId);
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function pickRandomRhyme(name, usedRhymes = []) {
    const choices = getRhymeChoicesForName(name, usedRhymes);

    if (choices.length === 0) {
      return null;
    }

    return choices[Math.floor(Math.random() * choices.length)];
  }

  window.BEASTIE_RAP_DATA = Object.freeze({
    groups,
    names,
    homophoneGroups,
    getNameRecord,
    getGroupById,
    getGroupForName,
    getHomophoneRecord,
    getHomophones,
    getDefinition,
    getRhymeKey,
    getRhymeChoicesForName,
    getRhymesForName,
    isRhymeAvailable,
    pickRandomRhyme,
    pickRandomName
  });
})();
