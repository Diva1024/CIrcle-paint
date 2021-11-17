canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_postition_of_x,last_postition_of_y;
var current_postition_of_mousex,current_postition_of_mousey;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
radius=document.getElementById("radius").value
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   current_postition_of_mousex=e.clientX-canvas.offsetLeft;
   current_postition_of_mousey=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("x= "+current_postition_of_mousex+ "y= " +current_postition_of_mousey);
        ctx.arc(current_postition_of_mousex, current_postition_of_mousey, radius, 0,2*Math.PI);
        ctx.stroke();
    }
}