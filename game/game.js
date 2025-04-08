

const input = document.querySelector('#code_box');
const develo = document.querySelector('.develo img');
const develoChat = document.querySelector('.develo_chat');
const targetEl = document.querySelector('.target_el');


let correct = 'background: linear-gradient(skyblue, white)';
let correct2 = 'background-image: linear-gradient(skyblue, white)';

document.querySelector('.complete_btn').addEventListener('click', () => {
    if (input.value.trim() === '') {
        develoChat.innerHTML = `내용이 없는것 같아 다시 한 번 해볼래?`;
        return;
    }

    targetEl.setAttribute('style', `${input.value}`);

    setTimeout(() => {
        if (correct.toLowerCase().includes(input.value.toLowerCase()) || correct2.toLowerCase().includes(input.value.toLowerCase())) {
            document.querySelector('.next').style.display = 'inline-block';
            develoChat.innerHTML = `질헸어! 다음 단계로 넘어가려면 아래 다음 단계 버튼을 눌러줘!`;
        } else {
            develoChat.innerHTML = `뭔가 잘못된것 같아 다시 한 번 해볼래?`;
        }
    }, 500);
});








develoChat.innerHTML = `안녕 ${localStorage.getItem('ninkname')}! <br> 난 너의 퍼즐을 도와줄 develo 라고해!`;
setTimeout(() => {
    develoChat.innerHTML = `이 채팅창을 클릭해서 다음 대화로 넘어갈 수 있어 한 번 해볼래?`;
}, 3000);


let clickValue = 0;
const chatContent = [`잘했어! 그럼 설명을 시작할게`
    , `먼저 그림을 완성하기 위해 그라데이션으로 배경색을 입혀보자!`
    , `하늘을 그리는거니까.. 위의 색은 skyblue, 아래 색은 white로 설정해줘`
    , `만약 잘 모르겠다면 힌트 버튼을 클릭해줘!`
]
document.querySelector('.develo_chat').addEventListener('click', () => {
    console.log(chatContent.length, clickValue);

    if (chatContent.length < clickValue + 1) {
        return;
    } else {
        develoChat.textContent = chatContent[clickValue];
        clickValue++
    }
})


document.querySelector('.hint').addEventListener('click', () => {


    document.querySelector('.hint_msg').style.display = 'inline-block';
    develoChat.innerHTML = `3번줄에 주석을 확인해줘!`;

});


