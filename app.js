const topsDiv = document.querySelector('.tops');

const tops = ['img/top1.png', 'img/top2.png', 'img/top3.png', 'img/top4.png']
const bottoms = ['img/bottom1.png', 'img/bottom2.png', 'img/bottom3.png', 'img/bottom4.png']
const bottomsDiv = document.querySelector('.bottoms');
const capsuleOutfits = document.querySelector('.capsule-outfits');

function makeOutfit (bottomsArrayIndex) {
    tops.forEach(top => {
        const newOutfitDiv = document.createElement('div');
        newOutfitDiv.classList.add('outfit');
        const imgTop = document.createElement('img');
        imgTop.src = top;
        const imgBottom = document.createElement('img');
        imgBottom.src = bottoms[bottomsArrayIndex];
        newOutfitDiv.appendChild(imgTop);
        imgTop.insertAdjacentElement('afterend', imgBottom);
        capsuleOutfits.appendChild(newOutfitDiv);
    })
}

makeOutfit(0);
makeOutfit(1);
makeOutfit(2);
makeOutfit(3);
