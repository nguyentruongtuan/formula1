const TYPES = {
  AppRouter: Symbol.for('AppRouter'),

  TeamController: Symbol.for('TeamController'),
  TeamRepository: Symbol.for('TeamRepository'),
  TeamGateway: Symbol.for('TeamGateway'),
  DeleteTeamUseCase: Symbol.for('DeleteTeamUseCase'),
  GetTeamUsecase: Symbol.for('GetTeamUsecase'),
  CreateTeamUsecase: Symbol.for('CreateTeamUsecase'),
  UpdateTeamUsecase: Symbol.for('UpdateTeamUsecase'),
  GetSpecificTeamUsecase: Symbol.for('GetSpecificTeamUsecase'),

  DriverController: Symbol.for('DriverController'),
  DriverRepository: Symbol.for('DriverRepository'),
  CreateDriverUsecase: Symbol.for('CreateDriverUsecase'),
  GetDriverUsecase: Symbol.for('GetDriverUsecase'),
  GetSpecificDriverUsecase: Symbol.for('GetSpecificDriverUsecase'),
  DeleteDriverUsecase: Symbol.for('DeleteDriverUsecase'),
  DriverGateway: Symbol.for('DriverGateway'),
  UpdateDriverUsecase: Symbol.for('UpdateDriverUsecase'),
}

export default TYPES