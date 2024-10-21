function toggleBulb(bulbId) {
    const bulb = document.getElementById(bulbId);
    if (bulb.src.includes('https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png')) {
        bulb.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';
    } else {
        bulb.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png';
    }
}