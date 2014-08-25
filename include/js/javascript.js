/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var counter = 4;

var indexNames = [];
var indeces = [];

function addInput(divName){
    
    var currIndex = 0;
    //alert(divName+","+indexNames.indexOf(divName)+"," + indeces.indexOf(divName));
    if (indexNames.indexOf(divName) == -1) {
        indexNames[indexNames.length] = divName;
        indeces[indeces.length] = counter;
        
        currIndex = counter;
    } else {
        currIndex = indeces[indexNames.indexOf(divName)]+1;
        indeces[indexNames.indexOf(divName)] = currIndex;
        
    }
    //alert("currIndex = "+currIndex);
    //alert("indexNames:"+indexNames.toString());
    //alert("indeces:"+indeces.toString());
    
            var goal               = "formdata["+divName+"]" +"[goal]["+currIndex+"]"; 
            var steps              = "formdata["+divName+"]" +"[steps]["+currIndex+"]"; 
            var outcomes           = "formdata["+divName+"]" +"[outcome]["+currIndex+"]";         
            var timelineSteps      = "formdata["+divName+"]" +"[timelineSteps]["+currIndex+"]"; 
            var timelineOutcomes   = "formdata["+divName+"]" +"[timelineOutcomes]["+currIndex+"]"; 
            var extra              = "formdata["+divName+"]" +"[extra]["+currIndex+"]"; 

          var newdiv = document.createElement('div');
          text = "<table class='table table-bordered'><input type='hidden' name='"+extra+"' value=1><tr><td>"+divName+" Goal #"+currIndex+"</td> <td><input type='text' class='goal'  maxlength='100' name='"+goal+"'></input></td><td>Anticipated Completion Date</td></tr>"+
            "<tr><td> Steps/Training </td> <td><textarea rows='3' maxlength='310' class='steps' name='"+steps+"'></textarea></td><td><input type='text' maxlength=29 style='width:200px' name='"+timelineSteps+"'></input></td></tr>"+
            "<tr><td> Outcomes </td> <td><textarea rows='3' maxlength='310' class='outcomes' name='"+outcomes+"'></textarea></td><td><input type='text' maxlength=29 style='width:200px' name='"+timelineOutcomes+"'></input></td></tr>"+
            "<tr><td colspan=3 style='background-color:lightgray'></td> </tr></table>";

          newdiv.innerHTML = text;
          document.getElementById(divName).appendChild(newdiv);
          //counter++;
                  
};