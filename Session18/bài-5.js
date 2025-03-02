let year = +prompt("Nhập số năm kinh nghiệm: ")
if (year>6){
    alert(`Xếp loại: Quản lý`)
}else if(year>4){
    alert(`Xếp loại: Chuyên viên`)
}else if(year>1){
    alert(`Xếp loại: Nhân viên có kinh nghiệm`)
}else if(year<1){
    alert(`Xếp loai: Mới vào nghề`)
}else{
    alert(`Năm nhập không hợp lệ`)
}