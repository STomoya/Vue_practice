var app = new Vue({
    el: "#app",
    data: {
        list_element: [
        ],
        query : ''
    },
    methods: {
        add_element: function(){
            // get value from input form
            var new_text = document.getElementById("newElementTB")
            if (new_text.value != ''){
                var new_element = {
                    id : this.list_element.length,
                    text : new_text.value
                }
                this.list_element.push(new_element)
            }
            new_text.value=''
        },
        erase_element: function(id){
            // erase specific element
            this.list_element.splice(id, 1)
            // redefine id number
            var id_count = new Number(0)
            for (element in this.list_element){
                this.list_element[id_count]["id"] = id_count
                id_count += 1
            }
        },
        search_element: function(element){
            if (this.query != ''){
                if (!element["text"].includes(this.query)){
                    return false
                }
            }
            return true
        },
        switch_search: function(){
            this.query = document.getElementById("searchQueryTB").value
        }
    }
})