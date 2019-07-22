export class VehicleInfo {
  id: string;
  description: string;
  price: string;
  meta: {
    passengers: number;
    drivetrain: [];
    bodystyles: [];
    emissions: {
      template: string;
      value: number;
    }

  }

}