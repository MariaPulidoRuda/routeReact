let poses = [
    {
      id: 1,
      name: "Downward Facing Dog",
      difficulty: "low",
      Sanskrit: "adho mukha svanasana"
    },
    {
        id: 2,
        name: "Lotus Pose",
        difficulty: "medium",
        Sanskrit: "Padmasana"
      },
      {
        id: 3,
        name: "Cobra Pose",
        difficulty: "medium",
        Sanskrit: "Bhujangasana"
      },
      {
        id: 4,
        name: "Warrior I",
        difficulty: "medium",
        Sanskrit: "Virabhadrasana I"
      },
      {
        id: 5,
        name: "Firefly Pose",
        difficulty: "high",
        Sanskrit: "Tittibhasana"
      },
      {
      id: 6,
        name: "Scorpion Pose",
        difficulty: "high",
        Sanskrit: "Taraksvasana",
    },
    {
        id: 7,
        name: "Standing Splits Against a Wall Pose",
        difficulty: "high",
        Sanskrit: "Urdhva Prasarita Eka Padasana"
    }
  ];
  
  export const getPoses = () => poses;
  
  
  export const getPose = id => poses.find(
    pose => pose.id.toString() === id
  );
  
  export const deletePose = async (id) => poses = poses.filter(
    pose => pose.id !== id
  );

  //esto nos va a permitir recoger poses con un id y borrar  poses por un id.