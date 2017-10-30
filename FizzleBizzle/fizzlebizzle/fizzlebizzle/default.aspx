<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="FizzleBizzle._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <script src="js/jquery-3.1.0.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <link href="css/bootstrap-switch.min.css" rel="stylesheet" />
  <link href="css/bootstrap-slider.min.css" rel="stylesheet" />
  <script src="js/bootstrap-switch.min.js"></script>
  <script src="js/bootstrap-slider.min.js"></script>
  <link href="css/style.css" rel="stylesheet" />
</head>
<body>
        <div class="container full">
            <div class="row full">
                <div class="col-xs-0 col-md-2">
				</div>
                <div class="col-xs-12 col-md-8 content">
					<div class='divarea'>
					<h1>Fizzle Bizzle Test<small class='subtitle'>For Engagency</small></h1>
					<p><strong>FizzBuzz</strong> generates an array of strings representing the consecutive sequence of integers from start to end.  When the integer is a multple of Fizz, the string "Fizz" is added instead.  Likewise, for multiples of Buzz, "Buzz" is added.  For multiples of both Fizz and Buzz, "FizzBuzz" is added.</p>
					<div class='stylebox'>
						<div class='textarea'>
						<h3>For Example:</h3>
						<p>With Fizz = 3, Buzz = 5, start = 1 and end = 15; the array looks like:</p><p> ["1", "2", Fizz", "4", "Buzz", "fizz", "7", "8",..., "14", "FizzBuzz"]
						</p>
						</div>
					</div>
					<p><strong>FizzBuzz</strong> generates an array of strings representing the consecutive sequence of integers from start to end.  When the integer is a multple of Fizz, the string "Fizz" is added instead.  Likewise, for multiples of Buzz, "Buzz" is added.  For multiples of both Fizz and Buzz, "FizzBuzz" is added.</p>
					<div class='container-fluid'>
                    <form method="POST" action="default.aspx">
					    <div class='row form-margin'>
					
						
						    <div class='col-xs-12 col-md-6'>
						        <input name="fizztext" id="fizztext" placeholder='Fizz' type="text" class="form-control" id="usr"<% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["fizztext"] != null )
                                            Response.Write("value='" + Request["fizztext"].ToString() + "' ");
                                    }

                        %>>
						    </div>
						
						    <div class='col-xs-12 col-md-6'>
						        <input name="buzztext" id="buzztext"  placeholder='Buzz' type="text" class="form-control  input-xs" id="usr"
                                    <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["buzztext"] != null )
                                            Response.Write("value='" + Request["buzztext"].ToString() + "' ");
                                    }

                        %>>
						    </div>
					    </div>
					
					    <div class='row form-margin'>
						    <div class='col-xs-12 col-md-6 row-margin'>
						        <input name="predicateToggle" id="predicateToggle" data-size='mini' type="checkbox"
                        <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["predicateToggle"] == "on")
                                            Response.Write("checked");
                                    }

                        %>

                                    > <span class='checkbox-margin'>Enable Bazz?</span>
						    </div>
						
						    <div class='col-xs-12 col-md-6 row-margin'>
						        <p class="alignleft">1</p>
                                <p class="alignright">1000</p>
                                <p class="center">Range</p> <div><input name="slider" style="width:100%;" id="slider" type="text" value="" data-slider-min="1" data-slider-max="1000" data-slider-step="10" data-slider-value="[<% 
                                                                     if (Request.Form.HasKeys())
                                                                     {
                                                                         Response.Write(Request["slider"]);
                                                                     }
                                                                     else
                                                                     {
                                                                         Response.Write("150,400");
                                                                     }

                        %>]"/> </div>
         
						    </div>
					    </div>
					
					    <div class='row form-margin'>
						    <div class='col-xs-12 col-md-6 row-margin'>
                                <select name="comboOption" id="comboOption" class="form-control  input-xs" id="sel1">
                                    <option <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["comboOption"] == "Predicate" )
                                            Response.Write("selected");
                                    }

                        %>>Predicate</option>
                                    <option  <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["comboOption"] == "Greater Than" )
                                            Response.Write("selected");
                                    }

                        %>>Greater Than</option>
                                    <option <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["comboOption"] == "Less Than" )
                                            Response.Write("selected");
                                    }

                        %>>Less Than</option>
                                </select>
						    </div>
						
						    <div class='col-xs-12 col-md-6 row-margin'>
                                <input name="bazztext" id="bazztext" placeholder='Bazz' type="text" class="form-control input-xs" id="usr" <% 
                                    if (Request.Form.HasKeys())
                                    {
                                        if (Request["bazztext"] != null )
                                            Response.Write("value='" + Request["bazztext"].ToString() + "' ");
                                    }

                        %>>
                            </div>
						
                        </div>

                        <div class='row form-margin'>

					
					        <div class='col-xs-12 col-md-12 row-margin'>
					            <button type="submit" class="btn btn-primary btn-block" data-toggle="modal" data-target=".bs-example-modal-lg">Generate</button>
                            </div>
                        </div>

                        <div class='row form-margin'>					
					        <div class='col-xs-12 col-md-12 row-margin'>
                                <% 
                                    bool didError = false;
                                    if (Request.Form.HasKeys())
                                    {
                                        int n;
                                        if (!Int32.TryParse(Request["fizztext"].ToString(), out n) || n == 0)
                                        {
                                            Response.Write("<p class=\"error\">The Fizz field must be an integer and cannot be 0.</p>");
                                            didError = true;
                                        }

                                        if (!Int32.TryParse(Request["buzztext"].ToString(), out n)  || n == 0)
                                        {
                                            Response.Write("<p class=\"error\">The Buzz field must be an integer and cannot be 0.</p>");
                                            didError = true;
                                        }

                                        if (Request["predicateToggle"] == "on")
                                        {
                                            if (Request["bazztext"] != null)
                                            {
                                                if (!Int32.TryParse(Request["bazztext"].ToString(), out n)  || n == 0)
                                                {
                                                    Response.Write("<p class=\"error\">The Bazz field must be an integer and cannot be 0.</p>");
                                                    didError = true;
                                                }
                                            }
                                            if (Request["comboOption"] != null)
                                            {
                                                if (Request["comboOption"].ToString() == "Predicate")
                                                {
                                                    Response.Write("<p class=\"error\">Please select a predicate from the selection box.</p>");
                                                    didError = true;
                                                }
                                            }
                                        }
                                    }

                        %>
                            </div>
                        </div>

                    </form>
					</div>
					</div>
				</div>
				<div class="col-xs-0 col-md-2"></div>
            </div>
        </div>  

