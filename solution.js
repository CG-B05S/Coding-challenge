const apartmentHunting = (blocks, req) => {
    let maxSize = req.length;
    let bestChoiceIndex = -1;
    let matched = new Array();
    let max = 0;
    if(blocks.length == 0) {
        return 0;
    }
    if(maxSize == 0) {
        return 1;
    }
    for(let i = 0; i < blocks.length; i++) {
        matched[i] = 0;
        for(let j = 0; j < maxSize; j++) {
            if((blocks[i][req[j]] == true) && (matched[i] < maxSize)) {
                matched[i]++;
                if(matched[i] == maxSize) {
                    return i+1;
                }
            }
        }
    }
    for(let k = 0; k < matched.length; k++) {
        if(matched[k] > max) {
            max = matched[k];
            bestChoiceIndex = k;
        }
    }
    return bestChoiceIndex+1;
}
