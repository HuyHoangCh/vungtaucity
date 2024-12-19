// JavaScript Document
function submitFeedback() {
	var name = document.getElementById('name'). value;
	var feedback = document.getElementById('feedback').value;
	
	if (name === '') {
		alert('Họ và tên không được bỏ trống');
	} else if(feedback === ''){
		alert('Nội dung góp ý không được bỏ trống');
	} else{
		var email = 'tranhuyhoang159753@gmail.com';
		var subject = 'Feedback from ' + name;
		var body = 'Họ và tên:' + name + '\nNội dung góp ý: ' + feedback;
		window.location.href = 'mailto:' + email + '?subject=' +
			encodeURIComponent(subject) + '&body= ' + encodeURIComponent(body);
	}
}
function resetForm() {
	document.getElementById('feedbackForm').reset();
}