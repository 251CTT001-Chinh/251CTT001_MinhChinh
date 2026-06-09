alert("Chào mừng bạn đến với trang web của chúng tôi!");
const menuToggle = document.getElementById("menuToggle");
const hoatdong = document.getElementById("hoatdong");
menuToggle.addEventListener("click", function () {
  hoatdong.classList.toggle("active");
});
function chonmenu(muc) {
  document.getElementById("mucchon").textContent = muc;
}
function xemchitiet(ten, diem) {
  document.getElementById("HĐ").textContent = "- Hoạt động: " + ten;
  document.getElementById("Điểm").textContent = "- Điểm thưởng: " + diem;
  document.getElementById("mucchon").textContent = ten;
}
