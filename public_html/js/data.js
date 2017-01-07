var rooms = [//All the rooms of the map and their data
  {//Room index: 0
    name:"Floor 2 Reception",
    image:"receptionArea0.png",
    description:"This is a reception area for the floor you’re on. There isn't much in the room apart from a few chairs and a desk. One of the doors is labelled Lift Maintenance and another is labelled Visitor's waiting room. At the far end of the room is a lift. The call buttons for the lift are lit up by red backlights, the lift must be using the same backup generators as the emergency lights.",
    doors:[
      {
        keys:[],
        leadsTo:1
      },
      {
        keys:[],
        leadsTo:7
      },
      {
        keys:[],
        leadsTo:8
      },
      {
        keys:["011"],
        leadsTo:9
      },
      {
        keys:[],
        leadsTo:10
      },
      {
        keys:[],
        leadsTo:33
      }
    ],
    tasks:[
      {
        name:"Search behind the desk",
        keys:[],
        results:[
          {
            message:"You find a small brass key",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"003",
                name:"Small key",
                description:"A small brass key",
                actions:[
                  {//Action: 0
                    snowflake:"0",
                    roomIndex:2,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 1
                    snowflake:"1",
                    roomIndex:3,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 2
                    snowflake:"2",
                    roomIndex:4,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 3
                    snowflake:"3",
                    roomIndex:5,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 4
                    snowflake:"4",
                    roomIndex:6,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 5
                    snowflake:"5",
                    roomIndex:13,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 6
                    snowflake:"6",
                    roomIndex:14,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 7
                    snowflake:"7",
                    roomIndex:15,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 8
                    snowflake:"8",
                    roomIndex:16,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 9
                    snowflake:"9",
                    roomIndex:17,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 10
                    snowflake:"10",
                    roomIndex:24,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 11
                    snowflake:"11",
                    roomIndex:25,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 12
                    snowflake:"12",
                    roomIndex:26,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 13
                    snowflake:"13",
                    roomIndex:27,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 14
                    snowflake:"14",
                    roomIndex:28,
                    name:"Try to unlock the top draw"
                  },
                  {//Action: 15
                    snowflake:"15",
                    roomIndex:7,
                    name:"Try to unlock the door"
                  },
                  {//Action: 16
                    snowflake:"16",
                    roomIndex:7,
                    name:"Try to unlock the filing cabinet"
                  },
                  {//Action: 17
                    snowflake:"17",
                    roomIndex:8,
                    name:"Try to unlock the second locker"
                  }
                ]
              }
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"007",
                name:"Patient file",
                description:"The patient in this file is called [name]. They're [age] years old and are a [height] tall [gender]",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Assume this is you"
                  }
                ]
              }
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"008",
                name:"Patient file",
                description:"The patient in this file is called [name]. They're [age] years old and are a [height] tall [gender]",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Assume this is you"
                  }
                ]
              }
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"009",
                name:"Patient file",
                description:"The patient in this file is called [name]. They're [age] years old and are a [height] tall [gender]",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Assume this is you"
                  }
                ]
              }
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"010",
                name:"Patient file",
                description:"The patient in this file is called [name]. They're [age] years old and are a [height] tall [gender]",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Assume this is you"
                  }
                ]
              }
          }
        ]
      }
    ]
  },
  {//Room index: 1
    name:"Floor 2 Ward",
    image:"ward0.png",
    description:"This ward is empty. There is nothing on any of the walls and there is nothing to do apart from walk elsewhere",
    doors:[
      {
        keys:[],
        leadsTo:2
      },
      {
        keys:[],
        leadsTo:3
      },
      {
        keys:[],
        leadsTo:4
      },
      {
        keys:[],
        leadsTo:5
      },
      {
        keys:[],
        leadsTo:6
      },
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[]
  },
  {//Room index: 2
    name:"Patient room 2A",
    image:"patientroom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:1
      }
    ],
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"There's nothing under the bed",
            chance:100,
            isRepeatable:true,
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
            item:{
                snowflake:"004",
                name:"Watch",
                description:"This watch looks too small for your wrist, but it is working",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Check the time"
                  }
                ]
              }
          },
          {
            message:"You find a set of keys",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"005",
                name:"Set of keys",
                description:"These look like personal keys, there's 3 door keys and one car key for a BMW. They probably belong to the patient who was in this room",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Make the car's horn beep"
                  },
                  {
                    snowflake:"1",
                    roomIndex:2,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"2",
                    roomIndex:3,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"3",
                    roomIndex:4,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"4",
                    roomIndex:5,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"5",
                    roomIndex:6,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"6",
                    roomIndex:13,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"7",
                    roomIndex:14,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"8",
                    roomIndex:15,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"9",
                    roomIndex:16,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"10",
                    roomIndex:17,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"11",
                    roomIndex:24,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"12",
                    roomIndex:25,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"13",
                    roomIndex:26,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"14",
                    roomIndex:27,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"15",
                    roomIndex:28,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"16",
                    roomIndex:7,
                    name:"Try to unlock the door"
                  },
                  {
                    snowflake:"17",
                    roomIndex:7,
                    name:"Try to unlock the filing cabinet"
                  },
                  {
                    snowflake:"18",
                    roomIndex:8,
                    name:"Try to unlock the second locker"
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
            message:"You find nothing in the bottom draw",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 3
    name:"Patient Room 2B",
    image:"patientroom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:1
      }
    ],
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"There's nothing under the bed",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the top draw",
        keys:["003"],
        results:[
          {
            message:"There's nothing in the top draw",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the bottom draw",
        keys:[],
        results:[
          {
            message:"There's nothing in the bottom draw",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 4
    name:"Patient Room 2C",
    image:"patientroom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:1
      }
    ],
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"There's nothing under the bed",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the top draw",
        keys:["003"],
        results:[
          {
            message:"You find a smartphone",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"006",
                name:"Smartphone",
                description:"This looks like quite a nice smartphone, too bad there's no signal",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Check the time"
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
            message:"There is nothing in the bottom draw",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 5
    name:"Patient Room 2D",
    image:"patientroom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:1
      }
    ],
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"There's nothing under the bed",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the top draw",
        keys:["003"],
        results:[
          {
            message:"There is nothing in the top draw",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the bottom draw",
        keys:[],
        results:[
          {
            message:"There is nothing in the bottom draw",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 6
    name:"Patient Room 2E",
    image:"patientroom0.png",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:1
      }
    ],
    tasks:[
      {
        name:"Look under the bed",
        keys:[],
        results:[
          {
            message:"There is nothing under the bed",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the top draw",
        keys:["003"],
        results:[
          {
            message:"You find your wallet",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"002",
                name:"Wallet",
                description:"This appears to be your wallet. There's a little bit of money but no ID",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:10,
                    name:"Use the vending machine"
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
            message:"You find your clothes",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"001",
                name:"Clothes",
                description:"You guess these are your clothes, they look like they fit",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Wear"
                  }
                ]
              }
          }
        ]
      }
    ]
  },
  {//Room index: 7
    name:"Office",
    image:"office0.png",
    description:"This looks like the office of someone important, perhaps even the person who runs the hospital. As you walk in you accidentally kick the door stopper away and the door slams shut and locks behind you - what sort of office needs a key from the inside?? Who ever the office belongs to clearly left in a rush, there's paper work all over the desk and they left their coat behind hanging on a hook by the door.",
    doors:[
      {
        keys:["016"],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Search the desk draws",
        keys:[],
        results:[
          {
            message:"You find a pen",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"012",
                name:"Pen",
                description:"This pen is black… Well, the ink is - the actual pen is grey",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Write on the wall"
                  }
                ]
              }
          },
          {
            message:"You find a small silver key",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"013",
                name:"Silver key",
                description:"This key looks too small for the door, but it must go to something?",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:7,
                    name:"Try the door"
                  },
                  {
                    snowflake:"1",
                    roomIndex:7,
                    name:"Try the filing cabinet"
                  },
                  {
                    snowflake:"2",
                    roomIndex:2,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"3",
                    roomIndex:3,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"4",
                    roomIndex:4,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"5",
                    roomIndex:5,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"6",
                    roomIndex:6,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"7",
                    roomIndex:13,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"8",
                    roomIndex:14,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"9",
                    roomIndex:15,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"10",
                    roomIndex:16,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"11",
                    roomIndex:17,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"12",
                    roomIndex:24,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"13",
                    roomIndex:25,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"14",
                    roomIndex:26,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"15",
                    roomIndex:27,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"16",
                    roomIndex:28,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"17",
                    roomIndex:8,
                    name:"Try to unlock the second locker"
                  }
                ]
              }
          }
        ]
      },
      {
        name:"Search through the filing cabinet",
        keys:["013"],
        results:[
          {
            message:"You find a scrap of paper",
            chance:20,
            isRepeatable:false,
            item:{
                snowflake:"014",
                name:"Scrap of paper",
                description:"This scrap of paper has a four-digit code written on it",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Read the code"
                  },
                  {
                    snowflake:"1",
                    roomIndex:0,
                    name:"Enter the code into the safe"
                  }
                ]
              }
          }
        ]
      },
      {
        name:"Lift up the rug",
        keys:[],
        results:[
          {
            message:"You find a 20p coin",
            chance:70,
            isRepeatable:false,
            item:{
                snowflake:"015",
                name:"20p coin",
                description:"This used to be enough money to buy a Freddo™",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Lick it"
                  }
                ]
              }
          }
        ]
      },
      {
        name:"Search the shelves",
        keys:[],
        results:[
          {
            message:"There's just some medical books - nothing interesting",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the coat pockets",
        keys:[],
        results:[
          {
            message:"You find some keys",
            chance:100,
            isRepeatable:false,
            item:{
                snowflake:"016",
                name:"Set of keys",
                description:"These look like personal keys but there's quite a lot of them. They must belong to someone important",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:7,
                    name:"Try to unlock the door"
                  },
                  {
                    snowflake:"1",
                    roomIndex:1,
                    name:"Try to unlock the filing cabinet"
                  },
                  {
                    snowflake:"2",
                    roomIndex:8,
                    name:"Try to unlock the second locker"
                  },
                  {
                    snowflake:"3",
                    roomIndex:2,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"4",
                    roomIndex:3,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"5",
                    roomIndex:4,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"6",
                    roomIndex:5,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"7",
                    roomIndex:6,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"8",
                    roomIndex:13,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"9",
                    roomIndex:14,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"10",
                    roomIndex:15,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"11",
                    roomIndex:16,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"12",
                    roomIndex:17,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"13",
                    roomIndex:24,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"14",
                    roomIndex:25,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"15",
                    roomIndex:26,
                    name:""
                  },
                  {
                    snowflake:"16",
                    roomIndex:27,
                    name:"Try to unlock the top draw"
                  },
                  {
                    snowflake:"17",
                    roomIndex:28,
                    name:"Try to unlock the top draw"
                  }
                ]
              }
          }
        ]
      },
      {
        name:"Check in the bin",
        keys:[],
        results:[
          {
            message:"There's nothing apart from an empty can of coke which you decide to leave there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 8
    name:"Doctor's Lounge",
    image:"doctorsLounge0.png",
    description:"This room looks like any standard work break room, there's a small kitchen area in one corner, a TV with two sofas in the opposite. Against one wall is a couple of large lockers",
    doors:[
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Look in the fridge",
        keys:[],
        results:[
          {
            message:"There's nothing useful here apart from some stale food - the power must have been out for a while…",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Turn on the TV",
        keys:[],
        results:[
          {
            message:"Nothing happens, don't forget there's no power!",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the first locker",
        keys:[],
        results:[
          {
            message:"There is nothing in here. That explains why it was left open",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the second locker",
        keys:["016"],
        results:[
          {
            message:"NEEDS DOING",
            chance:100,
            isRepeatable:true,
            item:{
                snowflake:"0000",
                name:"NEEDS DOING",
                description:"The second locker needs doing!",
                actions:[]
              }
          }
        ]
      }
    ]
  },
  {//Room index: 9
    name:"Lift Maintenance",
    image:"liftMaintenance0.png",
    description:"This is a very small, dark room. On the left and right walls are lots of controls and dials for the lift - one of them appears to be a wheel to manually move the lift up and down. In front is a cage door padlocked shut that appears to drop right into the lift shaft - currently it's blocked by the lift itself",
    doors:[
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Move the lift up a floor",
        keys:[],
        results:[
          {
            message:"",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Move the lift down a floor",
        keys:[],
        results:[
          {
            message:"",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      }
    ]
  },
  {//Room index: 10
    name:"Visitor's Waiting Room",
    image:"waitingRoom0.png",
    description:"This room is mostly empty, there are lots of cheap plastic chairs and there's a table in the middle with magazines on it. In the corner there is an old vending machine with drinks and chocolate bars in it",
    doors:[
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Read a magazine",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          },
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          },
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          },
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          },
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Shake the vending machine",
        keys:[],
        results:[
          {
            message:"You get a can of coke",
            chance:5,
            isRepeatable:true,
            item:{
                snowflake:"018",
                name:"Can of Coke",
                description:"This can on coke is warm, but it's still drinkable",
                actions:[
                  {
                    snowflake:"0",
                    roomIndex:-1,
                    name:"Drink"
                  }
                ]
              }
          }
        ]
      }
    ]
  }
]
