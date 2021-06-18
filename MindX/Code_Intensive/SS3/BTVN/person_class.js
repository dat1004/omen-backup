export default class Person {
  name;
  phoneNo;
  xLocation;
  yLocation;
  isCovid;

  constructor(name, phoneNo, xLocation, yLocation, isCovid) {
    this.name = name;
    this.phoneNo = phoneNo;
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    this.isCovid = isCovid;
  }
}
