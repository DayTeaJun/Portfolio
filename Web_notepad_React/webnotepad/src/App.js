import "./index.css";

function App() {
  return (
    <>
      <header>
        <h1>메모 끄적 (_ _)</h1>
      </header>

      <div class="l-wrap">
        <section>
          <form>
            <label for="title-txt" class="a11y-hidden">
              제목
            </label>
            <input
              type="text"
              id="title-txt"
              class="inp-title"
              placeholder="제목"
            />

            <textarea
              rows="6"
              id="content-textarea"
              placeholder="내용을 입력하세요."
            ></textarea>

            <div class="filebox">
              <input
                class="upload-name"
                value="이미지 업로드"
                placeholder="이미지 업로드"
              />
              <label for="file">파일찾기</label>
              <input type="file" id="file" class="inp-file" />
            </div>

            <select name="cats" id="img-select">
              <option value="cat1">고양이1</option>
              <option value="cat2">고양이2</option>
              <option value="cat3">고양이3</option>
              <option value="cat4">고양이4</option>
              <option value="cat5">고양이5</option>
            </select>

            <button class="inp-btn" type="submit">
              메모 등록
            </button>
            <button onclick="deleteAll()" class="inp-btn reset" type="button">
              초기화
            </button>
          </form>

          <div class="dec">
            <p>다음과 같이 저장됩니다.</p>
            <article class="card-item">
              <a href="javascript:void(0);" class="card-border">
                <div class="cover-img">
                  <img
                    class="card-img"
                    src="./img/cat1.jpg"
                    alt="고양이사진입니다"
                  />
                </div>
                <div class="card-text">
                  <h2 class="title">샘플</h2>
                  <p class="content">내용</p>
                  <div class="card-footer">
                    <p class="sequence">1번 카드</p>
                    <p class="underline">2023-04-15</p>
                  </div>
                </div>
              </a>
              <button class="close" type="button">
                ✖️
              </button>
            </article>
          </div>
        </section>

        <article class="article-container"></article>
      </div>
    </>
  );
}
export default App;
