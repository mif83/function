/**
 * Created by dima on 16.03.2017.
 */
function bind(func, context, param){
    var arr = Array.prototype.slice.call(arguments, 2);
    return function(){
       var sum = arr.concat(Array.prototype.slice.call(arguments));
       return func.apply(context, sum);
    }
}
function sum(a,b,c){
    let a1 = a || 0,
        b1 = b || 0,
        c1 = c || 0;
    console.log(this.name);
    return a1+b1+c1;
};

let user = {
    name:"Petya"
};

sum = bind(sum, user, 10);
sum(1,1,1); // 12