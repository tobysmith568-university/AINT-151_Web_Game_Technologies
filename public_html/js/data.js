var rooms = [//All the rooms of the map and their data
  {//Room index: 0
    name:"Floor 2 Reception",
    image:"receptionArea0.jpg",
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
        leadsTo:32
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
            item:"003"
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:"007"
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:"008"
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:"009"
          },
          {
            message:"You find a patient file",
            chance:100,
            isRepeatable:false,
            item:"010"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 1
    name:"Floor 2 Ward",
    image:"ward0.jpg",
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
    tasks:[],
    wallText:""
  },
  {//Room index: 2
    name:"Patient room 2A",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two drawers in it.",
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
        name:"Look in the top drawer",
        keys:["003"],
        results:[
          {
            message:"You find a watch",
            chance:100,
            isRepeatable:false,
            item:"004"
          },
          {
            message:"You find a set of keys",
            chance:100,
            isRepeatable:false,
            item:"005"
          }
        ]
      },
      {
        name:"Look in the bottom drawer",
        keys:[],
        results:[
          {
            message:"You find nothing in the bottom drawer",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 3
    name:"Patient Room 2B",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two drawers in it.",
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
        name:"Look in the top drawer",
        keys:["003"],
        results:[
          {
            message:"There's nothing in the top drawer",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the bottom drawer",
        keys:[],
        results:[
          {
            message:"There's nothing in the bottom drawer",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 4
    name:"Patient Room 2C",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two drawers in it.",
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
        name:"Look in the top drawer",
        keys:["003"],
        results:[
          {
            message:"You find a smartphone",
            chance:100,
            isRepeatable:false,
            item:"006"
          }
        ]
      },
      {
        name:"Look in the bottom drawer",
        keys:[],
        results:[
          {
            message:"There is nothing in the bottom drawer",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 5
    name:"Patient Room 2D",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two drawers in it.",
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
        name:"Look in the top drawer",
        keys:["003"],
        results:[
          {
            message:"There is nothing in the top drawer",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      },
      {
        name:"Look in the bottom drawer",
        keys:[],
        results:[
          {
            message:"There is nothing in the bottom drawer",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 6
    name:"Patient Room 2E",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two drawers in it.",
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
        name:"Look in the top drawer",
        keys:["003"],
        results:[
          {
            message:"You find your wallet",
            chance:100,
            isRepeatable:false,
            item:"002"
          }
        ]
      },
      {
        name:"Look in the bottom drawer",
        keys:[],
        results:[
          {
            message:"You find your clothes",
            chance:100,
            isRepeatable:false,
            item:"001"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 7
    name:"Office",
    image:"office0.jpg",
    description:"This looks like the office of someone important, perhaps even the person who runs the hospital. As you walk in you accidentally kick the door stopper away and the door slams shut and locks behind you - what sort of office needs a key from the inside?? Who ever the office belongs to clearly left in a rush, there's paper work all over the desk and they left their coat behind hanging on a hook by the door.",
    doors:[
      {
        keys:["016"],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Search the desk drawers",
        keys:[],
        results:[
          {
            message:"You find a pen",
            chance:100,
            isRepeatable:false,
            item:"012"
          },
          {
            message:"You find a small silver key",
            chance:100,
            isRepeatable:false,
            item:"013"
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
            item:"014"
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
            item:"015"
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
            item:"016"
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
    ],
    wallText:""
  },
  {//Room index: 8
    name:"Doctor's Lounge",
    image:"doctorsLounge0.jpg",
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
            item:"0000"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 9
    name:"Lift Maintenance",
    image:"liftMaintenance0.jpg",
    description:"This is a very small, dark room. On the left and right walls are lots of controls and dials for the lift - one of them appears to be a wheel to manually move the lift up and down. In front is a cage door padlocked shut that appears to drop right into the lift shaft - currently it's blocked by the lift itself",
    doors:[
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Move the lift up",
        keys:[],
        results:[
          {
            message:"The lift is now in the space above your floor and you can climb down.",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Climb into the lift shaft",
        keys:["020"],
        results:[
          {
            message:"",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }

    ],
    wallText:"",
    liftUp:false,
    cageOpen:false
  },
  {//Room index: 10
    name:"Visitor's Waiting Room",
    image:"waitingRoom0.jpg",
    description:"This room is mostly empty, there are lots of cheap plastic chairs and there's a table in the middle with magazines on it. In the corner there is an old vending machine with drinks and chocolate bars in it",
    doors:[
      {
        keys:[],
        leadsTo:0
      }
    ],
    tasks:[
      {
        name:"Read a magazine1",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:20,
            isRepeatable:false,
            item:null
          },
        ]
      },
      {
        name:"Read a magazine2",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Read a magazine3",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Read a magazine4",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
      {
        name:"Read a magazine5",
        keys:[],
        results:[
          {
            message:"Did you know NEEDS DOING",
            chance:100,
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
            item:"018"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 11
    name:"Floor 1 Reception",
    image:"receptionArea0.jpg",
    description:"This is a reception area for the floor you’re on. There isn't much in the room apart from a few chairs and a desk. Two of the rooms leading off of this one are labelled as operating rooms",
    doors:[
      {
        keys:[],
        leadsTo:12
      },
      {
        keys:[],
        leadsTo:18
      },
      {
        keys:[],
        leadsTo:19
      },
      {
        keys:[],
        leadsTo:20
      },
      {
        keys:[],
        leadsTo:21
      },
      {
        keys:[],
        leadsTo:32
      }
    ],
    tasks:[
      {
        name:"Search behind the desk",
        keys:[],
        results:[
          {
            message:"You find a small safe",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      },
    ],
    wallText:""
  },
  {//Room index: 12
    name:"Floor 1 Ward",
    image:"ward0.jpg",
    description:"The ward is empty, there is no one in sight and the whole hospital is silent.",
    doors:[
      {
        keys:[],
        leadsTo:13
      },
      {
        keys:[],
        leadsTo:14
      },
      {
        keys:[],
        leadsTo:15
      },
      {
        keys:[],
        leadsTo:16
      },
      {
        keys:[],
        leadsTo:17
      },
      {
        keys:[],
        leadsTo:11
      }
    ],
    tasks:[],
    wallText:""
  },
  {//Room index: 13
    name:"Patient Room 1A",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:12
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 14
    name:"Patient Room 1B",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:12
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 15
    name:"Patient Room 1C",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:12
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 16
    name:"Patient Room 1D",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:12
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 17
    name:"Patient Room 1E",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:12
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 18
    name:"Operating Room 1",
    image:"or0.jpg",
    description:"This operating room looks like it was recently used for a surgery. There's blood over all the tools and operating table. Next to the table is a mobile heartrate monitor letting out a constant beep and showing a flat line - whoever was using it clearly didn't turn it off when they disconnected it from the patient.",
    doors:[
      {
        keys:[],
        leadsTo:11
      }
    ],
    tasks:[
      {
        name:"Take a scalpel",
        keys:[],
        results:[
          {
            message:"You decide not to take a scalpel, who knows what's in the blood on them?",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 19
    name:"Operating Room 2",
    image:"or1.jpg",
    description:"This operating room looks like it is in perfect condition. All the tools and implements look perfectly sterile. The operating table looks clean enough to eat off of, but I guess that's what you would want really?",
    doors:[
      {
        keys:[],
        leadsTo:11
      }
    ],
    tasks:[
      {
        name:"Take a scalpel",
        keys:[],
        results:[
          {
            message:"You pick up a number 10 scalpel",
            chance:100,
            isRepeatable:false,
            item:"019"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 20
    name:"Supplies Room",
    image:"suppliesRoom0.jpg",
    description:"This is quite a small room, and there's nothing in it apart from shelves filled with either lose objects or draws then containing things. The medical supplies look rather organised but the rest of the stuff like pens for the office are a mess. In the corner there is a pile of workman's tools",
    doors:[
      {
        keys:[],
        leadsTo:11
      }
    ],
    tasks:[
      {
        name:"Pick up a box of bandages",
        keys:[],
        results:[
          {
            message:"You pick up a box of 6 bandages",
            chance:100,
            isRepeatable:false,
            item:"022"
          }
        ]
      },
      {
        name:"Pick up a stapler",
        keys:[],
        results:[
          {
            message:"You pick up a stapler",
            chance:100,
            isRepeatable:false,
            item:"023"
          }
        ]
      },
      {
        name:"Pick up a crowbar",
        keys:[],
        results:[
          {
            message:"You pick up a small crowbar",
            chance:100,
            isRepeatable:false,
            item:"011"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 21
    name:"Female Toilets",
    image:"femaleToilets0.jpg",
    description:"This looks like a standard toilet. There are 4 stalls, and 3 sinks. The door for the left most stall has fallen off and there is a toolbox next to it, it looks like it was mid-way through being fixed when whoever was fixing it left.",
    doors:[
      {
        keys:[],
        leadsTo:11
      }
    ],
    tasks:[
      {
        name:"Take a tool",
        keys:[],
        results:[
          {
            message:"You pick up a hammer",
            chance:100,
            isRepeatable:false,
            item:"020"
          }
        ]
      },
      {
        name:"Take a tool",
        keys:[],
        results:[
          {
            message:"You pick up a screwdriver",
            chance:100,
            isRepeatable:false,
            item:"021"
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 22
    name:"Floor 0 Reception",
    image:"receptionArea0.jpg",
    description:"This is a reception area for the ground floor of the hospital, it also looks like the main entrance. There isn't much in the room apart from a few chairs and a desk. At one end of the room, where other floors only had windows, there are some double electric doors leading outside. You can pull the doors open but there appears to be a crashed ambulance blocking your way out",
    doors:[
      {
        keys:[],
        leadsTo:23
      },
      {
        keys:[],
        leadsTo:29
      },
      {
        keys:[],
        leadsTo:30
      },
      {
        keys:[000],
        leadsTo:31
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
            message:"You find a small safe",
            chance:100,
            isRepeatable:false,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 23
    name:"Floor 0 Ward",
    image:"ward0.jpg",
    description:"The ward is empty, there is no one in sight and the whole hospital is silent.",
    doors:[
      {
        keys:[],
        leadsTo:24
      },
      {
        keys:[],
        leadsTo:25
      },
      {
        keys:[],
        leadsTo:26
      },
      {
        keys:[],
        leadsTo:27
      },
      {
        keys:[],
        leadsTo:28
      },
      {
        keys:[],
        leadsTo:22
      }
    ],
    tasks:[],
    wallText:""
  },
  {//Room index: 24
    name:"Patient Room 0A",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:23
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 25
    name:"Patient Room 0B",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:23
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 26
    name:"Patient Room 0C",
    image:"patientRoom0.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:23
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 27
    name:"Patient Room 0D",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:23
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 28
    name:"Patient Room 0E",
    image:"patientRoom1.jpg",
    description:"This is a generic patient room in a hospital with not much in it apart from a bed and a cabinet with two draws in it.",
    doors:[
      {
        keys:[],
        leadsTo:23
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
            message:"You find nothing in there",
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
            message:"You find nothing in there",
            chance:100,
            isRepeatable:true,
            item:null
          }
        ]
      }
    ],
    wallText:""
  },
  {//Room index: 29
    name:"MRI Scan Room",
    image:"scanRoom0.jpg",
    description:"There's not a lot in this room apart from a large MRI machine in the middle. If the power was on you could probably give yourself a scan - not that you'd know how to read it. In the corner of the room is crash-cart, one of the trollies that have defibrillators on them as well as other devices, drugs, and syringes",
    doors:[
      {
        keys:[],
        leadsTo:22
      }
    ],
    tasks:[
      {
        name:"Use the defibrillators on yourself",
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
    ],
    wallText:""
  },
  {//Room index: 30
    name:"Male Toilets",
    image:"maleToilets0.jpg",
    description:"This looks like a standard toilet. There are 3 stalls, 4 urinals, and 3 sinks. One of the taps for the centre sink is running - it's lucky there's no plug for that sink",
    doors:[
      {
        keys:[],
        leadsTo:22
      }
    ],
    tasks:[],
    wallText:""
  },
  {//Room index: 31
    name:"Freedom",
    image:"outside0.jpg",
    description:"You're free! You have successfully made it out of the hospital. You're still all alone in what appears to be a deserted city, but you've made a real start to hopefully finding people and starting a new life",
    doors:[],
    tasks:[
      {
        name:"The End!",
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
    ],
    wallText:""
  },
  {//Room index: 32
    name:"Lift",
    image:"lift0.jpg",
    description:"This just looks like a standard lift. It's only difference to one in a you might find elsewhere is that's large enough to hold a hospital bed as well as at least 10 people",
    doors:[
      {
        keys:[],
        leadsTo:0
      },
      {
        keys:[],
        leadsTo:11
      },
      {
        keys:["000"],
        leadsTo:22
      }
    ],
    tasks:[],
    wallText:""
  },
  {//Room index: 33
    name:"Lift Shaft",
    image:"lift0.jpg",
    description:"There's nothing here apart from a couple of emergency lights and a ladder to get up and down with. There's no way you can prise open the doors on the first floor while holding on to the ladder - I guess you'll still need to use the actual lift to get to that floor.",
    doors:[
      {
        keys:[],
        leadsTo:0
      },
      {
        keys:["000"],
        leadsTo:11
      },
      {
        keys:[],
        leadsTo:22
      }
    ],
    tasks:[],
    wallText:""
  }
];

var items = [
  {//001
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
  },
  {//002
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
  },
  {//003
    snowflake:"003",
    name:"Small key",
    description:"A small brass key",
    actions:[
      {//Action: 0
        snowflake:"0",
        roomIndex:2,
        name:"Try to unlock the top drawer"
      },
      {//Action: 1
        snowflake:"1",
        roomIndex:3,
        name:"Try to unlock the top drawer"
      },
      {//Action: 2
        snowflake:"2",
        roomIndex:4,
        name:"Try to unlock the top drawer"
      },
      {//Action: 3
        snowflake:"3",
        roomIndex:5,
        name:"Try to unlock the top drawer"
      },
      {//Action: 4
        snowflake:"4",
        roomIndex:6,
        name:"Try to unlock the top drawer"
      },
      {//Action: 5
        snowflake:"5",
        roomIndex:13,
        name:"Try to unlock the top drawer"
      },
      {//Action: 6
        snowflake:"6",
        roomIndex:14,
        name:"Try to unlock the top drawer"
      },
      {//Action: 7
        snowflake:"7",
        roomIndex:15,
        name:"Try to unlock the top drawer"
      },
      {//Action: 8
        snowflake:"8",
        roomIndex:16,
        name:"Try to unlock the top drawer"
      },
      {//Action: 9
        snowflake:"9",
        roomIndex:17,
        name:"Try to unlock the top drawer"
      },
      {//Action: 10
        snowflake:"10",
        roomIndex:24,
        name:"Try to unlock the top drawer"
      },
      {//Action: 11
        snowflake:"11",
        roomIndex:25,
        name:"Try to unlock the top drawer"
      },
      {//Action: 12
        snowflake:"12",
        roomIndex:26,
        name:"Try to unlock the top drawer"
      },
      {//Action: 13
        snowflake:"13",
        roomIndex:27,
        name:"Try to unlock the top drawer"
      },
      {//Action: 14
        snowflake:"14",
        roomIndex:28,
        name:"Try to unlock the top drawer"
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
  },
  {//004
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
  },
  {//005
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
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"2",
        roomIndex:3,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"3",
        roomIndex:4,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"4",
        roomIndex:5,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"5",
        roomIndex:6,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"6",
        roomIndex:13,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"7",
        roomIndex:14,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"8",
        roomIndex:15,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"9",
        roomIndex:16,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"10",
        roomIndex:17,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"11",
        roomIndex:24,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"12",
        roomIndex:25,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"13",
        roomIndex:26,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"14",
        roomIndex:27,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"15",
        roomIndex:28,
        name:"Try to unlock the top drawer"
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
  },
  {//006
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
  },
  {//007
    snowflake:"007",
    name:"Patient file",
    description:"The patient in this file is called Toby Smith. They're 19 years old and are a 190cm tall male.",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Assume this is you"
      }
    ]
  },
  {//008
    snowflake:"008",
    name:"Patient file",
    description:"The patient in this file is called Jess Jones. They're 24 years old and are a 165cm tall female.",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Assume this is you"
      }
    ]
  },
  {//009
    snowflake:"009",
    name:"Patient file",
    description:"The patient in this file is called Sam Bill. They're 36 years old and are a 184cm tall male.",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Assume this is you"
      }
    ]
  },
  {//010
    snowflake:"010",
    name:"Patient file",
    description:"The patient in this file is called Harriet Walker They're 48 years old and are a 159 tall female.",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Assume this is you"
      }
    ]
  },
  {//011
    snowflake:"011",
    name:"Crowbar",
    description:"This crowbar is about 30cm long, it doesn't look like it can open much",
    actions:[
      {
        snowflake:"0",
        roomIndex:0,
        name:"Force open the Lift Maintenance"
      }
    ]
  },
  {//012
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
  },
  {//013
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
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"3",
        roomIndex:3,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"4",
        roomIndex:4,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"5",
        roomIndex:5,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"6",
        roomIndex:6,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"7",
        roomIndex:13,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"8",
        roomIndex:14,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"9",
        roomIndex:15,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"10",
        roomIndex:16,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"11",
        roomIndex:17,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"12",
        roomIndex:24,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"13",
        roomIndex:25,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"14",
        roomIndex:26,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"15",
        roomIndex:27,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"16",
        roomIndex:28,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"17",
        roomIndex:8,
        name:"Try to unlock the second locker"
      }
    ]
  },
  {//014
    snowflake:"014",
    name:"Scrap of paper",
    description:"This scrap of paper has a four-digit code written on it",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Read the code"
      }
    ]
  },
  {//015
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
  },
  {//016
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
        roomIndex:7,
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
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"4",
        roomIndex:3,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"5",
        roomIndex:4,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"6",
        roomIndex:5,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"7",
        roomIndex:6,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"8",
        roomIndex:13,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"9",
        roomIndex:14,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"10",
        roomIndex:15,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"11",
        roomIndex:16,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"12",
        roomIndex:17,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"13",
        roomIndex:24,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"14",
        roomIndex:25,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"15",
        roomIndex:26,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"16",
        roomIndex:27,
        name:"Try to unlock the top drawer"
      },
      {
        snowflake:"17",
        roomIndex:28,
        name:"Try to unlock the top drawer"
      }
    ]
  },
  {//017
    snowflake:"017",
    name:"Hospital gown",
    description:"This is the hospital gown you were wearing",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Wear"
      }
    ]
  },
  {//018
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
  },
  {//019
    snowflake:"019",
    name:"Scalpel",
    description:"This is a number 10 scalpel - whatever that means",
    actions:[]
  },
  {//020
    snowflake:"020",
    name:"Hammer",
    description:"This looks like a fairly small hammer, it probably wouldn't go through any windows",
    actions:[
      {
        snowflake:"0",
        roomIndex:9,
        name:"Try to break the cage door lock"
      }
    ]
  },
  {//021
    snowflake:"021",
    name:"Screwdriver",
    description:"This is a flat-head screwdriver",
    actions:[]
  },
  {//022
    snowflake:"022",
    name:"Box of bandages",
    description:"The box comes with 6 bandages in it. I guess these could be useful if you break your arm?",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Take out a bandage"
      }
    ],
    bandages:6
  },
  {//023
    snowflake:"023",
    name:"Stapler",
    description:"I doubt this could be useful?",
    actions:[]
  },
  {//024
    snowflake:"024",
    name:"Clothes",
    description:"These aren't your size but you could probably squeeze in them",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Wear"
      }
    ]
  },
  {//025
    snowflake:"025",
    name:"Bandage",
    description:"This looks like a standard bandage. It's long, white - what else do you need to know?",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Put in glass bottle"
      }
    ]
  },
  {//026
    snowflake:"026",
    name:"Methylated Spirit",
    description:"This is rather strong stuff - becareful with it",
    actions:[
      {
        snowflake:"0",
        roomIndex:-1,
        name:"Put in glass bottle"
      }
    ]
  },
  {//027
    snowflake:"027",
    name:"Book of matches",
    description:"These appear to be the old fashioned strike-anywhere matches - but there's only 3 left",
    actions:[
      {
        snowflake:"0",
        roomIndex:22,
        name:"Light Molotov cocktail and throw at ambulance"
      }
    ]
  },
  {//028
    snowflake:"028",
    name:"Glass bottle",
    description:"This is only of the iconic glass bottles Coke comes in",
    actions:[]
  },
  {//029
    snowflake:"029",
    name:"Glass bottle",
    description:"This is only of the iconic glass bottles Coke comes in",
    actions:[]
  }
];
