export interface Application {
  id: string;
  name: string;
  ip: string;
  healthcheckPort: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}
