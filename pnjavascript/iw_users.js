function send(value){
	var error=false;
	f=document.usersListOptions;
	switch(value){
		case 0:
			f.action="index.php?module=iw_users&type=admin&func=edit";
			break;
		case 1:
			f.action="index.php?module=iw_users&type=admin&func=delete";
			break;
		case 2:
			f.action="index.php?module=iw_users&type=admin&func=editLogin";
			break;
	}
	f.submit();
}

function addContact(fuid, gid){
	var pars = "module=iw_users&func=addContact&gid=" + gid + "&fuid=" + fuid + "&action=add";
	$('img_' + fuid).src="images/ajax/circle-ball-dark-antialiased.gif";
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: addContact_response,
		onFailure: addContact_failure
	});
}

function addContact_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	Element.update(json.fuid, json.content).innerHTML;
}

function addContact_failure(){

}

function delContact(fuid, gid){
	var pars = "module=iw_users&func=addContact&gid=" + gid + "&fuid=" + fuid + "&action=delete";
	$('img_' + fuid).src="images/ajax/circle-ball-dark-antialiased.gif";
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: delContact_response,
		onFailure: delContact_failure
	});
}

function delContact_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	if(json.gid != '-1'){
		Element.update(json.fuid, json.content).innerHTML;
	}else{
		$('row_' + json.fuid).toggle();
	}
}

function delContact_failure(){

}

function sendConfig(){
	var f=document.config;
	f.submit();
}

function delUserGroup(uid, gid){
	var pars = "module=iw_users&func=delUserGroup&uid=" + uid + "&gid=" + gid;
	$('iconGroup_' + uid + '_' + gid).src="images/ajax/circle-ball-dark-antialiased.gif";
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: delUserGroup_response,
		onFailure: delUserGroup_failure
	});
}

function delUserGroup_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	$('userGroup_' + json.uid + '_' + json.gid).toggle();
}

function delUserGroup_failure(){

}

function addUserGroup(uid, gid){
	var pars = "module=iw_users&func=addUserGroup&uid=" + uid;
	Element.update('addGroup_' + uid, '<img src="images/ajax/circle-ball-dark-antialiased.gif">');
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: addUserGroup_response,
		onFailure: addUserGroup_failure
	});
}

function addUserGroup_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	Element.update('addGroup_' + json.uid, json.content);
}

function addUserGroup_failure(){

}

function addGroupProceed(uid, gid){
	var pars = "module=iw_users&func=addGroupProceed&uid=" + uid + "&gid=" + gid;
	Element.update('addGroup_' + uid, '<img src="images/ajax/circle-ball-dark-antialiased.gif">');
	var myAjax = new Ajax.Request("ajax.php", 
	{
		method: 'get', 
		parameters: pars, 
		onComplete: addGroupProceed_response,
		onFailure: addGroupProceed_failure
	});
}

function addGroupProceed_response(req){
	if (req.status != 200 ) { 
		pnshowajaxerror(req.responseText);
		return;
	}
	var json = pndejsonize(req.responseText);
	Element.update('userGroupsList_' + json.uid, json.content);
	Element.update('addGroup_' + json.uid, json.content1);
	//addGroupModifyRow(json.uid);
}

function addGroupProceed_failure(){

}