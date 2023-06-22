import { Driver } from "src/model/driver"

export class UpdateDriverRequest {
  id: string
  data: Partial<Driver>
}