const numberButtons=document.querySelectorAll("[data-number]");
const operatorButtons=document.querySelectorAll("[data-operator]");
const equalButton=document.querySelector("[data-equals]");
const allClearButton=document.querySelector("[data-all-clear]");
const deleteButton=document.querySelector("[data-delete]");
const prevOperandTextEl=document.querySelector("[data-prev-operand]");
const currOperandTextEl=document.querySelector("[data-curr-operand]");


class Calculator{
    constructor(prevOperandTextEl,currOperandTextEl){
        this.prevOperandTextEl=prevOperandTextEl;
        this.currOperandTextEl=currOperandTextEl;
        this.clear();
    }

}

function clear(){
    this.currOperandTextEl=''
    this.prevOperandTextEl=''
    this.operation=undefined
}
delete(){

}

function appendNumber(number){

}

function chooseOperation(operation){

}

function compute(){

}

function updateDispley(){

}

