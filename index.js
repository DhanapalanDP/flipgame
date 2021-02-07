const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const scoreWon = document.querySelector('.scoreSuccess')
const failedGame = document.querySelector('.failed')
// random images 
const myimage = new Array("./images/1.jpg","./images/image2.jpg","./images/3.jpg")
const myimage2 = new Array("./images/1.jpg","./images/image2.jpg","./images/3.jpg")
const newArray = [ myimage[0], myimage[1],myimage[2],myimage2[0],myimage2[1], myimage2[2]]

const shuffle3 = (a) =>{
    let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        return a;
        }
}
const randomImage = shuffle3(newArray)
document.getElementById('new1').src = randomImage[0]
document.getElementById('new2').src = randomImage[3]
document.getElementById('new3').src = randomImage[5]
document.getElementById('new11').src = randomImage[1]
document.getElementById('new22').src = randomImage[4]
document.getElementById('new33').src = randomImage[2]
const array = [one, two, three, four, five, six];
var count = 0;

for (let i = 0; i < array.length; i++) {
    var score = []
  
    var a = 1;
    var b = 1;
    array[i].addEventListener('click', function(){
        array[i].style.display = "none"
        count +=1;
        const img = array[i].previousElementSibling
        score = [...score,img.src];
        
        if((count==2)){
            if((score[0]==score[1])){
                        scoreWon.innerHTML=b;
                        b += 1;
                    }else{
                        failedGame.innerHTML=a
                        a=a+1
                    }
        }
        else if(count==3){
             if((score[0]==score[2])||(score[1]==score[2])){
                failedGame.innerHTML=a
                a=a+1
                setTimeout(() => {
                    alert("You lost the match! Please try again");
                    setInterval(function(){
                        window.location.reload(1);
                     }, 500);
                }, 500);

            } 
        }
        else if(count==4){
            if((score[2]==score[3])){
                scoreWon.innerHTML=b;
                b= b+1
                    }else{
                        failedGame.innerHTML=a;
                        a=a+1
                    }
                if((score[0]==score[1])&&(score[2]==score[3])){
                        setTimeout(() => {
                            alert("You won the match!");
                            setInterval(function(){
                                window.location.reload(1);
                             }, 500);
                        }, 500);
                }else if(((score[0]!=score[1])&&(score[2]==score[3]))||((score[0]==score[1])&&(score[2]!=score[3]))){
                    setTimeout(() => {
                        alert("draw match");
                        setInterval(function(){
                            window.location.reload(1);
                         }, 500);
                
                    }, 500);
                }
                else{
                    setTimeout(() => {
                        alert("You lost the match! Please try again");
                        setInterval(function(){
                            window.location.reload(1);
                         }, 500);
                    }, 500);
                    
                }              
        }      
})


}

