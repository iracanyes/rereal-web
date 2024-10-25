import {IsEmpty} from "@api/types/index";

export interface Token extends IsEmpty {
  token: string;
  refreshToken: string;
  credential: Credential|null;
}
