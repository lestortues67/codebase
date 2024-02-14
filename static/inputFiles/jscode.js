// JAVASCRIPT
<script type="text/javascript">

var fbtn1 = function() {
	document.getElementById("p199").innerHTML=macommande[0].nom+" "+macommande[0].prixt; 
	};

document.btn2.on('click',function() {
document.getElementById("p199").innerHTML=macommande[1].nom+" "+macommande[1].prixt;
});

var input1 = [{ "key": "foo", "val": 3 }, { "key": "bar", "val": 10 }, { "key": "doriath", "val": 100 }, { "key": "baz", "val": 99 }];

var macommande = [{'nom':"pizza reine",'prixt':"9€95",'prix':9.95,'slien':'s100','linenum':'0'},
{'nom':"pizza king",'prixt':"9€95",'prix':9.95,'slien':'s200','linenum':'1'},
{'nom':"pizza mexicaine",'prixt':"10€95",'prix':10.95,'slien':'s300','linenum':'2'},
{'nom':"pizza saumon",'prixt':"12€95",'prix':12.95,'slien':'s400','linenum':'3'}];

// var tt = [8,4,5]
document.getElementById("p199").innerHTML=macommande[2].nom+" "+macommande[2].prixt;

	// alert('Dicttest');
var ALEast 			= ["Yankees", "Red Sox", "Orioles", "Rays", "Blue Jays"];

ALEast.sort();
document.write('<table>');
	document.write('<tr><th>Teams</th></tr>');
		for(var i = 0; i < ALEast.length; i++)
		{
			document.write('<tr><td>' + ALEast[i] + '</td></tr>');
		}
	document.write('</table>');

// var tt = [8,4,5]
// tt.sort();
// document.write('<table>');
// 	document.write('<tr><th>Teams N°2</th></tr>');
// 		for(var x = 0; x < tt.length; x++)
// 		{
// 			document.write('<tr><td>' + macommande[x].nom +" "+macommande[x].prenom '</td></tr>');
// 		}
// 	document.write('</table>');


</script>
<!-- END JAVASCRIPT -->

{% endblock content %}




<!-- 
    {% for member in members %}

      <div id="memberSection{{ member.id }}" class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Member Number: <span id="memberNumber{{ member.id }}">{{ member.random }}</span> </h3>
        </div>

        <div class="panel-body">
          <div class="form-inline">
            <div class="form-group">
              <label for="nameInput{{ member.id }}">Name</label>
              <input type="text" class="form-control" id="nameInput{{ member.id }}" value="{{ member.name }}">
            </div>

            <div class="form-group">
              <label for="emailInput{{ member.id }}">Email</label>
              <input type="email" class="form-control" id="emailInput{{ member.id }}" value="{{ member.email }}">
            </div>

            <button class="btn btn-primary updateButton" member_id="{{ member.id }}">Update</button>
          </div>
        </div>
      </div>

      {% endfor %} -->

