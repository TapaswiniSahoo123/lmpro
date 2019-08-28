// (function($){
//     console.log(drupalSettings.<lmp>.<java_script>.variable); // value
// })(jQuery);
//  

//console.log("test");

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<!-- Get multiple data -->
<input type="text" id="field_start_date" class="calc value1" value="">
<input type="text" id="field_end_date" class="calc value2" value="">
<select name="select"></select>
<input type="text" disabled="disabled" id="result">
  <script type="text/javascript">
  $(document).ready(function(){
    $(".calc").keyup(function(){
          var val1 = new Date($(".value1").val());
          var val2 = new Date($(".value2").val());
          var diff = new Date(val2 - val1);
          var days = diff/1000/60/60/24;
          var total = days;
          //if (val2) {
          $("#result").val(total);
       // }
   });
   // $('.calc').keyup(function(){
   //  var field_start_date = $('#field_start_date').val();
   //  var field_end_date   = $('.field_end_date').val();
   //  console.log(field_start_date);
   // });
});
</script>


