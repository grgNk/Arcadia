let table, addButton, removeButtons, nextRow, nextCell;

function order_init()
{
    table = document.getElementById("order_data");
    addButton = document.getElementsByClassName("elem_add")[0];
    removeButtons = [];
    nextRow = 0;
    nextCell = 1;
    form.onsubmit = order_get_data;
}

function order_add_element()
{
    let cell = addButton.parentElement;

    let rembtn = document.createElement("div");
    rembtn.addEventListener("click", function(e){order_remove_element(rembtn)});
    rembtn.className = "elem_remove";
    rembtn.innerHTML = "&#10006";

    let sel = document.createElement("select");
    sel.required = true;
    sel.style.cssText = "margin: 0px auto 0px auto; padding: 5px 5px; width: 200px; display: inline-block;";
    sel.innerHTML = `
    <option value="" disabled selected>(Выберите элемент)</option>
    <option value="Аллиум">Аллиум</option>
    <option value="Вереск">Вереск</option>
    <option value="Роза (К)">Роза (К)</option>
    <option value="Роза (Б)">Роза (Б)</option>
    <option value="Гиацинт">Гиацинт</option>
    <option value="Гортензия">Гортензия</option>
    <option value="Ландыш">Ландыш</option>
    `;

    cell.appendChild(sel);
    cell.appendChild(rembtn);

    removeButtons.push(rembtn);

    nextCell++;
    if(nextCell > 1)
    {
        nextCell = 0;
        nextRow++;
        table.insertRow(nextRow);
    }
    table.rows[nextRow].insertCell(nextCell);
    table.rows[nextRow].cells[nextCell].appendChild(addButton);
}

function order_remove_element(btn)
{
    let id = removeButtons.indexOf(btn);
    removeButtons.splice(id, 1);
    row = btn.parentElement.parentElement;
    row.removeChild(btn.parentElement);
}

function order_get_data()
{
	let data = {
		type: 1,
		msg_major: "ЗАКАЗ УСПЕШНО ОФОРМЛЕН",
		msg_minor: "Вы заказали:",
    	email: "Неизвестен",
		items: null,
		counts: null
	};

    let orderDetails = new Map();
    for(i = 0; i < table.rows.length; i++)
        for(j = 0; j < table.rows[i].cells.length; j++)
        {
            let elem = table.rows[i].cells[j].firstChild;
            if(elem.tagName != "SELECT")
                continue;
            let selected = elem.options[elem.selectedIndex].text;
            if(orderDetails.has(selected))
                orderDetails.set(selected, orderDetails.get(selected) + 1);
            else
                orderDetails.set(selected, 1);
        }
	
	data.email = content.getElementsByTagName("INPUT")[0].value;
	data.items = Array.from(orderDetails.keys());
	data.counts = Array.from(orderDetails.values());
    
    set_json(data);
    closeForm();
}