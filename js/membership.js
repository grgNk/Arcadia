function get_membership_data()
{
	let data = {
		type: 0,
		msg_major: "ЗАЯВКА ПРИНЯТА",
		msg_minor: "Добро пожаловать!",
    	name: "Аноним",
    	age: "Неизвестен",
    	status: "Неизвестно",
    	email: "Неизвестен",
    	about: "Неизвестно",
    	feedback: "Неизвестно"
	};
	
    let inputs = content.childNodes;
    data.name = inputs[0].value;
    data.age = inputs[2].value;
    data.status = inputs[4].options[inputs[4].selectedIndex].text;
    data.email = inputs[6].value;
    data.about = inputs[8].value;
    data.feedback = !inputs[10].value ? "[Отсутствует]" : inputs[10].value;
	
	set_json(data);
    closeForm();
}