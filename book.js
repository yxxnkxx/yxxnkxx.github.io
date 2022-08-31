// 로컬 스토리지에 책 추가하기
const regisBtn = document.querySelector("#regist")
const regisTitle = document.querySelector("#regist-title")
const regisWriter = document.querySelector("#regist-writer")
const tableTag = document.querySelector("table")


const createBookItem = ((title, writer) => {
    const trTag = document.createElement("tr");
    const titleTag = document.createElement("td");
    const writerTag = document.createElement("td");
    titleTag.innerText = title;
    writerTag.innerText = writer;
    trTag.appendChild(titleTag)
    trTag.appendChild(writerTag)
    tableTag.appendChild(trTag)


})


const register = () => {
    const title = regisTitle.value 
    const writer = regisWriter.value 

    createBookItem(title, writer);


}

regisBtn.addEventListener("click", register)


// 책 리스트 보여주기


// 리스트 삭제하기



// 후기 보기