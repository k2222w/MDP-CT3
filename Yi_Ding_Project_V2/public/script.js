let order = 4; // N-grams length
let ngrams = {}; // save N-grams
const songs = []; // save all lyrics


const fetchBtn = document.getElementById('fetch');
const generateBtn = document.getElementById('generate');
const output = document.getElementById('output');
const saveBtn = document.getElementById('saveLyrics');
const clearBtn = document.getElementById('clearLyrics');
const finalLyrics = document.getElementById('finalLyrics');

// fetch and process lyrics
function fetchAndProcessLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const titles = document.getElementById('titles').value.split(',').map(title => title.trim());

    if (!artist || titles.length === 0) {
        output.innerHTML += '<br>Please enter an artist and at least one song title.';
        return;
    }

    // delete previous result
    songs.length = 0;
    ngrams = {};

    const fetchPromises = titles.map(title =>
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to fetch lyrics for ${title}`);
                return response.json();
            })
            .then(data => {
                if (data.lyrics) songs.push(data.lyrics.toLowerCase());
            })
            .catch(error => {
                output.innerHTML += `<br>Error fetching lyrics for "${title}": ${error.message}`;
            })
    );

    Promise.all(fetchPromises).then(() => {
        if (songs.length === 0) {
            output.innerHTML += '<br>No lyrics were successfully fetched.';
            return;
        }
        buildNgrams();
        output.innerHTML += '<br>Lyrics fetched and processed successfully.';
    });
}

// build N-grams data structure
function buildNgrams() {
    songs.forEach(lyrics => {
        const lines = lyrics.split('\n');
        lines.forEach(line => {
            const sanitizedLine = line.replace(/[^a-z\s]/g, ''); 
            for (let i = 0; i < sanitizedLine.length - order; i++) {
                const gram = sanitizedLine.substring(i, i + order);
                if (!ngrams[gram]) ngrams[gram] = [];
                ngrams[gram].push(sanitizedLine.charAt(i + order));
            }
        });
    });

    console.log('N-grams:', ngrams); 
}

// generate lyrics
function generateLyricsUsingNgrams() {
    const keyword = document.getElementById('keyword').value.toLowerCase().trim();

    if (!keyword || keyword.length < order) {
        output.innerHTML += '<br><br>Please enter a keyword with at least ' + order + ' characters.';
        return;
    }

    let currentGram = keyword.substring(0, order);
    let result = currentGram;

    for (let i = 0; i < 300; i++) { // generate 300 characters
        const possibilities = ngrams[currentGram];
        if (!possibilities || possibilities.length === 0) break;
        const next = possibilities[Math.floor(Math.random() * possibilities.length)];
        result += next;
        currentGram = result.substring(result.length - order, result.length);
    }

    if (result.length <= keyword.length) {
        output.innerHTML += '<br><br>Unable to generate meaningful lyrics.';
    } else {
        output.innerHTML += `<br><br><strong>Generated Lyrics:</strong><br>${result}`;
    }
}

saveBtn.addEventListener('click', () => {
  // get last generated lyrics
  const lastGeneratedLyrics = output.innerHTML
      .split('<br><br>')
      .reverse()
      .find(line => line.includes('Generated Lyrics:'))
      ?.replace(/<[^>]+>/g, '')
      .replace('Generated Lyrics:', '')
      .trim();

  if (lastGeneratedLyrics) {
      // save to lyrics board
      finalLyrics.value += `${lastGeneratedLyrics}\n\n`;
  } else {
      alert('No valid generated lyrics to save!');
  }
});

// clear lyrics board
clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all lyrics?')) {
      finalLyrics.value = '';
  }
});


fetchBtn.addEventListener('click', fetchAndProcessLyrics);
generateBtn.addEventListener('click', generateLyricsUsingNgrams);




const baseUrl = "http://localhost:3000"; // 替换为您的 Suno API 部署地址


// 生成音乐的功能
async function generateMusic() {
  const lyrics = document.getElementById("finalLyrics").value;

  if (lyrics.trim() === "") {
    alert("Lyrics is empty, please generate lyrics first");
    return;
  }

  try {
    // 调用 Suno API 的 /api/custom_generate 端点
    const response = await fetch(`${baseUrl}/api/custom_generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: lyrics,
        make_instrumental: false, // 是否只生成纯音乐
        wait_audio: true          // 等待音频生成完成
      }),
    });

    const data = await response.json();

    if (data[0]?.audio_url) {
      // 显示生成的音乐
      document.getElementById("musicOutput").innerHTML = `
        <p>音乐生成成功！点击播放：</p>
        <audio controls>
          <source src="${data[0].audio_url}" type="audio/mpeg">
          您的浏览器不支持音频播放。
        </audio>
      `;
    } else {
      alert("音乐生成失败，请稍后重试！");
      console.error(data);
    }
  } catch (error) {
    console.error("生成音乐时出错：", error);
    alert("生成音乐时发生错误，请稍后再试！");
  }
}

// 绑定生成音乐按钮的事件
document.getElementById("generateMusicBtn").addEventListener("click", generateMusic);