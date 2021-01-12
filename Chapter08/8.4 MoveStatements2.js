function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, photo);
    outStream.write(`<p>위치: ${photo.location}.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
    photos
        .filter(p => p.date > recentDateCutoff())
        .forEach(p => {
            outStream.write(`<div>\n`);
            //renderPhoto(outStream, p);
            emitPhotoData(outStream, p);
            outStream.write(`<p>위치: ${photo.location}.location}</p>\n`);
            outStream.write(`</div>\n`);
        })
}

/*
function emitPhotoData(outStream, photo) {
    zztmp(outStream, photo);
    // outStream.write(`<p>제목: ${photo.title}</p>\n`);
    // outStream.write(`<p>날짜: ${photo.data.toDateString()}</p>\n`);
    outStream.write(`<p>위치: ${photo.location}.location}</p>\n`);
}
*/

// 이동하지 않을 코드를 새 함수로 추출
function emitPhotoData(outStream, photo) {
    outStream.write(`<p>제목: ${photo.title}</p>\n`);
    outStream.write(`<p>날짜: ${photo.data.toDateString()}</p>\n`);
}