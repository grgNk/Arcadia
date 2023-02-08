let titleLbl = document.getElementById("form_title");
let json_data = document.getElementById("json_data");
let content = document.getElementById("form_content");
let background = document.getElementsByClassName("form_background")[0];
let container = document.getElementsByClassName("form_container")[0];
let form = container.getElementsByTagName("form")[0];

function callForm(title, width, innerHTML)
{
    titleLbl.innerText = title;
    background.classList.add("active");
    container.classList.add("active");
    content.innerHTML = innerHTML;
    form.style.width = width + "px";
}

function closeForm()
{
    background.classList.remove("active");
    container.classList.remove("active");
    titleLbl.innerText = "";
    content.innerHTML = "";
    form.onsubmit = null;
}

function set_json(data)
{
	json_data.value = JSON.stringify(data);
}

json_data.style.cssText = "display:none;";

let buttons = document.getElementsByClassName("service_button");
for(i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function(e)
    {
        e.preventDefault();
        callForm("Оформление заказа", 600, `<div class="frame">
        <table border="0" width="100%" cellpadding="5" id="order_data">
        <tr>
         <td><select required style="margin: 0px auto 0px auto; padding: 5px 5px; width: 200px;">
            <option value="" disabled selected>(Выберите элемент)</option>
            <option value="Аллиум">Аллиум</option>
            <option value="Вереск">Вереск</option>
            <option value="Роза (К)">Роза (К)</option>
            <option value="Роза (Б)">Роза (Б)</option>
            <option value="Гиацинт">Гиацинт</option>
            <option value="Гортензия">Гортензия</option>
            <option value="Ландыш">Ландыш</option>
            </select></td>
         <td><div class="elem_add" onclick="order_add_element();">+</div></td>
        </tr>
      </table>
</div>
<input type="email" required placeholder="Контактный e-mail" title="(Контактный адрес электронной почты)">
<input type="submit" class="submit_button">
`);
        order_init();
    });
}

document.getElementById("membership_caller").addEventListener("click", function(e)
{
    e.preventDefault();
    callForm("Заявление о вступлении", 450, `<input type="text" name="name" autofocus required placeholder="Имя" title="(Имя) От 2 до 16 латинских
или кириллических символов с большой буквы" pattern="[A-ZА-Я]{1}[a-zа-я]{1,16}">
<input type="text" required placeholder="Ваш возраст" title="(Возраст) Числа от 1 до 99" pattern="[1-9]{1,2}">
<select required title="(Социальное положение) Выберите элемент в списке">
<option value="" disabled selected>Социаильное положение</option>
<option value="Школьник">Школьник</option>
<option value="Студент">Студент</option>
<option value="Работающий">Работающий</option>
<option value="Безработный">Безработный</option>
</select>
<input type="email" required placeholder="Контактный e-mail" title="(Контактный адрес электронной почты)">
<textarea required maxlength="1000" rows="5" cols="40" placeholder="Расскажите о себе. О своих увлечениях, как пришли к флористике, почему
решили присоедениться к нашему коллективу." title="(Расскажите о себе) До 1000 символов"></textarea>
<textarea maxlength="1000" rows="5" cols="40" placeholder="Есть ли у вас предложения по улучшению нашего сайта? (Необязательный пункт)" 
title="(Отзывы и предложения) До 1000 символов, необязательный пункт"></textarea>
<input type="submit" class="submit_button">
    `);
    form.onsubmit = get_membership_data;
});

document.getElementById("license_caller").addEventListener("click", function(e)
{
    e.preventDefault();
	let agreement = document.getElementById("agreement").dataset.txt;
    callForm("Политика в отношении обработки персональных данных", 900, '<p align="justify" style="font-size: 1.1em;"> ' + agreement + "</p>");
});