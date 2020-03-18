export const reports = {
    report1: {
        dateTime: Date("2020-01-01"),
        created: Date("2020-01-01"),
        updated: Date("2020-01-01"),
        pin: "1234",
        type: "accident",
        officer: "Jo Johanson",
        subject: { firstName: "Ethan", lastName: "Allen", gender: "male" },
        vehicle: {
            vehicleColor: "black",
            vehicleYear: "2014",
            vehicleMake: "Chevrolet",
            vehicleModel: "Sonic",
            licensePlateNumber: "EEE 333",
            licensePlateState: "NY",
            licensePlateCountry: "US",
            vin: "1G1JE5SB0E4237744"
        },
        details: "Doggo ipsum ruff noodle horse woofer stop it fren clouds boof, woofer tungg smol borking doggo with a long snoot for pats very good spot, wrinkler very good spot ur givin me a spook wrinkler. Heckin good boys and girls the neighborhood pupper doge woofer clouds, doggorino doggo. Thicc vvv what a nice floof blop, bork. Wow very biscit what a nice floof very jealous pupper you are doing me a frighten pats, snoot I am bekom fat. Ur givin me a spook shoob puggo smol borking doggo with a long snoot for pats adorable doggo, pupperino wrinkler ur givin me a spook heckin angery woofer heckin, super chub big ol blop. Boofers bork blop smol borking doggo the neighborhood pupper, boof pupper big ol pupper you are doing me the shock. Big ol borkdrive vvv many pats what a nice floof yapper much ruin diet stop it fren, blep smol borking doggo with a long snoot for pats puggo shooberino dat tungg tho most angery pupper I have ever seen. Pupperino h*ck waggy wags heckin vvv, smol borking doggo with a long snoot for pats he made many woofs. Heckin borking doggo pupper heckin angery woofer, length boy waggy wags."
    },
    report2: {
        dateTime: Date("2020-02-19"),
        created: Date("2020-02-19"),
        updated: Date("2020-02-19"),
        pin: "3456",
        type: "traffic stop",
        officer: "Fred Fredericks",
        subject: { firstName: "Benedict", lastName: "Arnold", gender: "male" },
        vehicle: {
            vehicleColor: "green",
            vehicleYear: "2015",
            vehicleMake: "Subaru",
            vehicleModel: "Forester",
            licensePlateNumber: "WOW 409",
            licensePlateState: "WV",
            licensePlateCountry: "US",
            vin: "JF2SJAFC1FH493082"
        },
        details: "Cat ipsum dolor sit amet, meeeeouw. Purrr purr littel cat, little cat purr purr bird bird bird bird bird bird human why take bird out i could have eaten that but plan your travel 𝕄𝔼𝕆𝕎 my water bowl is clean and freshly replenished, so i'll drink from the toilet. Sit in box. Going to catch the red dot today going to catch the red dot today run around the house at 4 in the morning. Ask for petting i love cuddles milk the cow twitch tail in permanent irritation give attitude, or sitting in a box. Mewl for food at 4am find empty spot in cupboard and sleep all day or sitting in a box headbutt owner's knee. Lick yarn hanging out of own butt chew on cable. Sniff sniff jump five feet high and sideways when a shadow moves. Cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit "
    },
    report3: {
        dateTime: Date("2020-02-29"),
        created: Date("2020-02-29"),
        updated: Date("2020-02-29"),
        pin: "1237",
        type: "traffic stop",
        officer: "Christine Christopherson",
        subject: { firstName: "Thomas", lastName: "Paine", gender: "male" },
        vehicle: {
            vehicleColor: "Grey",
            vehicleYear: "2014",
            vehicleMake: "Hyundai",
            vehicleModel: "Sonata",
            licensePlateNumber: "MWM 969",
            licensePlateState: "NH",
            licensePlateCountry: "US",
            vin: "5NPEB4AC8EH823124"
        },
        details: "Bacon ipsum dolor amet burgdoggen turducken meatball ball tip. Leberkas brisket jowl, meatball salami buffalo ham spare ribs. Ball tip shankle picanha shank ham hock turducken short ribs burgdoggen. Prosciutto cow rump cupim drumstick ribeye venison. Ribeye flank cow pork, tri-tip chicken sirloin jerky porchetta short ribs prosciutto kevin t-bone. Pork flank doner cow fatback andouille tri-tip ground round strip steak. Boudin ham ground round picanha, burgdoggen alcatra capicola spare ribs hamburger biltong turkey"
    }
};


export const searchResults1 = {
    vehicles: [
        {
            vehicleColor: "red",
            vehicleYear: "2010",
            vehicleMake: "Toyota",
            vehicleModel: "Tundra",
            licensePlateNumber: "BAD 000",
            licensePlateState: "VT",
            licensePlateCountry: "US",
            vin: "5TFRM5F15AX010217"
        },

        {
            vehicleColor: "silver",
            vehicleYear: "2006",
            vehicleMake: "Dodge",
            vehicleModel: "Dakota",
            licensePlateNumber: "CAT 999",
            licensePlateState: "VT",
            licensePlateCountry: "US",
            vin: "1D7HE22KX6S505416"
        },
        {
            vehicleColor: "black",
            vehicleYear: "2001",
            vehicleMake: "Subaru",
            vehicleModel: "Legacy",
            licensePlateNumber: "SPY 007",
            licensePlateState: "VT",
            licensePlateCountry: "US",
            vin: "4S3BMHB68B3286050"
        }
    ],
    subjects: []
};

export const searchResults2 = {
    vehicles: [],
    subjects: [
        { firstName: "Betsy", lastName: "Ross", gender: "female" },
        { firstName: "Crispus", lastName: "Attucks", gender: "male" },
        { firstName: "Ethan", lastName: "Allen", gender: "male" }
    ]
};

export const searchResults3 = {
    vehicles: [{
        vehicleColor: "black",
        vehicleYear: "2011",
        vehicleMake: "Dodge",
        vehicleModel: "Caliber",
        licensePlateNumber: "FUN 444",
        licensePlateState: "VT",
        licensePlateCountry: "US",
        vin: "1B3CB5HA7BD211369"
    }, {
        vehicleColor: "white",
        vehicleYear: "2015",
        vehicleMake: "Ford",
        vehicleModel: "E-350",
        licensePlateNumber: "BOB 808",
        licensePlateState: "VT",
        licensePlateCountry: "US",
        vin: "1FDEE3FL1FDA10673"
    }, {
        vehicleColor: "black",
        vehicleYear: "2014",
        vehicleMake: "Infinity",
        vehicleModel: "Q60",
        licensePlateNumber: "AAA 444",
        licensePlateState: "VT",
        licensePlateCountry: "US",
        vin: "JN1CV6EK6EM113059"
    }],
    subject: [
        {
            firstName: "Elijah",
            lastName: "Clark",
            gender: "male"
        },
        {
            firstName: "Nancy",
            lastName: "Ward",
            gender: "female"
        },
        {
            firstName: "Deborah",
            lastName: "Samson",
            gender: "female"
        }
    ]
};

