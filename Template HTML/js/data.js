var rooms = [//All the rooms of the map and their data
  {
    name:"Patient Room 5",//This the header of the webpage
    floorplan:"patientRoom0.png",//This is a top-down floorplan image for the room
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",//This is the paragraph of the webpage
    tasks:
    /*Each task in a room will have a small description in a paragraph
    and then a few words on a button to show it's action*/
      [
        {
          name:"Look under the bed",//This is the text for the button
          keys:[],//These unique IDs link to prerequisite inventory items
          /*Entering a room with an inventory item with this ID, will change the
          enabled setting - as will doing another task n the same room which gives you the needed item*/
          results:
          [
            {
              message:"You find your wallet.",
              chance:100,
              item:
              {
                name:"Wallet",
                snowflake:"002",
                description:"This appears to be your wallet"
              }
            }
          ]
        },
        {
          name:"Look in the top draw",
          keys:["003"]
        },
        {
          name:"Look in the bottom draw",
          keys:[]
        }
      ],
    doors:
    /*Each door in a room has a name which also can act as a description
    this will show above a button to use the door*/
      [
        {
          locked:false,//True means the door is locked
          keySnowflakes:[],//This unique ID links to a prerequisite inventory item
          /*Entering a room with an inventory item with this ID,
          will change the locked setting - as will doing a task
          in the same room which gives you the needed item*/
          leadsTo:1//This is the index of the room this door leads to
        }
      ]
  },
  {
    name:"Ward",
    floorplan:"ward0.png",
    description:"The ward is empty, there is no one in sight and the whole hospital is silent.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:3
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:4
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:5
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:6
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:0
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {},//Forgot to add a room of index: 2
  {
    name:"Patient Room 1",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {
    name:"Patient Room 2",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {
    name:"Patient Room 3",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {
    name:"Patient Room 4",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {
    name:"Reception Area",
    floorplan:"receptionArea0.png",
    description:"This is a reception area for the floor you’re on.",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:8
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:9
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:10
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:11
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:1
        },
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:12
        }
      ]
  },
  {
    name:"Office",
    floorplan:"office0.png",
    description:"This looks like the office of someone important, prehaps even the person who runs the hospital. As you walk in you accidentally kick the door stopper away and the slams shut and locks behind you - what sort of office needs a key from the inside??",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:true,
          keySnowflakes:["016"],
          leadsTo:7
        }
      ]
  },
  {
    name:"Doctor's Lounge",
    floorplan:"doctorsLounge0.png",
    description:"000",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }

      ]
  },
  {
    name:"Supplies Room",
    floorplan:"supplies0.png",
    description:"000",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {
    name:"Visitors Waiting Room",
    floorplan:"waitingRoom0.png",
    description:"000",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {
    name:"Lift",
    floorplan:"lift0.png",
    description:"000",
    tasks:
      [
      ],
    doors:
      [
        {
          locked:false,
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {
    name:"Ward",
    floorplan:"Ward0.png",
    description:"000",
    tasks:
      [
      ],
    doors:
      [
      ]
  },
  {
    name:"Patient Room 5",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
      ]
  },
  {
    name:"Patient Room 4",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:
      [
      ],
    doors:
      [
      ]
  }









]
