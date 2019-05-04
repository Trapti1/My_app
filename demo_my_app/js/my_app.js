/**
 * This script file contains all the functionality of the screen event
 * The user interface design and user interface development script related js scripts
 */
  window.onload = function() {
 var itemArr=[];
// Create a new WebSocket.
 var socket = new WebSocket('ws://stocks.mnet.website');
 // Handle messages sent by the server.
 socket.onmessage = function(event) {
       var message = JSON.parse(event.data);
var dateTime=new Date().toLocaleString();
for(index in itemArr) {
  itemArr[index][1]='white';
  
}
message.forEach(function(element) {
 	if(itemArr.hasOwnProperty(element[0])){
           if(itemArr[element[0]][0]>element[1]){
		itemArr[element[0]][2]=dateTime;
		itemArr[element[0]][1]='red';
}else if(itemArr[element[0]][0]<element[1]){
                itemArr[element[0]][2]=dateTime;
		itemArr[element[0]][1]='green';

}
itemArr[element[0]][0]=element[1];



}else{

itemArr[element[0]]=[element[1],'white',dateTime];
}


});
var table = $('#example').DataTable();
table.clear().rows.add(table.data).draw();
for(index in itemArr) {
  var table = $('#example').DataTable();
 var rowNode = table.row.add( [
    index,itemArr[index][0],itemArr[index][2]
] ).draw(false).node();

$(rowNode).css('background-color',itemArr[index][1]);
  
}
     
      };
     };
  
     