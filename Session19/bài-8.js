let month = +prompt("Nhập một tháng (1-12):");
let season;

switch (true) {
    case (month >= 1 && month <= 3):
        season = "mùa xuân";
        break;
    case (month >= 4 && month <= 6):
        season = "mùa hạ";
        break;
    case (month >= 7 && month <= 9):
        season = "mùa thu";
        break;
    case (month >= 10 && month <= 12):
        season = "mùa đông";
        break;
    default:
        season = "tháng không hợp lệ";
}
alert(season);