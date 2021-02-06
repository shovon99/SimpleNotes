const app = {
    data() {
        return{
            flagForErrorMessage: false,
            note: "",
            notes: [],
        }
    },
    computed: {
        remainingNoteAmount(){
            return this.notes.length;
        }
    },
    methods: {
        printToConsole(){
            console.log(this.note)
        },
        processNote(press){
            if(this.note !=""){
                this.notes.push(this.note);
                this.note = "";

                if(this.flagForErrorMessage){
                    this.flagForErrorMessage = false;
                }
            }
            else{
                this.flagForErrorMessage = true;
            }
        },
        deleteLastNote(){
            if(this.notes.length !==0){
                this.notes.pop();
            }
        },
        deleteAllNotes(){
            this.notes = [];
        },
        removeElement(index){
            this.notes.splice(index, 1);
        },
        newline(){
            this.note = this.note + "\n";
        }
    }
}

var App = Vue.createApp(app)

App.mount("#app")