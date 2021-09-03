const wait = () => {
	return `\`\`\`[ ! ] Proses kak...\`\`\``
	}
exports.success = () => {
	return `\`\`\`[ ✓ ]\`\`\` Selesai...`
	}
exports.successBc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses Broadcast`
	}
exports.wrongFormat = () => {
	return `\`\`\`[ x ]\`\`\` Format salah, coba liat lagi di menu`
	}
exports.erorStik = () => {
	return `\`\`\`[ x ]\`\`\` Itu bukan stiker`
	}
exports.tagStik = () => {
	return `\`\`\`[ x ]\`\`\` Reply/tag stiker nya`
	}
exports.erorLink = () => {
	return `\`\`\`[ x ]\`\`\` Linknya error`
	}
exports.onlygc = () => {
	return `\`\`\`[ x ]\`\`\` Only Group`
	}
exports.onlyOwner = () => {
	return `\`\`\`[ x ]\`\`\` Kamu bukan owner`
	}
exports.onlygcAdmin = () => {
	return `\`\`\`[ x ]\`\`\` Only Group Admin`
	}
exports.cariCecan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cecan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.cariCogan = () => {
	return `\`\`\`[ ! ]\`\`\` Mencari cogan`
	}
exports.pesanBot = () => {
	return `\`\`\`[ x ]\`\`\` Reply pesan botnya`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Reply fotonya`
	}
exports.replyFoto = () => {
	return `\`\`\`[ x ]\`\`\` Tag @user`
	}
exports.noReply = () => {
	return `\`\`\`[ x ]\`\`\` Pesan yang kamu reply tidak mengandung reply`
	}
exports.changeNmGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses  Mengubah Nama Grup`
	}
exports.changeDeskGc = () => {
	return `\`\`\`[ ✓ ]\`\`\` Sukses  Mengubah Desk Grup`
	}
exports.replyFoto = (prefix, command) => {
	return `\`\`\`[ x ]\`\`\` Penggunaan ${prefix + command} teks|jumlah`
	}
exports.botNotAdm = () => {
	return `\`\`\`[ x ]\`\`\` Jadikan bot sebagai admin u/ melakukan perintah ini`
	}
exports.tryAgain = () => {
	return `\`\`\`[ x ]\`\`\` Yah gagal, coba ulangi ^_^`
	}
exports.anlinOn = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Aktifkan`
	}
exports.anlinOff = () => {
	return `\`\`\`[ ✓ ]\`\`\` Antilink Di Nonaktifkan`
	}

module.exports.wait = wait