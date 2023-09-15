import { Component,OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho,produtos } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
 
  produto : IProduto | undefined;
  quantidade = 1 ;
  id: number | null = null;
 
  constructor( 
      private produtosService: ProdutosService,
      private route: ActivatedRoute,
      private carrinhoService: CarrinhoService    
    ) { }
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = Number(params.get('id'));
        this.produto=this.produtosService.getOne(this.id);
      });          
    }   

    adicionarAoCarrinho() {     
     const produto: IProdutoCarrinho = {
       ...this.produto!,
       quantidade: this.quantidade
     }

      this.carrinhoService.adicionarAoCarrinho(produto);
            
    }  
}
