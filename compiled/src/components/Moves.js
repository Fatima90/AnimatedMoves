
$(document).ready(function() {
$("p").hide();
$("h1").hide();
var svgContainer = d3.select("#prayermoves").append("svg")
                                     .attr("width", 600)
                                     .attr("height", 600);
                                     

  var head = svgContainer.append("circle")
                          .attr("cx", 300)
                          .attr("cy", 70)
                          .attr("r", 35)
                          .attr("fill","#e6e6fa")
                          .attr("stroke-width", 7)
                          .attr("stroke", "black");

var eye= svgContainer.append("circle")
                          .attr("cx", 320)
                          .attr("cy", 70)
                          .attr("r", 5)
                          .attr("fill","black")

var back= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 105)
                          .attr("x2", 300)
                          .attr("y2", 210)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black");

var legs= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 210)
                          .attr("x2", 300)
                          .attr("y2", 330)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black");

var legs2= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 265)
                          .attr("x2", 300)
                          .attr("y2", 330)
                          .attr("stroke-width", 6)
                          .attr("stroke", "black");                                                    

var handsright1= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 105)
                          .attr("x2", 275)
                          .attr("y2", 150)
                          .attr("stroke-width", 6)
                          .attr("stroke", "black"); 

var handsright2= svgContainer.append("line")
                          .attr("x1", 270)
                          .attr("y1", 150)
                          .attr("x2", 300)
                          .attr("y2", 160)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black");


var handsleft1= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 105)
                          .attr("x2", 320)
                          .attr("y2", 145)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black"); 

var handsleft2= svgContainer.append("line")
                          .attr("x1", 300)
                          .attr("y1", 160)
                          .attr("x2", 320)
                          .attr("y2", 140)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black");

var foot= svgContainer.append("line")
                          .attr("x1", 297)
                          .attr("y1", 330)
                          .attr("x2", 310)
                          .attr("y2", 330)
                          .attr("stroke-width", 7)
                          .attr("stroke", "black"); 


$("#stream").on("click", function(){
       $('#scale').animate({height: "300px"});
       $("p").show();
       $("h1").show();
        
//first move
head.transition()
		.delay(2000)
		.duration(2000)
		.attr("cx",420)
		.attr("cy",165)

eye.transition()
		.delay(2000)
		.duration(2000)
		.attr("cx",420)
		.attr("cy",180)

back.transition()
		.delay(2000)
		.duration(2000)
		.attr("x1",400)
		.attr("y1",190)

handsright1.transition()
		.delay(2000)
		.duration(2000)
		.attr("x1",400)
		.attr("y1",190)
		.attr("x2",300)
		.attr("y2",270)

handsright2.transition()
		  .delay(2000)
		  .duration(1000)
		  .style("opacity", 0);

handsleft1.transition()
		  .delay(2000)
		  .duration(1000)
		  .style("opacity", 0);

handsleft2.transition()
		  .delay(2000)
		  .duration(1000)
		  .style("opacity", 0);

//  //second move

head.transition()
		.delay(5000)
		.duration(2000)
		.attr("cx",300)
		.attr("cy",70)

eye.transition()
		.delay(5000)
		.duration(2000)
		.attr("cx",320)
		.attr("cy",70)

back.transition()
		.delay(5000)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",105)

handsright1.transition()
		.delay(5000)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",105)
		.attr("x2",275)
		.attr("y2",150)

handsright2.transition()
		  .delay(6000)
		  .duration(2000)
		  .style("opacity", 1);

handsleft1.transition()
		  .delay(6000)
		  .duration(2000)
		  .style("opacity", 1);

handsleft2.transition()
		  .delay(6000)
		  .duration(2000)
		  .style("opacity", 1);

//move3


head.transition()
		.delay(8000)
		.duration(2000)
		.attr("cx",480)
		.attr("cy",300)

eye.transition()
		.delay(8000)
		.duration(2000)
		.attr("cx",480)
		.attr("cy",320)

back.transition()
		.delay(8000)
		.duration(2000)
		.attr("x1",450)
		.attr("y1",300)
		.attr("x2",300)
		.attr("y2",255)

handsright2.transition()
		.delay(8000)
		.duration(2000)
		.attr("x1",400)
		.attr("y1",330)
		.attr("x2",450)
		.attr("y2",330);

handsright1.transition()
		.delay(8000)
		.duration(2000)
		.attr("x1",450)
		.attr("y1",300)
		.attr("x2",400)
		.attr("y2",330);

legs.transition()
				 .delay(8000)
		  		 .duration(2000)
                 .attr("x1", 300)
                 .attr("y1", 255)
                 .attr("x2", 370)
                 .attr("y2", 330);

 legs2.transition()
					.delay(8000)
		  		    .duration(2000)
                    .attr("x1", 370)
                    .attr("y1", 330)
                    .attr("x2", 300)
                    .attr("y2", 330) ;


handsleft1.transition()
		  .delay(7000)
		  .duration(2000)
		  .style("opacity", 0);

handsleft2.transition()
		  .delay(7000)
		  .duration(2000)
		  .style("opacity", 0); 


//move4

head.transition()
		.delay(12000)
		.duration(2000)
		.attr("cx",300)
		.attr("cy",150)

eye.transition()
		.delay(12000)
		.duration(2000)
		.attr("cx",320)
		.attr("cy",150)

back.transition()
		.delay(12000)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",180)
		.attr("x2",300)
		.attr("y2",280)


handsright1.transition()
		.delay(12000)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",220)
		.attr("x2",350)
		.attr("y2",310);

legs.transition()
				 .delay(12000)
		  		 .duration(2000)
                 .attr("x1", 300)
                 .attr("y1", 280)
                 .attr("x2", 380)
                 .attr("y2", 330);

 legs2.transition()
					.delay(12000)
		  		    .duration(2000)
                    .attr("x1", 380)
                    .attr("y1", 330)
                    .attr("x2", 300)
                    .attr("y2", 330) ;


handsright2.transition()
		  .delay(12000)
		  .duration(2000)
		  .attr("x1",350)
		  .attr("y1",310)
		  .attr("x2",380)
		  .attr("y2",330)


handsleft1.transition()
		  .delay(11500)
		  .duration(2000)
		  .style("opacity", 0);


handsleft2.transition()
		  .delay(11500)
		  .duration(2000)
		  .style("opacity", 0);

//last move

head.transition()
		.delay(14500)
		.duration(2000)
		.attr("cx",280)
		.attr("cy",150)

eye.transition()
		.delay(14500)
		.duration(2000)
		.attr("cx",280)
		.attr("cy",150)

back.transition()
		.delay(14500)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",180)
		.attr("x2",300)
		.attr("y2",280)


handsright1.transition()
		.delay(14500)
		.duration(2000)
		.attr("x1",300)
		.attr("y1",250)
		.attr("x2",350)
		.attr("y2",180);

 });
    });
    
