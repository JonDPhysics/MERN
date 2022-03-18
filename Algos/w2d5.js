const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

function measureWaterLevels(waterLevels) {
    let j = 1
    let maxLevel = -1
    for(let i = 0; i<waterLevels.length; i++){
        if(waterLevels[i] < waterLevels[j] && (waterLevels[j] - waterLevels[i]) > maxLevel){
            maxLevel = waterLevels[j] - waterLevels[i]
            j++
        }
    }
    return maxLevel
}

console.log(measureWaterLevels(riverLevels2) )