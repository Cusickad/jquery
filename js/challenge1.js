$("#subscribe").click(function() {
  console.log('here');
  if (this.checked) {
    $("#emailField").css('display', 'block');
	}
	else{
		$("#emailField").css('display', 'none')
	}
  })
