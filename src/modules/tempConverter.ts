export class TempConverter {
  static convertFtoC(temp: number | string) : string {
    let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
    return TempConverter.performCalculation(value).toFixed(1);
  }

  private static performCalculation(value: number): number {
    return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
  }
}
