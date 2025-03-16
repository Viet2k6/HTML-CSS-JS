let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

filterAvg(students);
function filterAvg(students) {
    const newArr = [];
    for (let i = 0; i < students.length; i++) {
        let { math, english, literature } = students[i].scores; 
        let avg = (math + english + literature) / 3; 

        if (avg >= 8) {
            newArr.push(students[i]);
        }
    }
    console.log(newArr);
}
