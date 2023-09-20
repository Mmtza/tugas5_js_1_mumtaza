function tambah(){
	//tangkap request form kalkulator
	frm = document.getElementById("frm_calc");
	bil1 = parseInt(frm.a1.value);
	bil2 = parseInt(frm.a2.value);
	total = bil1 + bil2;
	//alert("Hasil Penjumlahan bilangan " + bil1 +
	//	  " + " + bil2 + " = " + total);
	alert(`Hasil Penjumlahan bilangan ${bil1} + ${bil2} =  ${total}`);
}

function kurang(){
	//tangkap request form kalkulator
	frm = document.getElementById("frm_calc");
	bil1 = parseInt(frm.a1.value);
	bil2 = parseInt(frm.a2.value);
	total = bil1 - bil2;
	alert(`Hasil Pengurangan bilangan ${bil1} - ${bil2} =  ${total}`);
}

function kali(){
	//tangkap request form kalkulator
	frm = document.getElementById("frm_calc");
	bil1 = parseInt(frm.a1.value);
	bil2 = parseInt(frm.a2.value);
	total = bil1 * bil2;
	alert(`Hasil Perkalian bilangan ${bil1} x ${bil2} =  ${total}`);
}

function bagi(){
	//tangkap request form kalkulator
	frm = document.getElementById("frm_calc");
	bil1 = parseInt(frm.a1.value);
	bil2 = parseInt(frm.a2.value);
	total = bil1 / bil2;
	alert(`Hasil Pembagian bilangan ${bil1} / ${bil2} =  ${total}`);
}

function pangkat(){
	//tangkap request form kalkulator
	frm = document.getElementById("frm_calc");
	bil1 = parseInt(frm.a1.value);
	bil2 = parseInt(frm.a2.value);
	total = Math.pow(bil1, bil2);
	alert(`Hasil Pemangkatan bilangan ${bil1} ^ ${bil2} =  ${total}`);
}