<div id='MyModal' class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-lg">
    <div style="margin-top:30%;" class="modal-content" >
            <div class="panel">
  <div class="panel-heading">Generated Results</div>
  <div class="panel-body" style="max-height: 400px;overflow-y: scroll;">
      <div id="panel_text">
            <%
                FizzleBizzle.FizzleBizzle fizz = new FizzleBizzle.FizzleBizzle();
                if (!didError && Request.Form.HasKeys())
                {
                    int start = int.Parse(Request["slider"].Split(',')[0]);
                    int end = int.Parse(Request["slider"].Split(',')[1]);

                    fizz.Fizz = int.Parse(Request["fizztext"].ToString());
                    fizz.Buzz = int.Parse(Request["buzztext"].ToString());




                    if (Request["predicateToggle"] == "on")
                    {
                        int bazz = int.Parse(Request["bazztext"].ToString());

                        if(Request["comboOption"].ToString() == "Greater Than")
                        {
                            Response.Write("[\"" + String.Join("\", \"", fizz.FizzBuzzBazz(start, end, x => x > bazz)) + "\"]");
                        }
                        else
                        {
                            Response.Write("[\"" + String.Join("\", \"", fizz.FizzBuzzBazz(start, end, x => x < bazz)) + "\"]");
                        }

                    }
                    else
                    {
                        Response.Write("[\"" + String.Join("\", \"", fizz.FizzBuzz(start, end)) + "\"]");
                    }
                }
                        %>
      </div>

            </div>
            </div>

    </div>
  </div>
</div>
		
<script>
    $("[name='predicateToggle']").bootstrapSwitch();

    $("input[name='predicateToggle']").on('switchChange.bootstrapSwitch', function (event, state) {
        document.getElementById('bazztext').disabled = !state;
        document.getElementById('comboOption').disabled = !state;
    });

    $("#slider").slider({});
    
    <% 
    if (Request.Form.HasKeys() && !didError)
    {
        Response.Write("    $('#MyModal').modal('show');");
    }

    if (Request["predicateToggle"] != "on")
    {
        Response.Write("document.getElementById('bazztext').disabled = true;");
        Response.Write("document.getElementById('comboOption').disabled = true;");
    }


                        %>

</script>
</body>

</html>
