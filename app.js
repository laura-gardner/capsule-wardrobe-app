//Global variables
const topsDiv = document.querySelector('.tops');
const bottomsDiv = document.querySelector('.bottoms');
const capsuleOutfits = document.querySelector('.capsule-outfits'); 
const buttonsDiv = document.querySelector('.buttons');
const capsuleForm = document.querySelector('.capsule-form');
const randomOutfitButton = document.querySelector('.random-outfit');
const allOutfitsButton = document.querySelector('.all-outfits');
const inputsDiv = document.querySelector('.inputs-div');
const capsuleOutfitsH2 = document.querySelector('.capsule-outfits-h2');
const randomOutfitDiv = document.querySelector('.random-outfit-div')
const randomOutfitH2 = document.querySelector('.random-outfit-h2')
const resetButton = document.querySelector('.reset-urls-button');

capsuleForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const tops = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value];
    const bottoms = [e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value];
    resetButton.classList.toggle('hidden');
    inputsDiv.classList.toggle('hidden');
        
    if (e.submitter.className === "all-outfits") { 
        if (!randomOutfitH2.classList.contains('hidden')) {
            randomOutfitH2.classList.toggle('hidden')
        };
        if (resetButton.classList.contains('hidden')) {
            resetButton.classList.toggle('hidden')
        };
        randomOutfitDiv.innerHTML = "";
        capsuleOutfitsH2.classList.toggle('hidden');
        if (!inputsDiv.classList.contains('hidden')) {
            inputsDiv.classList.toggle('hidden')
        };
        displayCapsuleItems(tops, bottoms);
        for (let i=0; i<=bottoms.length-1; i++) {
            makeOutfit(tops, bottoms, i)
        };
    } else if (e.submitter.className === 'random-outfit') {
        randomOutfit(tops, bottoms);
    } else if (e.submitter.className === 'resetUrlsButton') {
        showInputs();
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
    randomOutfitDiv.innerHTML = "";
    let randTopsArrayIndex = Math.floor(Math.random() * 3);
    let randBottomsArrayIndex = Math.floor(Math.random() * 3);
    const newOutfitDiv = document.createElement('div');
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    capsuleOutfits.innerHTML = "";
    if (randomOutfitH2.classList.contains('hidden')) {
        randomOutfitH2.classList.toggle('hidden')
    };
    if (!inputsDiv.classList.contains('hidden')) {
        inputsDiv.classList.toggle('hidden')
    };
    if (!capsuleOutfitsH2.classList.contains('hidden')) {
        capsuleOutfitsH2.classList.toggle('hidden');
    };
    if (resetButton.classList.contains('hidden')) {
        resetButton.classList.toggle('hidden');
    };
    topDiv.classList.add('top');
    bottomDiv.classList.add('bottom');
    newOutfitDiv.classList.add('outfit');
    let imgTop = document.createElement('img');
    imgTop.src = topsArray[randTopsArrayIndex];
    let imgBottom = document.createElement('img');
    imgBottom.src = bottomsArray[randBottomsArrayIndex];
    topDiv.appendChild(imgTop);
    bottomDiv.appendChild(imgBottom);
    newOutfitDiv.appendChild(topDiv);
    newOutfitDiv.appendChild(bottomDiv);
    randomOutfitDiv.appendChild(newOutfitDiv); 

}