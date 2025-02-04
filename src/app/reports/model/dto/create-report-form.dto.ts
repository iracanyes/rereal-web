export interface CreateReportFormDto {
  type: string;
  status: string;
  additional_info: string;
  application_id?: string;
  equipment_id?: string;
  event_ids?: string[];
}
