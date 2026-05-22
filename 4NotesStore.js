/*
Implementa a classe NotesStore que gere notas organizadas por estado.
Estados válidos: "active", "completed". Qualquer outro estado deve ser ignorado ou tratado como "others".
Requisitos:
addNote(state, note) — adiciona uma nota ao estado dado.
getNotesByState(state) — retorna array com as notas desse estado.
getAllNotes() — retorna objeto { active: [...], completed: [...], others: [...] }.
Inicialmente todas as listas estão vazias.
*/

class NotesStore {

constructor (notes){
    this.notes = {
        active: [],
        completed: [],
        others: []
    };
}

addNote(state,note){ // verificar estado e adicionar a nota
    if (state === "active" || state === "completed"){
        this.notes[state].push(note);
    }
    else{
        this.notes.others.push(note);
    }
}

getNotesByState(state){
    return this.notes[state] || [];  // devolve um array vazio em vez de undefined, se o estado(propriedade) não existir
}

getAllNotes(){
    return this.notes;
}

}

const store = new NotesStore();
store.addNote("active", "Buy groceries");
store.addNote("completed", "Walk the dog");
store.addNote("pending", "Read book");       

console.log(store.getNotesByState("active"));    
console.log(store.getNotesByState("completed")); 
console.log(store.getNotesByState("others"));  