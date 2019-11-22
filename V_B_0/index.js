var app = new Vue({
    el: '#app',
    data:{
        message: 'Hello from Vue.js'
    },
    methods: {
        update_message: function(){
            this.message = document.getElementById("newMessageBtn").value
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Second Vue message',
        seen: true,
        button_message: 'disappear'
    },
    methods: {
        disappear: function(){
            this.seen = false
            this.button_message = 'appear'
        },
        appear: function(){
            this.seen = true
            this.button_message = 'disappear'
        },
        switch_appear: function(){
            if (this.seen == true){
                this.disappear()
            }
            else{
                this.appear()
            }
        }
    }
})