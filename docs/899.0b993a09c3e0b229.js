"use strict";(self.webpackChunkloja_online=self.webpackChunkloja_online||[]).push([[899],{1899:(x,d,a)=>{a.r(d),a.d(d,{CarrinhoModule:()=>f});var l=a(6814),h=a(72),n=a(4946),p=a(8594),c=a(95);function C(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",5),n.TgZ(2,"P"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",6),n.NdJ("ngModelChange",function(i){const u=n.CHM(o).$implicit;return n.KtG(u.quantidade=i)})("change",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.calculaTotal())}),n.qZA()(),n.TgZ(10,"button",7),n.NdJ("click",function(){const s=n.CHM(o).$implicit,u=n.oxw(2);return n.KtG(u.removerProdutoCarrinho(s.id))}),n._UZ(11,"i",8),n.qZA()()}if(2&t){const o=e.$implicit;n.xp6(1),n.Q6J("src",o.imagem,n.LSH),n.xp6(2),n.Oqu(o.descricao),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,4,o.preco,"BRL")," "),n.xp6(4),n.Q6J("ngModel",o.quantidade)}}function g(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,C,12,7,"li",2),n.qZA(),n.TgZ(3,"h2",3),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",4),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngForOf",o.itensCarrinho),n.xp6(2),n.hij("Total:",n.xi3(5,2,o.total,"BRL"),"")}}const m=[{path:"",component:(()=>{var t;class e{constructor(r,i){this.carrinhoService=r,this.router=i,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((r,i)=>r+i.preco*i.quantidade,0)}removerProdutoCarrinho(r){const i=this.itensCarrinho.findIndex(s=>s.id===r);this.itensCarrinho.splice(i,1),this.carrinhoService.removerProdutoCarrinho(i),this.calculaTotal()}comprar(){this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"]),alert("Compra finalizada !")}}return(t=e).\u0275fac=function(r){return new(r||t)(n.Y36(p.e),n.Y36(h.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-carrinho"]],decls:3,vars:1,consts:[[1,"cart-title"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(r,i){1&r&&(n.TgZ(0,"h2",0),n._uU(1,"Carrinho"),n.qZA(),n.YNc(2,g,8,5,"div",1)),2&r&&(n.xp6(2),n.Q6J("ngIf",i.itensCarrinho.length>0))},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:#00f;border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),e})()}];let _=(()=>{var t;class e{}return(t=e).\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[h.Bz.forChild(m),h.Bz]}),e})(),f=(()=>{var t;class e{}return(t=e).\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[l.ez,_,c.u5]}),e})()}}]);