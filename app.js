const topsDiv = document.querySelector('.tops');
const tops = ['img/top1.png', 'img/top2.png', 'img/top3.png', 'img/top4.png']
const bottoms = ['img/bottom1.png', 'img/bottom2.png', 'img/bottom3.png', 'img/bottom4.png']
const bottomsDiv = document.querySelector('.bottoms');
const capsuleOutfits = document.querySelector('.capsule-outfits');

function displayCapsuleItems (topsArray, bottomsArray) {
    const capsuleItems = document.querySelector('.capsule-items');
    capsuleItems.innerHTML = `
        <h2>Capsule items: tops</h2>
        <div class="tops">
            <div class="top">
                <img src="${topsArray[0]}" alt="">
            </div>
            <div class="top">
                <img src="${topsArray[1]}" alt="">
            </div>
            <div class="top">
                <img src="${topsArray[2]}" alt="">
            </div>
            <div class="top">
                <img src="${topsArray[3]}" alt="">
            </div>
        </div>
        <h2>Capsule items: bottoms</h2>
        <div class="bottoms">
            <div class="bottom">
                <img src="${bottomsArray[0]}" alt="">
            </div>
            <div class="bottom">
                <img src="${bottomsArray[1]}" alt="">
            </div>
            <div class="bottom">
                <img src="${bottomsArray[2]}" alt="">
            </div>
            <div class="bottom">
                <img src="${bottomsArray[3]}" alt="">
            </div>
        </div>
    `
}

displayCapsuleItems(tops, bottoms);

function makeOutfit (bottomsArrayIndex) {
    tops.forEach(top => {
        const newOutfitDiv = document.createElement('div');
        const topDiv = document.createElement('div');
        const bottomDiv = document.createElement('div');
        topDiv.classList.add('top');
        bottomDiv.classList.add('bottom');
        newOutfitDiv.classList.add('outfit');
        const imgTop = document.createElement('img');
        imgTop.src = top;
        const imgBottom = document.createElement('img');
        imgBottom.src = bottoms[bottomsArrayIndex];
        topDiv.appendChild(imgTop);
        bottomDiv.appendChild(imgBottom);
        newOutfitDiv.appendChild(topDiv);
        newOutfitDiv.appendChild(bottomDiv);
        capsuleOutfits.appendChild(newOutfitDiv);
    })
}

for (let i=0; i<=bottoms.length-1; i++) {
    makeOutfit(i)
};