const back = document.querySelector('.background');
const grid = document.querySelector('.grid');
const allBlock = document.querySelectorAll('.back_animation > li');
const profileWindow = document.querySelector('.profile_window');
const nameInput = document.querySelector('#ninkname');
const mainLogo = document.querySelector('.logo');

// let gridValue = (col.offsetHeight / 5);
let gridValue = 100;


// play btn
document.querySelector('.play').addEventListener('click', () => {
    profileWindow.style.display = 'block';
    setTimeout(() => {
        profileWindow.style.opacity = 1;
    }, 100);


    // close btn
    document.querySelector('.closeBtn').addEventListener('click', () => {
        profileWindow.style.opacity = 0;
        setTimeout(() => {
            profileWindow.style.display = 'none';
        }, 200);

        nameInput.value = '';
    });
    // close btn


    // enter key or summmit button click event
    window.addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){
            moveForGame();
        }
    });
    document.querySelector('#summit').addEventListener('click', () => {
        moveForGame();
    });
    // enter key or summmit button click event
});


const moveForGame = () => {
    let ninkName = nameInput.value;
    

    if (ninkName.trim() === "") {
        document.querySelector('.alert').textContent = '닉네임을 제대로 입력해주세요'
    } else {
        if(ninkName.length >= 8){
            document.querySelector('.alert').textContent = '닉네임을 8자 이내로 입력해주세요'
        } else {
            localStorage.setItem('ninkname', ninkName);
            window.location.href = './game/stage.html';
        };
    };
};
// play btn






// block animation


// block1 ani
const block1Ani = () => {
    setTimeout(() => {
        allBlock[0].setAttribute('style', `width: calc(${gridValue}px);
                height: calc(${gridValue}px); left: calc(${gridValue}px * 2); bottom: calc(${gridValue}px);`);

        setTimeout(() => {
            allBlock[0].children[0].setAttribute('style', `right: calc(${gridValue}px);`)

            setTimeout(() => {
                allBlock[0].children[0].setAttribute('style', `right: calc(${gridValue}px); bottom: 0;`)

                allBlock[0].setAttribute('style', `width: calc(${gridValue}px);
                        height: calc(${gridValue}px); left: calc(${gridValue}px * 2); bottom: calc(${gridValue}px * 2);`);
                // one cut

                setTimeout(() => {
                    allBlock[0].children[0].setAttribute('style', `right: calc(${gridValue}px); bottom: calc(${gridValue}px)`)

                    allBlock[0].setAttribute('style', `width: calc(${gridValue}px);
                            height: calc(${gridValue}px); left: calc(${gridValue}px * 2); bottom: calc(${gridValue}px);`);

                    setTimeout(() => {
                        allBlock[0].children[0].setAttribute('style', `right: 0; bottom: calc(${gridValue}px);`)

                        setTimeout(() => {
                            allBlock[0].setAttribute('style', `width: calc(${gridValue}px);
                                    height: calc(${gridValue}px); left: calc(${gridValue}px * 2); bottom: 2px;`);
                            // two cut

                            block1Ani();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};
// block1 ani


// block2 ani
const block2Ani = () => {
    setTimeout(() => {
        allBlock[1].children[0].setAttribute('style', `bottom: ${gridValue}px; right: calc(-${gridValue}px);`);

        setTimeout(() => {
            allBlock[1].children[0].setAttribute('style', `right: calc(-${gridValue}px); bottom: 0px;`);

            setTimeout(() => {
                allBlock[1].setAttribute('style', `width: calc((${gridValue}px) * 2);
                        height: ${gridValue}px; left: calc((${gridValue}px) * 3); bottom: ${gridValue * 2}px`);
                // one cut

                setTimeout(() => {
                    allBlock[1].children[0].setAttribute('style', `right: calc(-${gridValue}px); bottom: ${gridValue}px;`);

                    setTimeout(() => {
                        allBlock[1].children[0].setAttribute('style', `right: 0; bottom: ${gridValue}px;`);

                        allBlock[1].setAttribute('style', `width: calc((${gridValue}px) * 2);
                                height: ${gridValue}px; left: calc((${gridValue}px) * 4); bottom: ${gridValue * 2}px`);
                        // two cut

                        block2Ani();

                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};
// block2 ani


// block3 ani
const block3Ani = () => {
    setTimeout(() => {
        allBlock[2].children[0].setAttribute('style', `bottom: ${gridValue * 2}px;`);

        setTimeout(() => {
            allBlock[2].children[0].setAttribute('style', `bottom: ${gridValue * 2}px; left: 0px`);

            setTimeout(() => {
                allBlock[2].setAttribute('style', `width: ${gridValue}px;
                        height: calc(${gridValue}px * 2); bottom: calc((${gridValue}px) * 2); right: calc((${gridValue}px) * 2);`);
                // one cut

                setTimeout(() => {
                    allBlock[2].setAttribute('style', `width: ${gridValue}px;
                        height: calc(${gridValue}px * 2); bottom: calc(${gridValue}px * 1); right: calc((${gridValue}px) * 2);`);

                    setTimeout(() => {
                        allBlock[2].children[0].setAttribute('style', `bottom: ${gridValue}px; left: 0px`);

                        setTimeout(() => {
                            allBlock[2].children[0].setAttribute('style', `bottom: ${gridValue}px; left: 100%`);
                            // two cut

                            block3Ani();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};
// block3 ani


block1Ani();
block2Ani();
block3Ani();
// block animation



// 블록 위치, 크기 조정
allBlock[0].setAttribute('style', `width: calc(${gridValue}px);
            height: calc(${gridValue}px); left: calc(${gridValue}px * 2);`);
allBlock[1].setAttribute('style', `width: calc(${gridValue}px * 2);
            height: ${gridValue}px; left: calc((${gridValue}px) * 4); bottom: ${gridValue * 2}px`);
allBlock[1].children[0].setAttribute('style', `bottom: ${gridValue}px`);

allBlock[2].setAttribute('style', `width: ${gridValue}px;
            height: calc(${gridValue}px * 2); bottom: calc(${gridValue}px); right: calc((${gridValue}px) * 2);`);
// 블록 위치, 크기 조정



// 격자 만들기
// const blockSize = 150;  // 적절히 조절
const blockSize = 100;
const gridHeight = (Math.round(window.innerHeight / blockSize));
const gridWidth = (Math.round(window.innerWidth / blockSize));
// const gridHeight = (Math.round(window.innerHeight * 0.8 / blockSize));
// const gridWidth = (Math.round(window.innerWidth * 0.85 / blockSize));
const gridSize = gridHeight * gridWidth;
console.log(gridHeight, blockSize);


for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', `width: ${blockSize}px; height: ${blockSize}px;`);
    div.classList.add('grid_block');
    grid.appendChild(div)
}
grid.setAttribute('style', `width: ${gridWidth * blockSize}px; height: ${gridHeight * blockSize}px;
    background-color: white;`);

// 격자 만들기