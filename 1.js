const app = new Vue({
    el: '#app',
    data: {
        Titulo: 'To-Do-List',   
        ToDo: [],
        nuevatarea: ''
    },
    methods: {
        agregartarea: function(){
           // console.log (this.nuevatarea)
           this.ToDo.push({
               nombre: this.nuevatarea,
               estado: false,
           });
           console.log(this.ToDo),
           this.nuevatarea = ''
        },
        editartarea: function(index){
            this.ToDo[index].estado = true;
        },
        eliminar: function(index){
            this.ToDo.splice(index, 1);
        }
    },
});