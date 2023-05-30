async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Erro ao enviar vídeo");
    }

    const resposta = await conexao.text();

    try {
        const conexaoConvertida = JSON.parse(resposta);
        return conexaoConvertida;
    } catch (error) {
        throw new Error("Erro ao processar resposta");
    }
}

async function buscaVideo(termobusca){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termobusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida;
}   

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}
