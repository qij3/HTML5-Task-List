
begin=true;

/* Global array to retrieve and store the 'localstorage' values locally*/
var value= new array();

/**To Create date for each task**/
function adddate()
{

	var mydate= new Date()
	var time = mydate.toLocaleString();	
	return time;
}


/**Retrieves the stored Tasks from 'localstorage' values **/
function retrieve()
{
var key1=localStorage.key(0);
value=localStorage[key1];
value = value.split(",");		

}

/**Adds the button 'Clear' and 'Completed'
**/
function addbutton(list)
{
 var button1 = document.createElement("input");
 var button2 = document.createElement("input");
 
    //Assign different attributes to the element.
    button1.setAttribute("type","button");
    button2.setAttribute("type","button");
    button1.setAttribute("value","Completed");
    button2.setAttribute("value","Clear");
 
    button1.addEventListener('click',completed,true);
    button2.addEventListener('click',cleartask,true);
    list.appendChild(button1);
    list.appendChild(button2);
}

/**An event listener for clear button. Clears the task and removes the data from local storage**/
function cleartask()

{		
	var node=this.parentNode;
	var textnode= node.firstChild;
	var show=document.getElementById("show-items");
	show.removeChild(node);
	
	/* retrieve() --> commented since value array is global **/
	
	for(var i=0; i<value.length; i++)
	{
		if(value[i]==textnode.data)
		{
			value.splice(i,1);					
			localStorage.setItem("itemId", value);								
			break;		
		}	
			
	}	
	
	
}

/**Removes the data from localstorage and adds the data in 'Completed' Column**/

function completed()
{			
		
	var time= adddate();	
	var node=this.parentNode;
	var text = node.firstChild;		
	var app=text.data+"("+time+")";		
	var complete=document.getElementById("completed");
	var list=document.createElement('li');		
	var textnode=document.createTextNode(app);
	list.appendChild(textnode);	
	complete.appendChild(list); 
	
	var node=this.parentNode;
	var textnode= node.firstChild;
	var show=document.getElementById("show-items");
	show.removeChild(node);
	
	/* retrieve() --> commented since value array is global **/
	
	for(var i=0; i<value.length; i++)
	{
		if(value[i]==textnode.data)
		{
			value.splice(i,1);					
			localStorage.setItem("itemId", value);								
			break;		
		}	
			
	}	
}

/**Creates the element 'li' and adds the task data to it**/
function createtask(nodevalue)
{
	var show=document.getElementById("show-items");
	var list=document.createElement('li');		
	var textnode=document.createTextNode(nodevalue);
	list.appendChild(textnode);
	addbutton(list);	
	show.appendChild(list); 

}
 
/**Retrieves the contents from localStorage and creates the corresponding html elements**/
function start()
{
							
		try{					
				retrieve();		
				for(var i=0; i<value.length; i++)		
			 	 {						
					createtask(value[i]); 								
				 }		
					
		}
		catch(e)
		
		{}		
	
}

/**Pushes the task values to localStorage**/
function Addtask()
{
	
	var time= adddate();	
	var task=document.getElementById("task");	
	var app=task.value+"("+time+")";	
	task.value="";	
	value.push(app);			
	
	try{
	localStorage.setItem("itemId", value); //store the item in the database
	}
	catch(e)
	{}
	
	createtask(app);
		
}


