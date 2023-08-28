function vals()
{
    var names=document.getElementById("exampleInputEmail1").value;
    var email=document.getElementById("exampleInputPassword1").value;
    var des=document.getElementById("exampledes").value;

            //alert(name)

            if(email=="" || des=="" || names=="")
            {
                alert("DETAILS REQUIRED");
                return false;

              
            }

            else
            {
                alert("Go next!!!");
                return true;
               
            }
}

function result()
{
    var math1 = document.getElementById("maths").value;
    var sci2 = document.getElementById("science").value;
    var com3 = document.getElementById("computer").value;

    var math = parseInt(math1);
    var sci = parseInt(sci2);
    var com = parseInt(com3);

    var total = math+sci+com
    document.getElementById("total").value=total;

    var per = (total/300)*100;

    document.getElementById("percentage").value=per;

    document.getElementById("max").value=300;
}

function load()
{
    window.open("load.html","width=20px","height=20px","top=100","left=200")
}
function selects()
{
    var a = document.getElementById("aa").value

    if(a=="MERN"){
        alert("SELECTED MERN STACK");

    }
    if(a=="MEAN"){
        alert("SELECTED MEAN STACK");
        
    }
    if(a=="MEVN"){
        alert("SELECTED MEVN STACK");
    }
}
function subscription()
{
    var email = prompt("ENTER YOUR EMAIL ID TO SUBSCRIBE")
    if(email!="")
    {
        var con = prompt("ENTER YOUR COUNTRY NAME")
        if(con.toLowerCase() == "india")
        {
            alert("YOU GOT 50% OFF")
        }
        else if(con==""){
            alert("PLEASE ENTER YOUR COUNTRY");
        }
        else{
            alert("THANKYOU FOR SUBSCRIBING")
        }
    }else{
        alert("PLEASE ENTER YOUR MAIL ID")
    }
}
function answer()
{
   var a = document.getElementsByName("q1");
    var b = document.getElementsByName("q2")
    var count1=0;
    var count2=0;
    for (let i of a) {
    

        if (i.checked) {
            if(i.value=="Static Page")
            {
            count1=count1+2;
            }
          }
    }
    for (let i of b) {

        if (i.checked) 
        {
            if(i.value=="Dynamic Page")
            {
            count2=count2+2;
            }
          }
    }

    alert("YOUR SCORE IS  "+(count1+count2))
    
    
}