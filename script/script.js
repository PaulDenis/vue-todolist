// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).

var app = new Vue (
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    text:"Fare l'esercitazione Boolean",
                    completata: false
                },
                {
                    text:"Tagliare l'erba in giardino",
                    completata: false
                },
                {
                    text:"Dare da mangiare al pappagallo",
                    completata: false
                }
            ],
            newTask: "",
        },
        methods: {
            setComplete: function(index) {
                // console.log(index);
                if(this.toDoList[index].completata == false){
                    this.toDoList[index].completata = true;
                    // console.log(this.toDoList[index].completata);
                } else {
                    this.toDoList[index].completata = false;
                    // console.log(this.toDoList[index].completata);

                }
            },
            removeTask: function(index) {
                this.toDoList.splice(index, 1);
                // console.log(this.toDoList[index]);
            },
            addTask: function () {
                if(this.newTask.trim() != "") {
                    this.toDoList.push({'text': this.newTask, 'completata': false});
                    this.newTask = "";
                } else {
                    this.newTask = "";
                }
            }
        }

    }
)