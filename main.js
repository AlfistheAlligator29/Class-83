
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width
    New_width = screen.width -70
    New_height = screen.height -300
    if (width < 992){
        document.getElementById ("myCanvas").width = New_width
        document.getElementById ("myCanvas").height = New_height
        document.body.style.overflow = "hidden"

    }

    canvas.addEventListener("touchstart", mytouchstart);

    
    function mytouchstart(e)
    {
        console.log("mytouchstart");

        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop
    }


    canvas.addEventListener("touchmove", mytouchmove);
    function mytouchmove(e)
    {
console.log("mytouchmove")
         current_position_of_touchX = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touchY = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touchX + "y = " + current_position_of_touchY);
        ctx.lineTo(current_position_of_touchX, current_position_of_touchY);
        ctx.stroke();
    

        last_position_of_x = current_position_of_touchX; 
        last_position_of_y = current_position_of_touchY;

    }

