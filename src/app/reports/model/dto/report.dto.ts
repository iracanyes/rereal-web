import {Application} from "@shared/core/model/dto/application.dto";
import {Equipment} from "@shared/core/model/dto/equipment.dto";

export interface Report {
  id: string;
  type: string;
  status: string;
  additionalInformation: string;
  application?: Application;
  equipment?: Equipment;
  events?: string[];
  createdAt: Date;
  updatedAt: Date;
}
