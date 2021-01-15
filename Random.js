let r,c=0;
function toss()
{
    document.getElementById("container").style.visibility="visible";
    let i=Math.round(Math.random());
    if(i==0)
    {
        document.getElementById("toss").innerHTML="Head";
        document.getElementById("toss").disabled=true;
        r= i;
    }
    else
    {
        document.getElementById("toss").innerHTML="Tail";
        document.getElementById("toss").disabled=true;
        r= i;
    }

}
function mark(e)
{
    c++;
    let a;

    if(r==0)
    {
        a="X";
    if(c%2==0)
    {
        a="O";
    }
    else
    {
        a="X";
    }
        e.currentTarget.innerHTML=a;
    }
    else
    {
        a="O";
        if(c%2==0)
        {
            a="X";
        }
        else
        {
            a="O";
        }
        e.currentTarget.innerHTML=a;
    }
ar();
}
function reload()
{
    window.location.replace("index.html");
}
function ar() {
    let a = document.getElementsByClassName("box");
    if ((a[0].innerHTML == "X" && a[1].innerHTML == "X" && a[2].innerHTML == "X") || (a[0].innerHTML == "O" && a[1].innerHTML == "O" && a[2].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[3].innerHTML == "X" && a[4].innerHTML == "X" && a[5].innerHTML == "X") || (a[3].innerHTML == "O" && a[4].innerHTML == "O" && a[5].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[6].innerHTML == "X" && a[7].innerHTML == "X" && a[8].innerHTML == "X") || (a[6].innerHTML == "O" && a[7].innerHTML == "O" && a[8].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[0].innerHTML == "X" && a[3].innerHTML == "X" && a[6].innerHTML == "X") || (a[0].innerHTML == "O" && a[3].innerHTML == "O" && a[6].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[1].innerHTML == "X" && a[4].innerHTML == "X" && a[7].innerHTML == "X") || (a[1].innerHTML == "O" && a[4].innerHTML == "O" && a[7].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[2].innerHTML == "X" && a[5].innerHTML == "X" && a[8].innerHTML == "X") || (a[2].innerHTML == "O" && a[5].innerHTML == "O" && a[8].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[0].innerHTML == "X" && a[4].innerHTML == "X" && a[8].innerHTML == "X") || (a[0].innerHTML == "O" && a[4].innerHTML == "O" && a[8].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
    if ((a[2].innerHTML == "X" && a[4].innerHTML == "X" && a[6].innerHTML == "X") || (a[2].innerHTML == "O" && a[4].innerHTML == "O" && a[6].innerHTML == "O")) {
        document.querySelector("#result").style.display = "block";
        setTimeout(reload, 3000);
    }
}