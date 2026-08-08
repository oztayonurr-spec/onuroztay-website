
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".site-nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open?"true":"false")});}
document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));

if(document.getElementById("pd-title") && window.PROJECTS){
 const id=new URLSearchParams(location.search).get("id")||"xlimbo";
 const p=window.PROJECTS[id]||window.PROJECTS.xlimbo;
 document.title=p.title+" — Onur Öztay";
 document.getElementById("pd-kicker").textContent=p.kicker;
 document.getElementById("pd-title").textContent=p.title;
 document.getElementById("pd-lead").textContent=p.lead;
 document.getElementById("pd-heading").textContent=p.heading;
 document.getElementById("pd-body").innerHTML=p.body.map(x=>`<p>${x}</p>`).join("");
 document.getElementById("pd-note").textContent=p.note;
 document.getElementById("pd-art-label").textContent=p.artLabel;
 const art=document.getElementById("pd-art"); art.classList.add(p.artClass);
 document.getElementById("pd-tags").innerHTML=p.tags.map(x=>`<span>${x}</span>`).join("");
}
