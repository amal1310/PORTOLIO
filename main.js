/*==================================================
            GOOGLE FONT
===================================================*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/*==================================================
            VARIABLES
===================================================*/

:root{

    --bg:#050816;
    --bg2:#0b1023;

    --card:rgba(255,255,255,.06);

    --primary:#00E5FF;

    --secondary:#7B61FF;

    --white:#ffffff;

    --gray:#B8C0D4;

    --border:rgba(255,255,255,.08);

    --shadow:0 15px 45px rgba(0,0,0,.35);

}

/*==================================================
            RESET
===================================================*/

*{

margin:0;
padding:0;
box-sizing:border-box;

}

html{

scroll-behavior:smooth;

}

body{

font-family:'Poppins',sans-serif;

background:linear-gradient(135deg,#050816,#0b1023,#050816);

color:white;

overflow-x:hidden;

}

/*==================================================
            SCROLLBAR
===================================================*/

::-webkit-scrollbar{

width:10px;

}

::-webkit-scrollbar-track{

background:#0b1023;

}

::-webkit-scrollbar-thumb{

background:linear-gradient(#00E5FF,#7B61FF);

border-radius:20px;

}

/*==================================================
            ANIMATED BACKGROUND
===================================================*/

body::before{

content:"";

position:fixed;

width:700px;

height:700px;

background:#00e5ff20;

border-radius:50%;

filter:blur(140px);

left:-250px;

top:-250px;

z-index:-1;

animation:move1 12s infinite alternate;

}

body::after{

content:"";

position:fixed;

width:600px;

height:600px;

background:#7b61ff25;

border-radius:50%;

filter:blur(150px);

right:-200px;

bottom:-250px;

z-index:-1;

animation:move2 12s infinite alternate;

}

@keyframes move1{

0%{

transform:translateY(0);

}

100%{

transform:translateY(120px);

}

}

@keyframes move2{

0%{

transform:translateX(0);

}

100%{

transform:translateX(-120px);

}

}

/*==================================================
            NAVBAR
===================================================*/

nav{

position:fixed;

top:0;

left:0;

width:100%;

padding:22px 9%;

display:flex;

justify-content:space-between;

align-items:center;

background:rgba(5,8,22,.65);

backdrop-filter:blur(20px);

z-index:1000;

border-bottom:1px solid rgba(255,255,255,.05);

}

.logo{

font-size:28px;

font-weight:700;

color:white;

}

.logo span{

color:var(--primary);

}

.nav-links{

display:flex;

list-style:none;

gap:35px;

}

.nav-links a{

color:white;

text-decoration:none;

font-weight:500;

transition:.3s;

}

.nav-links a:hover{

color:var(--primary);

}

.resume-btn{

padding:12px 28px;

border-radius:30px;

background:linear-gradient(135deg,#00E5FF,#7B61FF);

color:white;

text-decoration:none;

font-weight:600;

transition:.4s;

}

.resume-btn:hover{

transform:translateY(-4px);

box-shadow:0 10px 25px rgba(0,229,255,.3);

}

/*==================================================
            HERO SECTION
===================================================*/

.hero{

min-height:100vh;

display:grid;

grid-template-columns:1fr 1fr;

align-items:center;

padding:120px 9% 60px;

gap:60px;

}

.hero-left h3{

font-size:26px;

color:var(--gray);

margin-bottom:10px;

}

.hero-left h1{

font-size:70px;

font-weight:700;

margin-bottom:10px;

}

.hero-left h2{

font-size:35px;

color:var(--primary);

margin-bottom:25px;

min-height:50px;

}

.hero-left p{

color:var(--gray);

line-height:1.9;

font-size:17px;

max-width:600px;

margin-bottom:40px;

}

/*==================================================
            BUTTONS
===================================================*/

.hero-buttons{

display:flex;

gap:20px;

margin-bottom:40px;

}

.hero-buttons button{

padding:15px 35px;

font-size:16px;

border:none;

border-radius:40px;

cursor:pointer;

font-weight:600;

transition:.4s;

}

.hero-buttons button:first-child{

background:linear-gradient(135deg,#00E5FF,#7B61FF);

color:white;

}

.hero-buttons button:first-child:hover{

transform:translateY(-5px);

box-shadow:0 15px 35px rgba(0,229,255,.4);

}

.outline{

background:transparent;

border:2px solid #00E5FF !important;

color:white;

}

.outline:hover{

background:#00E5FF;

color:#050816;

}

/*==================================================
            SOCIAL ICONS
===================================================*/

.social{

display:flex;

gap:20px;

}

.social a{

width:55px;

height:55px;

border-radius:50%;

display:flex;

justify-content:center;

align-items:center;

text-decoration:none;

font-size:24px;

background:rgba(255,255,255,.05);

color:white;

border:1px solid rgba(255,255,255,.08);

transition:.4s;

}

.social a:hover{

transform:translateY(-8px);

background:linear-gradient(135deg,#00E5FF,#7B61FF);

}

/*==================================================
            HERO IMAGE
===================================================*/

.hero-right{

display:flex;

justify-content:center;

}

.hero-right img{

width:420px;

height:420px;

border-radius:50%;

object-fit:cover;

border:8px solid rgba(255,255,255,.08);

box-shadow:

0 0 40px rgba(0,229,255,.25),

0 0 80px rgba(123,97,255,.25);

animation:floatImage 5s ease-in-out infinite;

}

@keyframes floatImage{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-18px);

}

100%{

transform:translateY(0px);

}

}

/*==================================================
            SECTION TITLE
===================================================*/

.section-title{

font-size:42px;

text-align:center;

margin-bottom:60px;

font-weight:700;

position:relative;

}

.section-title::after{

content:"";

position:absolute;

width:80px;

height:4px;

background:linear-gradient(90deg,#00E5FF,#7B61FF);

left:50%;

transform:translateX(-50%);

bottom:-15px;

border-radius:20px;

}

/*==================================================
            GLASS CARD
===================================================*/

.card{

background:rgba(255,255,255,.05);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.08);

border-radius:20px;

box-shadow:var(--shadow);

}
