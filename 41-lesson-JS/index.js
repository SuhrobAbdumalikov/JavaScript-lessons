const surahSelect = document.querySelector('#surah_select');
const ayah_selected = document.querySelector('#ayah_selected');
const name_select = document.querySelector('#name_select');
const audio = document.querySelector('audio');
const text = document.querySelector('.text');

const Api_URl = 'https://api.alquran.cloud/v1';

(async () => {
   const response = await fetch(`${Api_URl}/edition/format/audio`)
   const {data} = await response.json();
   data?.forEach((name) => {
    const option = document.createElement('option');
    option.value = name.identifier
    option.textContent = name.englishName
    name_select.appendChild(option);
   }); 
})()


name_select.addEventListener('change',(e) => {
    surahSelect.innerHTML = `<option selected disabled>Surani Tanlang</option>`;
    (async () => {
       const  response = await fetch(`${Api_URl}/quran/${e.target.value}`) 
       const {
        data: {surahs},
       } = await response.json();

       let SelectedSurahIdx = 0;
       surahs?.forEach((sura) =>{
        const {number,englishName} = sura
        const option = document.createElement('option');
        option.value = number-1;
        option.textContent = `${number},${englishName}`
        surahSelect.appendChild(option);
       })

       surahSelect.addEventListener('change',(e) => {
            const {value} = e.target;
            SelectedSurahIdx = value;
            ayah_selected.innerHTML = `<option selected disabled>Oyatni tanlang</option>`;
            surahs[value]?.ayahs.forEach((_,idx) =>{
                const option = document.createElement('option');
                option.value= idx;
                option.textContent = `${idx+1}`;
                ayah_selected.appendChild(option)
            })
       })

       ayah_selected.addEventListener('change',(e) =>{
        const {value} = e.target;
        const SelectedAyah = surahs[SelectedSurahIdx]?.ayahs?.[value]
        audio.src = SelectedAyah.audio;
        text.textContent = SelectedAyah.text;
       })
    })()
})