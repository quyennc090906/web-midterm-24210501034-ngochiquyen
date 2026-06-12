let courses = [

{
id:1,
name:"HTML CSS Cơ Bản",
type:"Frontend",
level:"Dễ",
date:"10/07/2026",
desc:"Học tạo giao diện website"
},


{
id:2,
name:"JavaScript Cơ Bản",
type:"Frontend",
level:"Dễ",
date:"15/07/2026",
desc:"Học lập trình JavaScript"
},


{
id:3,
name:"JavaScript DOM",
type:"Frontend",
level:"Trung bình",
date:"20/07/2026",
desc:"Điều khiển HTML bằng JS"
},


{
id:4,
name:"Bootstrap",
type:"Frontend",
level:"Dễ",
date:"25/07/2026",
desc:"Thiết kế web responsive"
},


{
id:5,
name:"Git Github",
type:"Tool",
level:"Dễ",
date:"01/08/2026",
desc:"Quản lý mã nguồn"
},


{
id:6,
name:"UI UX",
type:"Design",
level:"Trung bình",
date:"05/08/2026",
desc:"Thiết kế giao diện"
},


{
id:7,
name:"React",
type:"Frontend",
level:"Khó",
date:"10/08/2026",
desc:"Làm web hiện đại"
},

{
id:8,
name:"Web Security",
type:"Security",
level:"Khó",
date:"15/08/2026",
desc:"Bảo mật website"
}

];

function showCourses(data=courses){

let box=document.getElementById("list");

box.innerHTML="";

data.forEach(c=>{

box.innerHTML+=`

<div class="col-md-4">

<div class="card p-3 mb-3">

<h4>${c.name}</h4>

<p>
Danh mục:
${c.type}
</p>

<p>
Cấp độ:
${c.level}
</p>

<p>
Ngày:
${c.date}
</p>

<p>
${c.desc}
</p>

</button>
class="btn btn-info"
onclick="detail(${c.id})">

Chi tiết

</button>

<a href="register.html?id=${c.id}"
class="btn btn-danger">

Đăng ký

</a>
Đăng ký

</a>

</div>

</div>

`;

});

}
function filterCourses(){

let keyword =
document.getElementById("search")
.value
.toLowerCase();

let type =
document.getElementById("type")
.value;

let level =
document.getElementById("level")
.value;

let result=courses.filter(c=>{

return (

c.name
.toLowerCase()
.includes(keyword)

&&

(type=="" || c.type==type)


&&

(level=="" || c.level==level)

);

});

showCourses(result);

}

function resetFilter(){

document.getElementById("search").value="";

document.getElementById("type").value="";

document.getElementById("level").value="";

showCourses();

}

(c=>{

box.innerHTML+=`

<div class="col-md-4">

<div class="card p-3 mb-3">

<h4>${c.name}</h4>

<p>
Danh mục: ${c.type}
</p>

<p>
Cấp độ: ${c.level}
</p>

<p>
Ngày: ${c.date}
</p>

<p>
${c.desc}
</p>

<a href="register.html?id=${c.id}"
class="btn btn-danger">

Đăng ký

</a>
</div>

</div>

`;

});
function detail(id){

let c=courses.find(x=>x.id==id);

document.getElementById("titleModal")
.innerHTML=c.name;

document.getElementById("contentModal")
.innerHTML=`

<p>
Danh mục:
${c.type}
</p>

<p>
Cấp độ:
${c.level}
</p>

<p>
Ngày học:
${c.date}
</p>

<p>
${c.desc}
</p>

`;

let modal=
new bootstrap.Modal(
document.getElementById("myModal")
);

modal.show();

}
// ==========================
// ĐĂNG KÝ KHÓA HỌC
// ==========================

let form =
document.getElementById("formRegister");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let course =
document.getElementById("course").value;

// kiểm tra rỗng

if(
name=="" ||
email=="" ||
phone==""
){

alert("Vui lòng nhập đầy đủ thông tin");

return;

}

// kiểm tra email

let emailCheck =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailCheck.test(email)){

alert("Email không hợp lệ");

return;
}

// kiểm tra số điện thoại

let phoneCheck =
/^[0-9]{10}$/;

if(!phoneCheck.test(phone)){

alert("Số điện thoại phải có 10 số");

return;

}

// tạo dữ liệu đăng ký

let register = {

name:name,

email:email,

phone:phone,

course:course

};
saveRegister(register);

alert("Đăng ký thành công");

form.reset();

});

}

function saveRegister(data){

let list =
JSON.parse(
localStorage.getItem("register")
)
||
[];

list.push(data);

localStorage.setItem(
"register",
JSON.stringify(list)
);

}
function showRegister(){

let box =
document.getElementById("registerList");

let list =
JSON.parse(localStorage.getItem("register"))
|| [];

box.innerHTML="";

list.forEach((x,index)=>{

box.innerHTML += `
<tr>
<td>${x.name}</td>
<td>${x.email}</td>
<td>${x.phone}</td>
<td>${x.course}</td>
<td>
<button
class="btn btn-danger"
onclick="deleteRegister(${index})">
Xóa
</button>
</td>
</tr>
`;

});

}

function deleteRegister(index){

let list =
JSON.parse(
localStorage.getItem("register")
)
||
[];
list.splice(index,1);

localStorage.setItem(
"register",
JSON.stringify(list)
);

showRegister();

}
