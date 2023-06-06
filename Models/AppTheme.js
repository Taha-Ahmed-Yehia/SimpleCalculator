export default class AppTheme {
  static primary = "#202020";
  static secondary = "#FFD0B0";
  static tertiary = "#FC9948";
  static text = "#FFFFFF";
  static special = "#CF6F21";

  static dark() {
    this.primary = "#000000";
    this.secondary = "#353535";
    this.tertiary = "#FF7300";
    this.special = "#7E7E7E";
    this.text = "#FFFFFF";
  }
  static light() {
    this.primary = "#FFFFFF";
    this.secondary = "#FFD0B0";
    this.tertiary = "#FF7300";
    this.special = "#FF7300";
    this.text = "#000000";
  }
}
