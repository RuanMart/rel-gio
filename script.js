setInterval(() => {
	function getDate(data) {
		const day = trocaDia(data.getDay());

		const date = addZero(data.getDate()); // dia do mês

		const month = trocaMes(data.getMonth() + 1);

		const year = addZero(data.getFullYear());

		const hour = addZero(data.getHours());

		const minute = addZero(data.getMinutes());

		const second = addZero(data.getSeconds());

		return `${day}, ${date} de ${month} de ${year} ${hour}:${minute}:${second}`;
	}

	function addZero(num) {
		return num >= 10 ? num : `0${num}`;
	}

	const data = new Date();

	const actualDate = getDate(data);

	document.getElementById("meuh1").innerHTML = getDate(data);
	data.innerHTML = actualDate;
}, 1000);
function trocaDia(day) {
	let diaSemana;

	switch (day) {
		case 0:
			diaSemana = "Domingo";
			return diaSemana;
			break;

		case 1:
			diaSemana = "Segunda-feira";
			return diaSemana;
			break;

		case 2:
			diaSemana = "Terça-feira";
			return diaSemana;
			break;

		case 3:
			diaSemana = "Quarta-feira";
			return diaSemana;
			break;

		case 4:
			diaSemana = "Quinta-feira";
			return diaSemana;
			break;

		case 5:
			diaSemana = "Sexta-feira";
			return diaSemana;
			break;

		case 6:
			diaSemana = "Sábado";
			return diaSemana;
			break;

		default:
			break;
	}
}

function trocaMes(mouth) {
	let mesAno;

	switch (mouth) {
		case 1:
			mesAno = "Janeiro";
			return mesAno;
			break;

		case 2:
			mesAno = "Fevereiro";
			return mesAno;
			break;

		case 3:
			mesAno = "Março";
			return mesAno;
			break;

		case 4:
			mesAno = "Abril";
			return mesAno;
			break;

		case 5:
			mesAno = "Maio";
			return mesAno;
			break;

		case 6:
			mesAno = "Junho";
			return mesAno;
			break;

		case 7:
			mesAno = "Julho";
			return mesAno;
			break;

		case 8:
			mesAno = "Julho";
			return mesAno;
			break;

		case 9:
			mesAno = "Setembro";
			return mesAno;
			break;

		case 10:
			mesAno = "Outubro";
			return mesAno;
			break;

		case 11:
			mesAno = "Novembro";
			return mesAno;
			break;

		case 12:
			mesAno = "Dezembro";
			return mesAno;
			break;

		default:
			break;
	}
}
