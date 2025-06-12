function compararListas() {
    const nomeLista1 = "Lista base";
    const nomeLista2 = document.getElementById("nomeLista2").value.trim() || "Lista comparada";
    const lista1 = document.getElementById("lista1").value.trim().split('\n').map(x => x.trim()).filter(Boolean);
    const lista2 = document.getElementById("lista2").value.trim().split('\n').map(x => x.trim()).filter(Boolean);

    const apenasNaLista1 = lista1.filter(nome => !lista2.includes(nome));
    const apenasNaLista2 = lista2.filter(nome => !lista1.includes(nome));
    const totalDiferencas = apenasNaLista1.length + apenasNaLista2.length;

    let resultadoHtml = "";

    if (totalDiferencas === 0) {
        resultadoHtml += `<h3>As listas são iguais!</h3>`;
    } else {
        resultadoHtml += `<h3>Total de nomes diferentes: ${totalDiferencas}</h3>`;

        if (apenasNaLista1.length > 0) {
            resultadoHtml += `<h4>Presentes apenas na ${nomeLista1} (${apenasNaLista1.length}):</h4>`;
            resultadoHtml += `<pre>${apenasNaLista1.join('\n')}</pre>`;
        }

        if (apenasNaLista2.length > 0) {
            resultadoHtml += `<h4>Presentes apenas na ${nomeLista2} (${apenasNaLista2.length}):</h4>`;
            resultadoHtml += `<pre>${apenasNaLista2.join('\n')}</pre>`;
        }
    }

    document.getElementById("resultado").innerHTML = resultadoHtml;
}
