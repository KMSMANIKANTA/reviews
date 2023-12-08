var data=[
{
    img:'img1.jpg',
    nam:'Philip James',
    duty:'Web Developer',
    text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur nam qui dicta neque cumque adipi."
},
{
    img:'img2.jpg',
    nam:'Sara Jones',
    duty:'Ux Designer',
    text:"it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
},
{
    img:'img3.jpeg',
    nam:'Thomas Mark',
    duty:'Java Developer',
    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",

},
{
    img:'img4.jpg',
    nam:'Scarlett Ruby',
    duty:'Web Designer',
    text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin li."
}
]
var image=document.getElementById('img')
var title=document.getElementById('name')
var job=document.getElementById('duty')
var text=document.getElementById("text")

var prevbtn=document.querySelector('#pre')
var nextbtn=document.querySelector('#next')
var random=document.querySelector("#suprisebtn")
var currentitem=0;
showperson(currentitem)
function showperson(person){
    var item=data[person]
    image.src=item.img;
    title.textContent=item.nam
    job.textContent=item.duty
    text.textContent=item.text
}
prevbtn.addEventListener('click',function(){
    currentitem--
    if(currentitem<0){
        currentitem=data.length-1;
    }
    showperson(currentitem)
}
)
nextbtn.addEventListener('click',function(){
    currentitem++
    if(currentitem>3){
        currentitem=0
    }
    showperson(currentitem)
})

random.addEventListener('click',function(){
    currentitem=Math.floor(Math.random()*data.length)
    showperson(currentitem)
})