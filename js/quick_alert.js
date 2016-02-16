
var da = new DashAlert();
da.show('testing');

function DashAlert(){
	var that = this;
	var alertBox = $('#quick-alert');
	this.alertType = 'alert-danger';	// default to danger

	this.show = function(message, type, title, dismiss){
		type  = type  || false;
		title = title || false;
		dismiss = dismiss || false;
		if(type){
			var alert_type = 'alert-'+type;
			$("#quick-alert").removeClass(that.alertType).addClass(alert_type);
			that.alertType = alert_type;	
		}
		if(title){
			$("#quick-alert strong").html(title.ucFirst());
		}
		$("#quick-alert .alert-body").html(message);
		$("#quick-alert").fadeIn();

		if(!dismiss){
			setTimeout(function(){
				$("#quick-alert").fadeOut();
			}, 1733);
		}
	};
}
