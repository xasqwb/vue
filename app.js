//实例化Vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"wang",
        age:30,
        website:"https://www.baidu.com"
    },
    methods:{
        greet:function(time){
            return 'Good '+ time+" "+this.name+" !";
        },
        add: function(){
            this.age++;
        }

    }
})

/*
*v-bind :属性绑定
*/