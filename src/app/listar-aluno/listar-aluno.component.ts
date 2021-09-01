/* Vinicius Cerosi SC30054531 */
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  alunoInfo: Aluno = {
    nome: "Vinicius de Matos Cerosi",
    dataIngresso: "01/01/2019",
    previsaoFormatura: "01/07/2022"
  }

  constructor() { }

  ngOnInit(): void {
  }
}