var vm = new Vue({
    el: "#app",
    data: {
        title: "Hello Vue !!!",
        productList: [],
        totalMoney: 0,
        delFlag: false,
        delProduct: false
    },
    filters: {
        money: function(){
            
        }
    },
    mounted: function(){
        this.cartView();
    },
    methods:{
        cartView: function(){
            var _this = this;
            this.$http.get("data/cartData.json", {
                params: {
                    "id":123
                }
            }).then(function(res){
                console.log("res is : ", res);
                _this.productList = res.result.list;
                _this.totalMoney = res.result.totalMoney;

            })
        },
        checkAllFlag: function(){

        }
    }
});