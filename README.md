<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LeadFlow CRM</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<style>
body{
 margin:0;
 font-family:'Inter',sans-serif;
 background: radial-gradient(circle at top,#0f2027,#0a0f1f,#000);
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
 backdrop-filter:blur(20px);
 padding:40px;
 border-radius:20px;
 width:320px;
 box-shadow:0 0 50px rgba(0,255,255,0.2);
}

.login-box h1{
 font-family:'Playfair Display';
}

/* BUTTON */
button{
 padding:12px;
 background:linear-gradient(90deg,#00e5ff,#00ffa3);
 border:none;
 border-radius:10px;
 cursor:pointer;
 font-weight:bold;
 color:#000;
}

/* INPUT */
input{
 width:100%;
 padding:12px;
 margin:10px 0;
 border:none;
 border-radius:10px;
}

/* APP */
.app{display:none;}

.sidebar{
 width:230px;
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
 color:#aaa;
 text-align:left;
 cursor:pointer;
}

.main{
 margin-left:230px;
 padding:25px;
}

/* CARDS */
.cards{
 display:flex;
 gap:20px;
}

.card{
 background:rgba(255,255,255,0.05);
 backdrop-filter:blur(10px);
 padding:25px;
 border-radius:15px;
 flex:1;
 text-align:center;
 box-shadow:0 0 20px rgba(0,255,255,0.1);
}

.card h1{
 color:#00e5ff;
}

/* TABLE */
table{
 width:100%;
 margin-top:20px;
 border-collapse:collapse;
}

td,th{
 padding:10px;
 border-bottom:1px solid #333;
}

</style>
</head>

<body>

<!-- LOGIN -->
<div id="login" class="login">
  <div class="login-box">
    <h1>LeadFlow CRM</h1>
    <input id="user" placeholder="Username">
    <input id="pass" type="password
