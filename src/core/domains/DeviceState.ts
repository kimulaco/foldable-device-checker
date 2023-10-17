export class DeviceState {
  private _userAgent = navigator.userAgent;
  private _screenOrientationType = window.screen.orientation.type;

  public get userAgent(): string {
    return this._userAgent;
  }

  public get screenOrientationType(): string {
    return this._screenOrientationType;
  }
}
