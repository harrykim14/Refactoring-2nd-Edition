function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`)
    result.push(renderPhoto(person.photo))
    // 2. 기존 함수 부분을 zznew함수를 쓰도록 변경
    // result.push(`<p>제목: ${person.photo.title}</p>`)
    // result.push(emitPhotoData(person.photo))
    result.push(emitPhotoData(person.photo));
    return result.join('\n');
}

function photoDiv(p) {
    return [
        "<div>",
        emitPhotoData(p),
        // 1. zznew라는 함수로 추출
        "</div>",
    ].join('\n');
}

// 3. 이 함수는 인라인한다
/*
function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>위치: ${aPhoto.location}</p>`)
    result.push(`<p>날짜: ${aPhoto.data.toDateString()}</p>`);
    return result.join('\n')
}
*/

function emitPhotoData(p) {
    return [
        `<p>제목: ${p.title}</p>`,
        `<p>위치: ${p.location}.location}</p>`,
        `<p>날짜: ${p.data.toDateString()}</p>`,
        // emitPhotoData(p),
    ].join('\n');
}
