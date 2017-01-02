var rooms = [//All the rooms of the map and their data
  {//Room ID 0
    name:"Patient Room 3E",//This the header of the webpage
    floorplan:"patientRoom0.png",//This is a top-down floorplan image for the room
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",//This is the paragraph of the webpage
    /*Each task in a room will have a small description in the paragraph above
    and then each a few words on buttons to show they're actions*/
    tasks:[
        {
          name:"Look under the bed",//This is the text for the button
          keys:[],//These unique IDs link to prerequisite inventory items
          /*Entering a room with an inventory item with this ID, will change the
          enabled setting - as will doing another task in the same room which gives you the needed item*/
          results:[
            {
              message:"You find nothing.",
              chance:100,
              isRepeatable:false,
              item:null
            }
          ]
        },
        {
          name:"Look in the top draw",
          keys:["003"],
          results:[
            {
              message:"You find your wallet.",
              chance:100,
              isRepeatable:false,
              item:
              {
                name:"Wallet",
                snowflake:"002",
                description:"This appears to be your wallet. There's a little bit of money but no ID.",
                actions:[
                  {
                    room:-1,
                    name:"Put on your clothes"
                  }
                ]
              }
            }
          ]
        },
        {
          name:"Look in the bottom draw",
          keys:[],
          results:[
            {
              message:"You find your clothes.",
              chance:100,
              isRepeatable:false,
              item:
              {
                name:"Clothes",
                snowflake:"001",
                description:"You guess these are your clothes.",
                actions:[
                  {
                    room:-1,
                    name:"Put on your clothes"
                  }
                ]
              }
            }
          ]
        }
      ],
    /*Each door in a room has a name which also can act as a description
    this will show above a button to use the door*/
    doors:[
        {
          keySnowflakes:[],//This unique ID links to a prerequisite inventory item
          /*Entering a room with an inventory item with this ID,
          will change the locked setting - as will doing a task
          in the same room which gives you the needed item*/
          leadsTo:1//This is the index of the room this door leads to
        }
      ]
  },
  {//Room ID 1
    name:"Floor 3 Ward",
    floorplan:"ward0.png",
    description:"The ward is empty, there is no one in sight and the whole hospital is silent.",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:3
        },
        {
          keySnowflakes:[],
          leadsTo:4
        },
        {
          keySnowflakes:[],
          leadsTo:5
        },
        {
          keySnowflakes:[],
          leadsTo:6
        },
        {
          keySnowflakes:[],
          leadsTo:0
        },
        {
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {//Forgot to add a room of index: 2
    //
  },
  {//Room ID 3
    name:"Patient Room 3A",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"You find nothing",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Look in the top draw",
        keys:["003"],
        results:[
          {
            message:"You find a watch",
            chance:100,
            isRepeatable:false,
            item:
            {
              name:"Watch",
              snowflake:"004",
              description:"This watch looks too small for your wrist, but it is working.",
              actions:[
                {
                  room:-1,
                  name:"Check the time"
                }
              ]
            }
          }
        ]
      }
    ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {//Room ID 4
    name:"Patient Room 3B",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {//Room ID 5
    name:"Patient Room 3C",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {//Room ID 6
    name:"Patient Room 3D",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:1
        }
      ]
  },
  {//Room ID 7
    name:"Floor 3 Reception",
    floorplan:"receptionArea0.png",
    description:"This is a reception area for the floor you’re on.",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:8
        },
        {
          keySnowflakes:[],
          leadsTo:9
        },
        {
          keySnowflakes:[],
          leadsTo:10
        },
        {
          keySnowflakes:[],
          leadsTo:11
        },
        {
          keySnowflakes:[],
          leadsTo:1
        },
        {
          keySnowflakes:[],
          leadsTo:12
        }
      ]
  },
  {//Room ID 8
    name:"Office",
    floorplan:"office0.png",
    description:"This looks like the office of someone important, prehaps even the person who runs the hospital. As you walk in you accidentally kick the door stopper away and the door slams shut and locks behind you - what sort of office needs a key from the inside??",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:["016"],
          leadsTo:7
        }
      ]
  },
  {//Room ID 9
    name:"Doctor's Lounge",
    floorplan:"doctorsLounge0.png",
    description:"000",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {//Room ID 10
    name:"Supplies Room",
    floorplan:"supplies0.png",
    description:"000",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {//Room ID 11
    name:"Visitors Waiting Room",
    floorplan:"waitingRoom0.png",
    description:"000",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {//Room ID 12
    name:"Lift",
    floorplan:"lift0.png",
    description:"000",
    tasks:[
      ],
    doors:[
        {
          keySnowflakes:["ddd"],
          leadsTo:24
        },
        {
          keySnowflakes:[],
          leadsTo:19
        },
        {
          keySnowflakes:[],
          leadsTo:7
        }
      ]
  },
  {//Room ID 13
    name:"Floor 2 Ward",
    floorplan:"Ward0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:18
      },
      {
        keySnowflakes:[],
        leadsTo:17
      },
      {
        keySnowflakes:[],
        leadsTo:16
      },
      {
        keySnowflakes:[],
        leadsTo:15
      },
      {
        keySnowflakes:[],
        leadsTo:14
      },
      {
        keySnowflakes:[],
        leadsTo:7
      }
    ]
  },
  {//Room ID 14
    name:"Patient Room 2E",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:13
      }
    ]
  },
  {//Room ID 15
    name:"Patient Room 2D",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:13
      }
    ]
  },
  {//Room ID 16
    name:"Patient Room 2C",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:13
      }
    ]
  },
  {//Room ID 17
    name:"Patient Room 2B",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:13
      }
    ]
  },
  {//Room ID 18
    name:"Patient Room 2A",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:13
      }
    ]
  },
  {//Room ID 19
    name:"Floor 2 Reception",
    floorplan:"receptionArea0.png",
    description:"This is a reception area for the floor you’re on.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:20
      },
      {
        keySnowflakes:[],
        leadsTo:21
      },
      {
        keySnowflakes:[],
        leadsTo:22
      },
      {
        keySnowflakes:[],
        leadsTo:23
      },
      {
        keySnowflakes:[],
        leadsTo:13
      },
      {
        keySnowflakes:[],
        leadsTo:12
      }
    ]
  },
  {//Room ID 20
    name:"OR 1",
    floorplan:"or0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:19
      }
    ]
  },
  {//Room ID 21
    name:"OR 2",
    floorplan:"or0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:19
      }
    ]
  },
  {//Room ID 22
    name:"Lift Maintainance",
    floorplan:"liftMaintainance0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:19
      }
    ]
  },
  {//Room ID 23
    name:"Visitors Waiting Room",
    floorplan:"waitingRoom0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:19
      }
    ]
  },
  {//Room ID 24
    name:"Floor 1 Reception",
    floorplan:"receptionArea0.png",
    description:"This is a reception area for the floor you’re on.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:31
      },
      {
        keySnowflakes:[],
        leadsTo:32
      },
      {
        keySnowflakes:[],
        leadsTo:33
      },
      {
        keySnowflakes:[],
        leadsTo:34
      },
      {
        keySnowflakes:[],
        leadsTo:25
      },
      {
        keySnowflakes:[],
        leadsTo:12
      }
    ]
  },
  {//Room ID 25
    name:"Floor 1 Ward",
    floorplan:"ward0.png",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:30
      },
      {
        keySnowflakes:[],
        leadsTo:29
      },
      {
        keySnowflakes:[],
        leadsTo:28
      },
      {
        keySnowflakes:[],
        leadsTo:27
      },
      {
        keySnowflakes:[],
        leadsTo:26
      },
      {
        keySnowflakes:[],
        leadsTo:24
      }
    ]
  },
  {//Room ID 26
    name:"Patient Room 1E",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:25
      }
    ]
  },
  {//Room ID 27
    name:"Patient Room 1D",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:25
      }
    ]
  },
  {//Room ID 28
    name:"Patient Room 1C",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:25
      }
    ]
  },
  {//Room ID 29
    name:"Patient Room 1B",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:25
      }
    ]
  },
  {//Room ID 30
    name:"Patient Room 1A",
    floorplan:"patientRoom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a a cabinet with two draws in it.",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:25
      }
    ]
  },
  {//Room ID 31
    name:"Another Room",
    floorplan:"000",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:24
      }
    ]
  },
  {//Room ID 32
    name:"Another Room",
    floorplan:"000",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:24
      }
    ]
  },
  {//Room ID 33
    name:"Another Room",
    floorplan:"000",
    description:"000",
    tasks:[
      ],
    doors:[
      {
        keySnowflakes:[],
        leadsTo:24
      }
    ]
  },
  {//Room ID 34
    name:"Outside!",
    floorplan:"000",
    description:"000",
    tasks:[
      ],
    doors:[
      ]
  }
]
