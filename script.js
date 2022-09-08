const billAmount=document.querySelector(".bill-amount");
const cashGiven=document.querySelector(".cash-given");
const checkNow=document.querySelector(".check-now");
const outputBoxArea= document.querySelector(".output-boxarea");
function calculate(){
if(billAmount.value>0 && cashGiven.value>billAmount.value)
{
const amtreturn=cashGiven.value-billAmount.value;
const nd=[0,0,0,0,0,0,0];
while(amtreturn!=0)
    {
        if(amtreturn>2000)
        {
        amtreturn=amtreturn-2000;
        nd[0]++;}
        else if(amtreturn>500){

        
        amtreturn=amtreturn-500;
        nd[1]++;}
        else if(amtreturn>100)
        {nd[2]++;
        amtreturn=amtreturn-100;
    }
        else if(amtreturn>20){
        nd[3]++;
        amtreturn=amtreturn-20;}
        else if(amtreturn>10){nd[4]++;
        amtreturn=amtreturn-10;}
        else if(amtreturn>5){nd[5]++;
        amtreturn=amtreturn-5;}
        else if(amtreturn>1){
            nd[6]++;
        amtreturn=amtreturn-1;}
    }
    console.log(nd);
}
else
{
   outputBoxArea.innerText="Wrong Input";
}
}
checkNow.addEventListener('click',calculate);
