function exN(n){
    document.write('<br><div class="line">'+n+'</div><br>')
}

//1.
exN(1)
function styleText(text){
    return  '<p style="font-style: italic;text-decoration: underline;">'+text+'</p>'
}

document.write(styleText("daxare da xazi gausvi am teqsts"))

//2.
exN(2)
function sum(a,b){
    return a+b
}

document.write(sum(4,9))

//3.
exN(3)
function textSize(text,size){
    return '<p style="font-size: '+size+'px;">'+text+'</p>'
}

document.write(textSize("didi teqsti",52))

//4.
exN(4)
function tableWithWidth(width){
    document.write('<table class="x2" style="width: '+width+'px">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithWidth(470)

//5.
exN(5)
function tableWithHeight(height){
    document.write('<table class="x2" style="height: '+height+'px">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithHeight(40)

//6.
exN(6)
function tableWithSize(width,height){
    document.write('<table class="x2" style="width: '+width+'px;height: '+height+'px">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithSize(23,58)

//7.
exN(7)
function tableWithBackgroundColor(color){
    document.write('<table class="x2" style="background-color: '+color+'">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithBackgroundColor("orange");

//8.
exN(8)
function tableWithBorderSize(size){
    document.write('<table class="x2" style="border-width: '+size+'px">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithBorderSize(15)

//9.
exN(9)
function tableWithParameters(width,height,color,border){
    document.write('<table class="x2" style="width: '+width+'px;height: '+height+'px;background-color: '+color+';border-width: '+border+'px">')
    for(i=0;i<2;i++){
        document.write("<tr>")
        for(j=0;j<2;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithParameters(300,40,"blue",10)

//10.
exN(10)

//11.
exN(11)
function printN10(){
    for(n=1;n<=10;n++){
        document.write(n+"&ensp;")
    }
    document.write("<br>")
}

document.write("<br>")
printN10()

//12.
exN(12)
function printN(n){
    for(i=1;i<=n;i++){
        document.write(i+"<br>")
    }
}

document.write("<br>")
printN(23)

//13.
exN(13)
function printNM(n,m){
    if(n<1){
        n=1
    }
    for(i=n;i<=m;i++){
        document.write(i+"<br>")
    }
}

document.write("<br>")
printNM(12,18)

//14.
exN(14)
function printNM2(n,m){
    if(n<=m){
        printNM(n,m);
    }else{
        printNM(m,n);
    }
}

document.write("<br>")
printNM2(19,3)

//15.
exN(15)
function tableWithRowCol(row,col){
    document.write("<table>")
    for(i=0;i<row;i++){
        document.write("<tr>")
        for(j=0;j<col;j++){
            document.write('<td class="const-size">')
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithRowCol(20,4)

//16.
exN(16)
function tableWithRowColIndex(row,col){
    document.write("<table>")
    for(i=1;i<row+1;i++){
        document.write("<tr>")
        for(j=1;j<col+1;j++){
            document.write('<td class="const-size">Row: '+i+' Column: '+j+'</td>')
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithRowColIndex(7, 6)

//17.
exN(17)
function tableWithRowColParameters(row,col,width,height,color,border){
    document.write('<table style="width: '+width+'px;height: '+height+'px;background-color: '+color+';border-width: '+border+'px">')
    for(i=0;i<row;i++){
        document.write("<tr>")
        for(j=0;j<col;j++){
            document.write("<td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

tableWithRowColParameters(23,8,800,1300,"green",30)

//18.
exN(18)
function array12X(x){
    n = Array(12)
    less=0, more=0
    for(i=0;i<12;i++){
        n[i] = Math.floor(Math.random()*90)+10
    }
    console.log("Elements:")
    for(i=0;i<12;i++){
        console.log(n[i])
        if(n[i]<x){
            console.log("less")
            less++
        }else if(n[i]>x){
            console.log("more")
            more++
        }
    }
    document.write("<br>x="+x+"<br>Less: "+less+"; More: "+more+"<br>")
}

array12X(45)

//19.
exN(19)
function array4x4(x){
    //შექმნა
    m = new Array(4)
    for(i=0;i<4;i++){
        t = new Array(4)
        for(j=0;j<4;j++){
            t[j] = Math.floor(Math.random()*90)+10
        }
        m[i] = t
    }

    //გამოტანა
    document.write("<table>")
    for(i=0;i<4;i++){
        document.write("<tr>")
        for(j=0;j<4;j++){
            document.write('<td class="const-size">'+m[i][j]+'</td>')
        }
        document.write("</tr>")
    }
    document.write("</table>")

    //მთავარი დიაგონალის ზემოთ მდგომი ელემენტები
    document.write("<table>")
    for(i=0;i<4;i++){
        document.write("<tr>")
        j=0
        for(j;j<=i;j++){
            document.write('<td class="const-size empty-cell">')
        }
        for(j;j<4;j++){
            document.write('<td class="const-size">'+m[i][j]+'</td>')
        }
        document.write("</tr>")
    }
    document.write("</table>")

    //x-ის ჯერადები
    document.write(x+"-ის ჯერადები:&ensp;")
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(m[i][j]%x==0){
                document.write(m[i][j]+"&ensp;")
            }
        }
    }
    document.write("<br>")

    //ჯამი,ნამრავლი,საშუალო,განი
    nSum=0, multi=1, n=0, max=min=m[0][0]
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            nSum+=m[i][j]
            multi*=m[i][j]
            n++
            if(m[i][j]>max){
                max=m[i][j]
            }else if(m[i][j]<min){
                min=m[i][j]
            }
        }
    }
    document.write("ჯამი: "+nSum+"; ნამრავლი: "+multi+"; საშუალო: "+(nSum/n)+"; განი: "+(max-min)+";<br>")

    //ციფრთა ჯამი
    document.write("<table>")
    for(i=0;i<4;i++){
        document.write("<tr>")
        for(j=0;j<4;j++){
            document.write('<td class="const-size">'+(m[i][j]%10+Math.floor(m[i][j]/10))+'</td>')
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

array4x4(9)

//20.
exN(20)
function array6x5(){
    //შექმნა
    m = new Array(6)
    for(i=0;i<6;i++){
        t = new Array(5)
        for(j=0;j<5;j++){
            t[j] = i+j
        }
        m[i]=t
    }
    //ბეჭდვა
    document.write("<table>")
    for(i=0;i<6;i++){
        document.write("<tr>")
        for(j=0;j<5;j++){
            document.write('<td class="const-size">'+m[i][j]+'</td>')
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

document.write("<br><br>")
array6x5()