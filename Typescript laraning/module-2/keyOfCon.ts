type PeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof PeopleVehicle;

// key of constand