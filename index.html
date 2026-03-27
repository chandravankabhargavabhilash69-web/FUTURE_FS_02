<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Chandravanka Bhargav Abhilash CRM</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<style>
body{
 margin:0;
 font-family:'Poppins',sans-serif;
 background:linear-gradient(135deg,#0a0f1f,#1a2a6c,#0f2027);
 color:#fff;
}

/* LOGIN */
.login{
 display:flex;
 justify-content:center;
 align-items:center;
 height:100vh;
}

.login-box{
 background:rgba(255,255,255,0.05);
 backdrop-filter:blur(15px);
 padding:40px;
 border-radius:15px;
 width:320px;
 box-shadow:0 0 40px rgba(0,255,255,0.2);
}

.login-box h1{
 font-family:'Playfair Display';
}

/* INPUTS */
input{
 width:100%;
 padding:12px;
 margin:10px 0;
 border:none;
 border-radius:8px;
}

/* BUTTON */
button{
 width:100%;
 padding:12px;
 background:#00e5ff;
 border:none;
 border-radius:8px;
 cursor:pointer;
 font-weight:bold;
}

/* APP */
.app{display:none;}

.sidebar{
 width:220px;
 background:#0b0f1a;
 height:100vh;
 padding:20px;
 float:left;
}

.sidebar h2{
 color:#00e5ff;
 font-family:'Playfair Display';
}

.sidebar button{
 display:block;
 width:100%;
 margin:10px 0;
 background:none;
 border:none;
 color:#fff;
 cursor:pointer;
 text-align:left;
}

.main{
 margin-left:220px;
 padding:20px;
}

.card{
 background:rgba(255,255,255,0.05);
 padding:20px;
 border-radius:10px;
 margin:10px;
 display:inline-block;
 width:200px;
}
</style>
</head>

<body>

<!-- LOGIN -->
<div id="login" class="login">
  <div class="login-box">
    <h1>Royal CRM Login</h1>
    <input id="user" placeholder="Username">
    <input id="pass" type="password" placeholder="Password">
    <button onclick="login()">Login</button>
    <p>Username: adminme<br>Password: 123456</p>
  </div>
</div>

<!-- APP -->
<div id="app" class="app">

  <div class="sidebar">
    <h2>CRM</h2>
    <button onclick="show('dash')">Dashboard</button>
    <button onclick="show('leads')">Leads</button>
    <button onclick="show('tasks')">Tasks</button>
    <button onclick="logout()">Logout</button>
  </div>

  <div class="main">

    <div id="dash">
      <h1>Dashboard</h1>
      <div class="card">Total Leads: <span id="total">0</span></div>
    </div>

    <div id="leads" style="display:none;">
      <h1>Leads</h1>
      <input id="leadName" placeholder="Enter Lead Name">
      <button onclick="addLead()">Add Lead</button>
      <ul id="list"></ul>
    </div>

    <div id="tasks" style="display:none;">
      <h1>Tasks</h1>
      <input id="task" placeholder="New Task">
      <button onclick="addTask()">Add Task</button>
      <ul id="tasksList"></ul>
    </div>

  </div>

</div>

<script>
let leads = JSON.parse(localStorage.getItem("leads")||"[]");
let tasks = JSON.parse(localStorage.getItem("tasks")||"[]");

function login(){
 if(user.value==="adminme" && pass.value==="123456"){
  document.getElementById("login").style.display="none";
  document.getElementById("app").style.display="block";
  render();
 }else{
  alert("Wrong credentials");
 }
}

function logout(){ location.reload(); }

function show(id){
 document.getElementById("dash").style.display="none";
 document.getElementById("leads").style.display="none";
 document.getElementById("tasks").style.display="none";
 document.getElementById(id).style.display="block";
}

function addLead(){
 let name = leadName.value;
 if(!name) return;
 leads.push({name});
 localStorage.setItem("leads",JSON.stringify(leads));
 leadName.value="";
 render();
}

function addTask(){
 let t = task.value;
 if(!t) return;
 tasks.push(t);
 localStorage.setItem("tasks",JSON.stringify(tasks));
 task.value="";
 render();
}

function render(){
 document.getElementById("total").innerText = leads.length;

 let list="";
 leads.forEach(l=> list += "<li>"+l.name+"</li>");
 document.getElementById("list").innerHTML = list;

 let tlist="";
 tasks.forEach(t=> tlist += "<li>"+t+"</li>");
 document.getElementById("tasksList").innerHTML = tlist;
}
</script>

</body>
</html>
