import { Component, OnInit, ViewChild, ElementRef, Output , EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName') nameInputRef : ElementRef; 
  @ViewChild('inputAmount') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter <Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
