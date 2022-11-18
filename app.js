const topsDiv = document.querySelector('.tops');
const bottomsDiv = document.querySelector('.bottoms');
const capsuleOutfits = document.querySelector('.capsule-outfits');

const capsuleForm = document.querySelector('.capsule-form');
const randomOutfitButton = document.querySelector('.random-outfit');
const allOutfitsButton = document.querySelector('.all-outfits');

capsuleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const top1 = e.target[0].value;
    const top2 = e.target[1].value;
    const top3 = e.target[2].value;
    const top4 = e.target[3].value;
    const bottom1 = e.target[4].value;
    const bottom2 = e.target[5].value;
    const bottom3 = e.target[6].value;
    const bottom4 = e.target[7].value;
    const tops = [top1, top2, top3, top4]
    const bottoms = [bottom1, bottom2, bottom3, bottom4]
    if (e.submitter.className === "all-outfits") {    
        displayCapsuleItems(tops, bottoms);
        for (let i=0; i<=bottoms.length-1; i++) {
            makeOutfit(tops, bottoms, i)
        };
    } else if (e.submitter.className === 'random-outfit') {
        randomOutfit(tops, bottoms);
    }
});

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



function makeOutfit (topsArray, bottomsArray, bottomsArrayIndex) {
    topsArray.forEach(top => {
        const newOutfitDiv = document.createElement('div');
        const topDiv = document.createElement('div');
        const bottomDiv = document.createElement('div');
        topDiv.classList.add('top');
        bottomDiv.classList.add('bottom');
        newOutfitDiv.classList.add('outfit');
        const imgTop = document.createElement('img');
        imgTop.src = top;
        const imgBottom = document.createElement('img');
        imgBottom.src = bottomsArray[bottomsArrayIndex];
        topDiv.appendChild(imgTop);
        bottomDiv.appendChild(imgBottom);
        newOutfitDiv.appendChild(topDiv);
        newOutfitDiv.appendChild(bottomDiv);
        capsuleOutfits.appendChild(newOutfitDiv);
    })
}

function randomOutfit (topsArray, bottomsArray) {
    const randTopsArrayIndex = Math.floor(Math.random() * 3);
    const randBottomsArrayIndex = Math.floor(Math.random() * 3);
    const newOutfitDiv = document.createElement('div');
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    capsuleOutfits.innerHTML = ""
    topDiv.classList.add('top');
    bottomDiv.classList.add('bottom');
    newOutfitDiv.classList.add('outfit');
    const imgTop = document.createElement('img');
    imgTop.src = topsArray[randTopsArrayIndex];
    const imgBottom = document.createElement('img');
    imgBottom.src = bottomsArray[randBottomsArrayIndex];
    topDiv.appendChild(imgTop);
    bottomDiv.appendChild(imgBottom);
    newOutfitDiv.appendChild(topDiv);
    newOutfitDiv.appendChild(bottomDiv);
    capsuleOutfits.appendChild(newOutfitDiv); 

}