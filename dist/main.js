(()=>{"use strict";const e=[{name:"first med",dose:"250 mg",frequency:"once daily",type:"BP",notes:"testing"}];class t{constructor(e,t,s,n,o){this.name=e,this.dose=t,this.frequency=s,this.type=n,this.notes=o}printThis(){console.log(this.name+this.dose)}}console.log("hello user!"),function(){const s=document.getElementById("content"),n=document.createElement("DIV");s.appendChild(n);let o=new t("metformin","500mg","twice daily","diabetes","NA");e.push(o),console.log(e)}()})();