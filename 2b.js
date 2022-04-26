//1 to 99 skip one number
    let n=100;
    let i=0;
    for(i=0;i<=100;i++){
        if(i%2==0){
            continue;
        }
        document.write(i+"<br>");
    }