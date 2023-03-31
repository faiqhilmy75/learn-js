const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan Saya Bot, Siapa Nama Kamu?",
        `Halo ${data?.nama}, Berapa Usia Kamu?`,
        `Ohh ${data?.usia}, Hobi Kamu Ngapain?`,
        `Aku Juga Hobi ${data?.hobi}, Btw Sekolah Dimana?`,
        `Oalah Sekolah Di ${data?.sekolah}, Yaudah Kalo Gitu Udahan Yak`,
    ]
}

pertanyaan.innerHTML = botSay() [0] 

let usersData = []

function botStart() {
    if(jawaban.value.length < 1)  return alert("Silahkan Isi Jawaban Dahulu")
    init ++
    if (init === 1) {
     botDelay({ nama: jawaban.value })
    } else if (init === 2) {
     botDelay({ usia: jawaban.value })
    } else if (init === 3) {
     botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
     botDelay({ sekolah: jawaban.value })
    } else if (init === 5) {
        finishing()
    }
    else {
    botEnd()    
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [800])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank You Udah Main-Main Kesini ${usersData[0]} ✌`
    jawaban.value = "Sama-Sama"
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [500])
}

function botEnd() {
    alert(`Terima Kasih ${usersData[0]} Sudah Bermain Disini 😆`)
    window.location.reload()
}
