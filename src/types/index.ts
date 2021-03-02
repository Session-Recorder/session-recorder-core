import Nedb from "nedb";

export interface IDatabaseService {
  websites: Nedb;
  sessions: Nedb;
  clients: Nedb;
  recordings: Nedb;
}
export abstract class AbstractControllerGroup {
  constructor(protected databaseService: IDatabaseService) {}
}
