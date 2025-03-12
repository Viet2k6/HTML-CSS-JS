function ngay(day) {
    return day.map(date => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}
console.log(ngay(["2025-03-10", "2024-12-25", "2023-07-01"])); 
