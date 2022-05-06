import { SharedDataService } from "../services/shared-data/shared-data.service";

/**
 * class used to store all over application api endpoints
 */
export class ServerUrl {
  public static sharedData: SharedDataService;
  constructor() {
  }

  // server url to connect to rest server api's
  public static readonly SERVER_BASE_URL = "";


}
