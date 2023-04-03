let age = -10;

switch (true) {
  case age === 18:
    console.log("Ayon ubra na!");
    break;
  case age >= 19 && age <= 25:
    console.log("Tanda mo na pala e");
    break;
  case age > 1 && age <= 17:
    console.log("Ops di ubra");
    break;
  default:
    console.log("Negats ka dyan bossing");
}