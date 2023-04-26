const inpTitle = document.querySelector('.inp-title');
const contentText = document.querySelector('#content-textarea');
const inpBtn = document.querySelector('.inp-btn');
const today = new Date();
const fileInput = document.querySelector(".inp-file");

const uploadNameInput = document.querySelector('.upload-name');

let allPost = JSON.parse(localStorage.getItem("allPost"));
allPost = allPost ?? [];
render();

inpBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (!inpTitle.value)
        alert('제목을 입력해 주세요!');
    else if (!contentText.value)
        alert('내용을 입력해 주세요!');
    else {
        const title = inpTitle.value;
        const content = contentText.value;
        const date = today.toISOString().slice(0, 10)

        allPost.push({ title, content, date, len: allPost.length });
        localStorage.setItem("allPost", JSON.stringify(allPost));
        inpTitle.value = "";
        contentText.value = "";
        uploadNameInput.value = "";
        render();

    }
})

function render() {

    const articleContainer = document.querySelector('.article-container');
    articleContainer.innerHTML = "";
    let count = 0;

    for (const item of allPost) {
        count += 1

        const cardItem = document.createElement('article');
        cardItem.setAttribute('class', 'card-item');
        articleContainer.appendChild(cardItem);

        const cardBorder = document.createElement('a');
        cardBorder.setAttribute('title', `${count}번 카드입니다.`);
        cardBorder.setAttribute('onclick', 'postLink()');
        cardItem.appendChild(cardBorder);

        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'img');
        cardImg.setAttribute('src', './img/cat1.jpg');
        cardImg.setAttribute('alt', '고양이사진입니다');
        cardBorder.appendChild(cardImg);

        const cardText = document.createElement('div');
        cardText.setAttribute('class', 'card-text');
        cardBorder.appendChild(cardText);

        const title = document.createElement('h2');
        title.setAttribute('class', 'title');
        cardText.appendChild(title);
        title.textContent = item.title;

        const content = document.createElement('p');
        content.setAttribute('class', 'content');
        cardText.appendChild(content);
        content.textContent = item.content;

        const cardFooter = document.createElement('div');
        cardFooter.setAttribute('class', 'card-footer')
        cardText.appendChild(cardFooter);

        const sequence = document.createElement('p');
        sequence.setAttribute('class', 'sequence');
        cardFooter.appendChild(sequence);
        sequence.textContent = `${count}번 카드`

        const underline = document.createElement('p');
        underline.setAttribute('class', 'underline');
        cardFooter.appendChild(underline);
        underline.textContent = item.date;

        const deletePostBtn = document.createElement('button');
        deletePostBtn.setAttribute('class', 'close');
        deletePostBtn.setAttribute('title', '닫기버튼입니다.');
        deletePostBtn.setAttribute('id', item.len);
        deletePostBtn.setAttribute('onclick', 'remove()');
        cardItem.appendChild(deletePostBtn);
        deletePostBtn.textContent = '✖️'
    }

}

function remove() {
    const idx = allPost.find(item => item.len == event.target.id);

    if (idx) {
        allPost.splice(
            allPost.findIndex((item) => item.len == idx.len), 1
        )
    }

    localStorage.setItem("allPost", JSON.stringify(allPost));
    render();
}

function deleteAll() {
    allPost.splice(0);
    localStorage.setItem("allPost", JSON.stringify(allPost));
    render();
}

function postLink() {
    alert('게시물 구현이 아직 준비되지 않았습니다!');
}

fileInput.addEventListener('change', function () {
    const fileName = fileInput.value.split('\\').pop();
    uploadNameInput.value = fileName;
    alert('로컬스토리지에 일정 이상의 이미지파일을 넣으면\n크기가 너무 커서에러가 발생합니다.\n\n구현예정입니다.');
});