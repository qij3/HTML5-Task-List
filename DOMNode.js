
begin=true;

/* Global array to retrieve and store the 'localstorage' values locally*/
var value= new array();

/** Retrieves the localStorage Values **/


function retrieve()
{
var key=localStorage.key(0);
value=localStorage[key];
value = value.split(",");		
}

function createtask(nodevalue)
{
	var show=document.getElementById("show-items");
	var list=document.createElement('li');
	var evt = document.createEvent("MouseEvent");
	evt.initMouseEvent("onclick",true,true);
	list.addEventListener("click",clicks,false);	
	var textnode=document.createTextNode(nodevalue);
	list.appendChild(textnode);
	show.appendChild(list); 

}
 
function clicks()

{		
	var textnode= this.firstChild;
	var show=document.getElementById("show-items");
	show.removeChild(this);
	
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



function Addtask()
{
	
	var mydate= new Date()
	var time = mydate.toLocaleString();	
	var theyear=mydate.getFullYear()
	var themonth=mydate.getMonth()+1
	var thetoday=mydate.getDate()
	var today=time+"/"+themonth+"/"+thetoday+"/"+theyear;
	
	var task=document.getElementById("task");	
	var app=task.value+"("+time+")";	
	value.push(app);			
	
	try{
	localStorage.setItem("itemId", value); //store the item in the database
	}
	catch(e)
	{}

	createtask(app);
		
}


