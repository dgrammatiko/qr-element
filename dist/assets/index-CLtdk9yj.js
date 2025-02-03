var L=l=>{throw TypeError(l)};var v=(l,t,r)=>t.has(l)||L("Cannot "+r);var g=(l,t,r)=>(v(l,t,"read from private field"),r?r.call(l):t.get(l)),m=(l,t,r)=>t.has(l)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(l):t.set(l,r),N=(l,t,r,i)=>(v(l,t,"write to private field"),i?i.call(l,r):t.set(l,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&i(e)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const P={L:1,M:0,Q:3,H:2},w={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Q=new TextEncoder,S=236,I=17;function $(l,{version:t=-1,correction:r="M"}={}){const i=P[r],n=Q.encode(l);if(t<1)for(t=1;t<40;t++){const h=O.get_rs_blocks(t,i),_=new B;_.put(4,4),_.put(n.length,E.get_length_in_bits(t)),_.put_bytes(n);let u=0;for(let d=0;d<h.length;d++)u+=h[d].data_count;if(_.get_length_in_bits()<=u*8)break}const s=t*4+17,e=new Array(s);for(let h=0;h<s;h+=1)e[h]=new Array(s);let o=0,f=0,a=D(t,i,n);for(let h=0;h<8;h+=1){const _=c(!0,h),u=K(_);(h==0||o>u)&&(o=u,f=h)}return c(!1,f);function c(h,_){for(let u=0;u<s;u+=1)for(let d=0;d<s;d+=1)e[u][d]=null;return k(e,0,0),k(e,s-7,0),k(e,0,s-7),G(e,t),W(e),j(e,h,_,i),t>=7&&q(e,t,h),H(e,a,_),e}}function k(l,t,r){for(let i=-1;i<=7;i+=1)if(!(t+i<=-1||l.length<=t+i))for(let n=-1;n<=7;n+=1)r+n<=-1||l.length<=r+n||(0<=i&&i<=6&&(n==0||n==6)||0<=n&&n<=6&&(i==0||i==6)||2<=i&&i<=4&&2<=n&&n<=4?l[t+i][r+n]=!0:l[t+i][r+n]=!1)}function G(l,t){const r=E.get_pattern_position(t);for(let i=0;i<r.length;i+=1)for(let n=0;n<r.length;n+=1){const s=r[i],e=r[n];if(l[s][e]==null)for(let o=-2;o<=2;o+=1)for(let f=-2;f<=2;f+=1)o==-2||o==2||f==-2||f==2||o==0&&f==0?l[s+o][e+f]=!0:l[s+o][e+f]=!1}}function W(l){for(let t=8;t<l.length-8;t+=1)l[t][6]==null&&(l[t][6]=t%2==0);for(let t=8;t<l.length-8;t+=1)l[6][t]==null&&(l[6][t]=t%2==0)}function j(l,t,r,i){const n=i<<3|r,s=E.get_bch_type_info(n);for(let e=0;e<15;e+=1){const o=!t&&(s>>e&1)==1;e<6?l[e][8]=o:e<8?l[e+1][8]=o:l[l.length-15+e][8]=o}for(let e=0;e<15;e+=1){const o=!t&&(s>>e&1)==1;e<8?l[8][l.length-e-1]=o:e<9?l[8][15-e-1+1]=o:l[8][15-e-1]=o}l[l.length-8][8]=!t}function q(l,t,r){const i=E.get_bch_type_number(t);for(let n=0;n<18;n+=1){const s=!r&&(i>>n&1)==1;l[Math.floor(n/3)][n%3+l.length-8-3]=s}for(let n=0;n<18;n+=1){const s=!r&&(i>>n&1)==1;l[n%3+l.length-8-3][Math.floor(n/3)]=s}}function H(l,t,r){let i=-1,n=l.length-1,s=7,e=0;const o=E.get_mask_function(r);for(let f=l.length-1;f>0;f-=2)for(f==6&&(f-=1);;){for(let a=0;a<2;a+=1)if(l[n][f-a]==null){let c=!1;e<t.length&&(c=(t[e]>>>s&1)==1),o(n,f-a)&&(c=!c),l[n][f-a]=c,s-=1,s==-1&&(e+=1,s=7)}if(n+=i,n<0||l.length<=n){n-=i,i=-i;break}}}function K(l){const t=l.length;let r=0;const i=(e,o)=>l[e][o];for(let e=0;e<t;e+=1)for(let o=0;o<t;o+=1){const f=i(e,o);let a=0;for(let c=-1;c<=1;c+=1)if(!(e+c<0||t<=e+c))for(let h=-1;h<=1;h+=1)o+h<0||t<=o+h||c==0&&h==0||f==i(e+c,o+h)&&(a+=1);a>5&&(r+=3+a-5)}for(let e=0;e<t-1;e+=1)for(let o=0;o<t-1;o+=1){let f=0;i(e,o)&&(f+=1),i(e+1,o)&&(f+=1),i(e,o+1)&&(f+=1),i(e+1,o+1)&&(f+=1),(f==0||f==4)&&(r+=3)}for(let e=0;e<t;e+=1)for(let o=0;o<t-6;o+=1)i(e,o)&&!i(e,o+1)&&i(e,o+2)&&i(e,o+3)&&i(e,o+4)&&!i(e,o+5)&&i(e,o+6)&&(r+=40);for(let e=0;e<t;e+=1)for(let o=0;o<t-6;o+=1)i(o,e)&&!i(o+1,e)&&i(o+2,e)&&i(o+3,e)&&i(o+4,e)&&!i(o+5,e)&&i(o+6,e)&&(r+=40);let n=0;for(let e=0;e<t;e+=1)for(let o=0;o<t;o+=1)i(o,e)&&(n+=1);const s=Math.abs(100*n/t/t-50)/5;return r+=s*10,r}function z(l,t){let r=0,i=0,n=0;const s=new Array(t.length),e=new Array(t.length);for(let c=0;c<t.length;c+=1){const h=t[c].data_count,_=t[c].total_count-h;i=Math.max(i,h),n=Math.max(n,_),s[c]=new Array(h);for(let p=0;p<s[c].length;p+=1)s[c][p]=255&l.get_buffer()[p+r];r+=h;const u=E.get_error_correct_polynominal(_),M=new x(s[c],u.get_length()-1).mod(u);e[c]=new Array(u.get_length()-1);for(let p=0;p<e[c].length;p+=1){const C=p+M.get_length()-e[c].length;e[c][p]=C>=0?M.get_at(C):0}}let o=0;for(let c=0;c<t.length;c+=1)o+=t[c].total_count;const f=new Array(o);let a=0;for(let c=0;c<i;c+=1)for(let h=0;h<t.length;h+=1)c<s[h].length&&(f[a]=s[h][c],a+=1);for(let c=0;c<n;c+=1)for(let h=0;h<t.length;h+=1)c<e[h].length&&(f[a]=e[h][c],a+=1);return f}function D(l,t,r){const i=O.get_rs_blocks(l,t),n=new B;n.put(4,4),n.put(r.length,E.get_length_in_bits(l)),n.put_bytes(r);let s=0;for(let e=0;e<i.length;e+=1)s+=i[e].data_count;if(n.get_length_in_bits()>s*8)throw"code length overflow. ("+n.get_length_in_bits()+">"+s*8+")";for(n.get_length_in_bits()+4<=s*8&&n.put(0,4);n.get_length_in_bits()%8!=0;)n.put_bit(!1);for(;!(n.get_length_in_bits()>=s*8||(n.put(S,8),n.get_length_in_bits()>=s*8));)n.put(I,8);return z(n,i)}const E=function(){const l=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,r=7973,i=21522;function n(s){let e=0;for(;s!=0;)e+=1,s>>>=1;return e}return{get_bch_type_info(s){let e=s<<10;for(;n(e)-n(t)>=0;)e^=t<<n(e)-n(t);return(s<<10|e)^i},get_bch_type_number(s){let e=s<<12;for(;n(e)-n(r)>=0;)e^=r<<n(e)-n(r);return s<<12|e},get_pattern_position(s){return l[s-1]},get_mask_function(s){switch(s){case w.PATTERN000:return function(e,o){return(e+o)%2==0};case w.PATTERN001:return function(e,o){return e%2==0};case w.PATTERN010:return function(e,o){return o%3==0};case w.PATTERN011:return function(e,o){return(e+o)%3==0};case w.PATTERN100:return function(e,o){return(Math.floor(e/2)+Math.floor(o/3))%2==0};case w.PATTERN101:return function(e,o){return e*o%2+e*o%3==0};case w.PATTERN110:return function(e,o){return(e*o%2+e*o%3)%2==0};case w.PATTERN111:return function(e,o){return(e*o%3+(e+o)%2)%2==0};default:throw"bad mask_pattern:"+s}},get_error_correct_polynominal(s){let e=new x([1],0);for(let o=0;o<s;o+=1)e=e.multiply(new x([1,b.gexp(o)],0));return e},get_length_in_bits(s){if(1<=s&&s<10)return 8;if(s<27)return 16;if(s<41)return 16;throw"type:"+s}}}(),b=function(){const l=new Array(256),t=new Array(256);for(let r=0;r<8;r+=1)l[r]=1<<r;for(let r=8;r<256;r+=1)l[r]=l[r-4]^l[r-5]^l[r-6]^l[r-8];for(let r=0;r<255;r+=1)t[l[r]]=r;return{glog(r){if(r<1)throw"glog("+r+")";return t[r]},gexp(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return l[r]}}}();var y;const R=class R{constructor(t,r){m(this,y);if(typeof t.length>"u")throw t.length+"/"+r;let i=0;for(;i<t.length&&t[i]==0;)i+=1;N(this,y,new Array(t.length-i+r));for(let n=0;n<t.length-i;n+=1)g(this,y)[n]=t[n+i]}get_at(t){return g(this,y)[t]}get_length(){return g(this,y).length}multiply(t){const r=new Array(this.get_length()+t.get_length()-1);for(let i=0;i<this.get_length();i+=1)for(let n=0;n<t.get_length();n+=1)r[i+n]^=b.gexp(b.glog(this.get_at(i))+b.glog(t.get_at(n)));return new R(r,0)}mod(t){if(this.get_length()-t.get_length()<0)return this;const r=b.glog(this.get_at(0))-b.glog(t.get_at(0)),i=new Array(this.get_length());for(let n=0;n<this.get_length();n+=1)i[n]=this.get_at(n);for(let n=0;n<t.get_length();n+=1)i[n]^=b.gexp(b.glog(t.get_at(n))+r);return new R(i,0).mod(t)}};y=new WeakMap;let x=R;const O=function(){const l=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function t(r,i){switch(i){case P.L:return l[(r-1)*4+0];case P.M:return l[(r-1)*4+1];case P.Q:return l[(r-1)*4+2];case P.H:return l[(r-1)*4+3];default:return}}return{get_rs_blocks(r,i){const n=t(r,i);if(typeof n>"u")throw"bad rs block @ version:"+r+"/error_correction_level:"+i;const s=n.length/3,e=[];for(let o=0;o<s;o+=1){const f=n[o*3+0],a=n[o*3+1],c=n[o*3+2];for(let h=0;h<f;h+=1)e.push({total_count:a,data_count:c})}return e}}}();var A,T;class B{constructor(){m(this,A,[]);m(this,T,0)}get_buffer(){return g(this,A)}put(t,r){for(let i=0;i<r;i+=1)this.put_bit((t>>>r-i-1&1)==1)}get_length_in_bits(){return g(this,T)}put_bit(t){const r=Math.floor(g(this,T)/8);g(this,A).length<=r&&g(this,A).push(0),t&&(g(this,A)[r]|=128>>>g(this,T)%8),N(this,T,g(this,T)+1)}put_bytes(t){for(let r=0;r<t.length;r+=1)this.put(t[r],8)}}A=new WeakMap,T=new WeakMap;class F extends HTMLElement{static get observedAttributes(){return["input","width"]}get input(){return this._input}get width(){return this._width}set input(t){this._input=t,this.setAttribute("input",this.input),this._renderCanvas()}set width(t){this._width=Number.parseInt(t,10),this.setAttribute("width",`${this.width}px`),this.setAttribute("height",`${this.width}px`),this.setWidth(),this._renderCanvas()}attributeChangedCallback(t,r,i){if(i!==r){switch(t){case"input":this._input=i;break;case"width":this._width=Number.parseInt(i,10),this.setWidth();break}this._renderCanvas()}}_upgradeProperty(t){if(Object.hasOwnProperty.call(this,t)){const r=this[t];delete this[t],this[t]=r}}constructor(){super(),this.attachShadow({mode:"open"});const t=document.createElement("style");this._width=300,this.canvas=document.createElement("canvas"),this.canvas.setAttribute("part","canvas"),t.textContent=":host { display: block; background-color: #fff } ::part(canvas), canvas { --canvas-fill: #000; aspect-ratio: 1; image-rendering: pixelated }",this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(this.canvas)}connectedCallback(){this._upgradeProperty("input"),this._upgradeProperty("width"),this.setWidth(),this._renderCanvas()}setWidth(){this.canvas.style.width=`${this.width}px`,this.style.width=`${this.width}px`,this.style.height=`${this.width}px`}_renderCanvas(){const t=$(this.input),r=this.canvas.getContext("2d");this.canvas.width=this.canvas.height=t.length,r.fillStyle=getComputedStyle(this.canvas).getPropertyValue("--canvas-fill"),t.forEach((i,n)=>{i.forEach((s,e)=>{s&&r.fillRect(e,n,1,1)})})}}customElements.define("qr-element",F);
