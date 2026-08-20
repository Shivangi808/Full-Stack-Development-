//function sum(a,b){
  //  return a+b;
//}
//const result=sum(20,50);
//console.log("Sum="+result);

function sum(a,b){
    return a+b;
}

function sumWithMsg(clbk,msg){
    const result=clbk(20,40);
    console.log(msg+":"+result)
}

sumWithMsg(sum,"Hey using calculation with jS")

function login(msg,error){
    if(error){
        console.log("Error is"+error);
    }
    else{
        console.log("Welcome"+msg);
    }
}

function loginVerification(username,password,clbk){
    if(username=="Sakshikumari-28" && password=="123456"){
        clbk("Success",null);
    }else{
        clbk(null,"Username or password is incorrect")
    }
}

loginVerification("Sakshikumari-28","123456",login)

function randomNumber(callback){
    const num=(Math.random()*100)+1;
    callback(num);
}

function evenOdd(num) {
    if (num%2==0) {
        console.log(num+" is Even");
    }else{
        console.log(num+" is Odd");
    }
}

randomNumber(evenOdd);

//async function handleLogin(){
// try{
//      await promise

//}}