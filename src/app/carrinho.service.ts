import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' 
})
export class CarrinhoService {
  itens: IProdutoCarrinho[]=[];

  constructor(
    private router: Router
  ) { }

  obtemCarrinho() { 
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");    
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) { 
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId:number){
    const indice=this.itens.findIndex(indice => indice.id === produtoId)      
    this.itens.splice(indice,1)
     
    //this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));  
  }
  
  limparCarrinho() { 
    this.itens = [];
    localStorage.clear();
  }
}
