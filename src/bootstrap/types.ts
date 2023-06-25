const TYPES = {
  AppRouter: Symbol.for('AppRouter'),

  // ==== Team 
  TeamController: Symbol.for('TeamController'),
  TeamRepository: Symbol.for('TeamRepository'),
  TeamGateway: Symbol.for('TeamGateway'),
  DeleteTeamUseCase: Symbol.for('DeleteTeamUseCase'),
  GetTeamUsecase: Symbol.for('GetTeamUsecase'),
  CreateTeamUsecase: Symbol.for('CreateTeamUsecase'),
  UpdateTeamUsecase: Symbol.for('UpdateTeamUsecase'),
  GetSpecificTeamUsecase: Symbol.for('GetSpecificTeamUsecase'),

  // ==== Driver
  DriverController: Symbol.for('DriverController'),
  DriverRepository: Symbol.for('DriverRepository'),
  CreateDriverUsecase: Symbol.for('CreateDriverUsecase'),
  GetDriverUsecase: Symbol.for('GetDriverUsecase'),
  GetSpecificDriverUsecase: Symbol.for('GetSpecificDriverUsecase'),
  DeleteDriverUsecase: Symbol.for('DeleteDriverUsecase'),
  DriverGateway: Symbol.for('DriverGateway'),
  UpdateDriverUsecase: Symbol.for('UpdateDriverUsecase'),

  // ==== Race event
  RaceEventGateway: Symbol.for('RaceEventGateway'),
  RaceEventController: Symbol.for('RaceEventController'),
  GetRaceEventsUsecase: Symbol.for('GetRaceEventsUsecase'),
  GetRaceEventUsecase: Symbol.for('GetRaceEventUsecase'),
  RaceEventRepository: Symbol.for('RaceEventRepository'),

  // ==== Race 
  RaceGateway: Symbol.for('RaceGateway'),
  RaceController: Symbol.for('RaceController'),
  GetRacesUsecase: Symbol.for('GetRacesUsecase'),
  GetRaceUsecase: Symbol.for('GetRaceUsecase'),

  // ==== Race result
  RaceResultGateway: Symbol.for('RaceResultGateway'),
  RaceResultController: Symbol.for('RaceResultController'),
  GetRaceResultsUsecase: Symbol.for('GetRaceResultsUsecase'),
  GetRaceResultUsecase: Symbol.for('GetRaceResultUsecase'),
}

export default TYPES