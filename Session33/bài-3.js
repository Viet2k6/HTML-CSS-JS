let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước uống" },
    { name: "Cocacola", category: "Nước uống" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" },
  ];
  
  let btn = document.getElementById("btn");
  let ul = document.getElementById("myUL");
  let select = document.getElementById("categories");
  function renderList(category) {
    ul.innerHTML = ""; 
  
    let filteredDish = dish.filter((item) => {
      return category === "default" || item.category === category;
    });
  
    filteredDish.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `<b>Tên:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
      ul.appendChild(li);
    });
  }
  
  renderList("default");

  btn.onclick = function () {
    let selectedCategory = select.value;
    renderList(selectedCategory);
  };
  